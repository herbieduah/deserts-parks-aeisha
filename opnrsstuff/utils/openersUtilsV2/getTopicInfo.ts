import { RestructuredData, RestructuredTopic } from "app/@types/appTypes"

export function getTopicInfo(
  restructuredData: RestructuredData,
  categoryId: string,
  topicId: string,
): RestructuredTopic | null {
  if (!restructuredData[categoryId]) {
    console.warn(`Category not found: ${categoryId}`)
    return null
  }
  if (!restructuredData[categoryId].topics[topicId]) {
    console.warn(`Topic not found: ${topicId} in category ${categoryId}`)
    return null
  }
  return restructuredData[categoryId].topics[topicId]
}
