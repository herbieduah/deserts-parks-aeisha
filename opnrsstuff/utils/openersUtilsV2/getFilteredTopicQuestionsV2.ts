import { RestructuredDataV2, RestructuredQuestionV2, LabelV2 } from "app/@types/appTypes"
import getQuestionsV2 from "./getQuestionsV2"
import { shuffleArray } from "../shuffleArray"

export function getFilteredTopicQuestionsV2(
  restructuredDataV2: RestructuredDataV2,
  categoryId: string,
  topicId: string,
  excludedSubtopicFilters: string[] = [],
  excludedLabels: LabelV2[] = [],
  shouldShuffle = true,
): RestructuredQuestionV2[] {
  // Get all questions using the getQuestionsV2 function
  const allQuestions = getQuestionsV2(restructuredDataV2, categoryId, topicId)
  
  // Filter out questions based on excludedSubtopicFilters and excludedLabels
  const filteredQuestions = allQuestions.filter((question) => {
    // Filter out questions from excluded subtopics
    if (excludedSubtopicFilters.includes(question.subTopicId)) {
      return false
    }
    
    // Filter out questions with excluded labels
    if (excludedLabels.length > 0 && 
        question.questionLabels.some(label => excludedLabels.includes(label))) {
      return false
    }
    
    return true
  })
  
  // Shuffle if needed
  return shouldShuffle ? shuffleArray(filteredQuestions) : filteredQuestions
}

export default getFilteredTopicQuestionsV2
