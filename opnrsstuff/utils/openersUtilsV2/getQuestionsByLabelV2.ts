import { RestructuredDataV2, RestructuredQuestionV2, LabelV2 } from "app/@types/appTypes"
import getQuestionsV2 from "./getQuestionsV2"

export function getQuestionsByLabelV2(
  restructuredDataV2: RestructuredDataV2,
  categoryId: string,
  topicId: string,
  labels: LabelV2[],
): RestructuredQuestionV2[] {
  const allQuestions = getQuestionsV2(restructuredDataV2, categoryId, topicId)
  
  // If no labels specified, return all questions
  if (!labels || labels.length === 0) {
    return allQuestions
  }
  
  // Filter questions that have at least one of the specified labels
  return allQuestions.filter((question) => 
    question.questionLabels.some(label => labels.includes(label))
  )
}

export default getQuestionsByLabelV2
