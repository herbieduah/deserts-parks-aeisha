import { RestructuredDataV2, RestructuredQuestionV2 } from "app/@types/appTypes"

export function getQuestionsV2(
  restructuredDataV2: RestructuredDataV2,
  categoryId: string,
  topicId: string,
): RestructuredQuestionV2[] {
  if (!restructuredDataV2[categoryId]) {
    console.warn(`Category not found: ${categoryId}`)
    return []
  }
  if (!restructuredDataV2[categoryId].topics[topicId]) {
    console.warn(`Topic not found: ${topicId} in category ${categoryId}`)
    return []
  }
  return restructuredDataV2[categoryId].topics[topicId].topicQuestions
}

export default getQuestionsV2
