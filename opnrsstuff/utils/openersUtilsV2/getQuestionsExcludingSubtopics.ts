import { GetQuestionsExcludingSubtopicsInput } from "app/@types/appTypes/GetQuestionsExcludingSubtopicsInput"
import { QuestionDetail } from "app/@types/appTypes/QuestionDetail"
import { SubTopicDetail } from "app/@types/appTypes/SubtopicDetail"
import { allOpenersDataV2 } from "app/dataV2"
const openersData = allOpenersDataV2
export const getQuestionsExcludingSubtopics = ({
  categoryId,
  topicId,
  excludeSubtopicIds = [], // Default to an empty array
}: GetQuestionsExcludingSubtopicsInput): QuestionDetail[] => {
  const categoryData = openersData[categoryId]
  if (!categoryData) {
    return []
  }

  const topicData = categoryData.topics[topicId]
  if (!topicData) {
    return []
  }

  // Convert the array of IDs to exclude into a Set for faster lookup
  const excludeSet = new Set(excludeSubtopicIds)
  const questions: QuestionDetail[] = []

  Object.values(topicData.subTopics).forEach((subTopic: SubTopicDetail) => {
    // Skip this subTopic if its ID is in the excludeSet
    if (excludeSet.has(subTopic.id)) {
      return
    }

    Object.values(subTopic.questions).forEach((question) => {
      questions.push({
        questionId: question.id,
        question: question.question,
        initialDetails: question?.initialDetails ?? null,
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
