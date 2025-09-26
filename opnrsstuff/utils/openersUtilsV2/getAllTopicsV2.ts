import { RestructuredDataV2 } from "app/@types/appTypes"

export const getAllTopicsV2 = (
  restructuredDataV2: RestructuredDataV2,
): Array<{ topicId: string; topicText: string; topicName: string; topicTagline: string }> => {
  const allTopics = []

  for (const category of Object.values(restructuredDataV2)) {
    for (const topic of category.categoryTopics) {
      allTopics.push({
        topicId: topic.topicId,
        topicText: topic.topicText,
        topicName: topic.topicName,
        topicTagline: topic.topicTagline, // Include the new field
      })
    }
  }

  return allTopics
}

export default getAllTopicsV2
