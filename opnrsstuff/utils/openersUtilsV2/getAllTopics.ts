import { RestructuredData } from "app/@types/appTypes"

export const getAllTopics = (
  restructuredData: RestructuredData,
): Array<{ topicId: string; topicText: string; topicName: string }> => {
  const allTopics = []

  for (const category of Object.values(restructuredData)) {
    for (const topic of category.categoryTopics) {
      allTopics.push({
        topicId: topic.topicId,
        topicText: topic.topicText,
        topicName: topic.topicName,
      })
    }
  }

  return allTopics
}
