import { RestructuredData, RestructuredTopic } from "app/@types/appTypes"

export function getAllTopicsByCategoryId(
  restructuredData: RestructuredData,
  categoryId: string,
): RestructuredTopic[] {
  if (!restructuredData[categoryId]) {
    console.warn(`Category not found: ${categoryId}`)
    return []
  }
  return restructuredData[categoryId].categoryTopics
}
