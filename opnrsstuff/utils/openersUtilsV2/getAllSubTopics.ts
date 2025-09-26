import { RestructuredData, RestructuredSubTopic } from "app/@types/appTypes"

export function getAllSubTopics(
  restructuredData: RestructuredData,
  categoryId: string,
  topicId: string,
): RestructuredSubTopic[] {
  if (!restructuredData[categoryId]) {
    console.warn(`Category not found: ${categoryId}`)
    return []
  }
  if (!restructuredData[categoryId].topics[topicId]) {
    console.warn(`Topic not found: ${topicId} in category ${categoryId}`)
    return []
  }
  return restructuredData[categoryId].topics[topicId].subTopics
}
