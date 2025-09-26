import { RestructuredDataV2, RestructuredTopicV2 } from "app/@types/appTypes"

export function getAllTopicsByCategoryIdV2(
  restructuredDataV2: RestructuredDataV2,
  categoryId: string,
): RestructuredTopicV2[] {
  if (!restructuredDataV2[categoryId]) {
    console.warn(`Category not found: ${categoryId}`)
    return []
  }
  return restructuredDataV2[categoryId].categoryTopics
}

export default getAllTopicsByCategoryIdV2
