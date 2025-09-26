import { GetQuestionsExcludingSubtopicsInput } from "app/@types/appTypes/GetQuestionsExcludingSubtopicsInput"
import { QuestionDetail } from "app/@types/appTypes/QuestionDetail"
import { LabelV2 } from "app/@types/appTypes/CategoryDataV2"
import { allOpenersDataV2 } from "app/dataV2"

const openersDataV2 = allOpenersDataV2

export const getQuestionsExcludingSubtopicsV2 = ({
  categoryId,
  topicId,
  excludeSubtopicIds = [], // Default to an empty array
  excludeLabels = [], // New parameter for excluding labels
}: GetQuestionsExcludingSubtopicsInput & { excludeLabels?: LabelV2[] }): QuestionDetail[] => {
  const categoryData = openersDataV2[categoryId]
  if (!categoryData) {
    return []
  }

  const topicData = categoryData.topics[topicId]
  if (!topicData) {
    return []
  }

  // Convert the arrays to Sets for faster lookup
  const excludeSubtopicSet = new Set(excludeSubtopicIds)
  const excludeLabelSet = new Set(excludeLabels)
  const questions: QuestionDetail[] = []

  Object.values(topicData.subTopics).forEach((subTopic) => {
    // Skip this subTopic if its ID is in the excludeSet
    if (excludeSubtopicSet.has(subTopic.id)) {
      return
    }

    Object.values(subTopic.questions).forEach((question) => {
      // Skip this question if it has any excluded labels
      if (excludeLabelSet.size > 0 && 
          question.questionLabels.some(label => excludeLabelSet.has(label))) {
        return
      }
      
      questions.push({
        questionId: question.id,
        question: question.question,
        initialDetails: null, // V2 doesn't have initialDetails
        topicId: topicData.id,
        topicText: topicData.topicText,
        topicName: topicData.topicName,
        categoryId: categoryData.id,
        categoryText: categoryData.categoryText,
        subTopicId: subTopic.id,
        subTopicText: subTopic.subTopicText,
      })
    })
  })

  return questions
}

export default getQuestionsExcludingSubtopicsV2
