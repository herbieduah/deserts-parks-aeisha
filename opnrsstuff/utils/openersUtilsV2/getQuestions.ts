import { RestructuredData, RestructuredQuestion } from "app/@types/appTypes"

export function getQuestions(
  restructuredData: RestructuredData,
  categoryId: string,
  topicId: string,
): RestructuredQuestion[] {
  if (!restructuredData[categoryId]) {
    console.warn(`Category not found: ${categoryId}`)
    return []
  }
  if (!restructuredData[categoryId].topics[topicId]) {
    console.warn(`Topic not found: ${topicId} in category ${categoryId}`)
    return []
  }
  return restructuredData[categoryId].topics[topicId].topicQuestions
}
