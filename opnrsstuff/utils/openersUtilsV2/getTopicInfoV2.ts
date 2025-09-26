import { RestructuredDataV2, RestructuredTopicV2 } from "app/@types/appTypes"

export function getTopicInfoV2(
  restructuredDataV2: RestructuredDataV2,
  categoryId: string,
  topicId: string,
): RestructuredTopicV2 | null {
  if (!restructuredDataV2[categoryId]) {
    console.warn(`Category not found: ${categoryId}`)
    return null
  }
  if (!restructuredDataV2[categoryId].topics[topicId]) {
    console.warn(`Topic not found: ${topicId} in category ${categoryId}`)
    return null
  }
  return restructuredDataV2[categoryId].topics[topicId]
}

export default getTopicInfoV2
