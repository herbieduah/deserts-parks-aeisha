import { CategoryData } from "app/@types/appTypes/CategoryData"
import {
  RestructuredData,
  RestructuredQuestion,
  RestructuredSubTopic,
  RestructuredTopic,
} from "app/@types/appTypes/ResturctureData"

export const restructureData = (allOpenersData: CategoryData): RestructuredData => {
  const restructured: RestructuredData = {}

  try {
    for (const [categoryId, category] of Object.entries(allOpenersData)) {
      if (!category || typeof category !== "object") {
        throw new Error(`Invalid category data for categoryId: ${categoryId}`)
      }

      restructured[categoryId] = {
        id: category.id,
        categoryText: category.categoryText,
        categoryName: category.categoryName,
        categoryTopics: [],
        topics: {},
      }

      if (!category.topics || typeof category.topics !== "object") {
        throw new Error(`Invalid topics data for categoryId: ${categoryId}`)
      }

      for (const [topicId, topic] of Object.entries(category.topics)) {
        if (!topic || typeof topic !== "object") {
          throw new Error(`Invalid topic data for topicId: ${topicId} in category: ${categoryId}`)
        }

        const restructuredTopic: RestructuredTopic = {
          topicId: topic.id,
          topicText: topic.topicText,
          topicName: topic.topicName,
          topicLabels: topic.topicLabels,
          topicDescription: topic.topicDescription,
          topicInstructions: topic.topicInstructions,
          topicSubscription: topic.topicSubscription,
          topicDescriptionShort: topic.topicDescriptionShort,
          questionPreviews: topic.questionPreviews,
          excludedSubTopics: topic.excludedSubTopics,
          questionCount: 0,
          subtopicCount: Object.keys(topic.subTopics).length,
          topicQuestions: [],
          subTopics: [],
          categoryName: category.categoryName,
          categoryText: category.categoryText,
          categoryId: category.id,
        }

        if (!topic.subTopics || typeof topic.subTopics !== "object") {
          throw new Error(
            `Invalid subTopics data for topicId: ${topicId} in category: ${categoryId}`,
          )
        }

        for (const [subTopicId, subTopic] of Object.entries(topic.subTopics)) {
          if (!subTopic || typeof subTopic !== "object") {
            throw new Error(
              `Invalid subTopic data for subTopicId: ${subTopicId} in topic: ${topicId}, category: ${categoryId}`,
            )
          }

          const restructuredSubTopic: RestructuredSubTopic = {
            id: subTopic.id,
            subTopicText: subTopic.subTopicText,
            subTopicName: subTopic.subTopicName,
            subTopicLabels: subTopic.subTopicLabels,
            subTopicSubscription: subTopic.subTopicSubscription,
            subtopicQuestions: [],
          }

          if (!subTopic.questions || typeof subTopic.questions !== "object") {
            throw new Error(
              `Invalid questions data for subTopicId: ${subTopicId} in topic: ${topicId}, category: ${categoryId}`,
            )
          }

          for (const [questionId, question] of Object.entries(subTopic.questions)) {
            if (!question || typeof question !== "object") {
              throw new Error(
                `Invalid question data for questionId: ${questionId} in subTopic: ${subTopicId}, topic: ${topicId}, category: ${categoryId}`,
              )
            }

            const restructuredQuestion: RestructuredQuestion = {
              questionId,
              question: question.question,
              categoryId: category.id,
              categoryText: category.categoryText,
              categoryName: category.categoryName,
              topicId: topic.id,
              topicText: topic.topicText,
              topicName: topic.topicName,
              topicLabels: topic.topicLabels,
              subTopicId,
              subTopicText: subTopic.subTopicText,
              subTopicName: subTopic.subTopicName,
              subTopicLabels: subTopic.subTopicLabels,
              subTopicSubscription: subTopic.subTopicSubscription,
            }

            restructuredSubTopic.subtopicQuestions.push(restructuredQuestion)
            restructuredTopic.topicQuestions.push(restructuredQuestion)
            restructuredTopic.questionCount++
          }

          restructuredTopic.subTopics.push(restructuredSubTopic)
        }

        restructured[categoryId].categoryTopics.push(restructuredTopic)
        restructured[categoryId].topics[topicId] = restructuredTopic
      }
    }
  } catch (error) {
    console.error("Error in restructureData:", error)
    throw error // Re-throw the error after logging
  }

  return restructured
}

export default restructureData
