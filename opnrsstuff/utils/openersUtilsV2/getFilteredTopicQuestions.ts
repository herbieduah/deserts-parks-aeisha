import { RestructuredData, RestructuredQuestion } from "app/@types/appTypes"
import { getQuestions } from "app/utils/openersUtils/getQuestions"
import { shuffleArray } from "../shuffleArray"

export function getFilteredTopicQuestions(
  restructuredData: RestructuredData,
  categoryId: string,
  topicId: string,
  excludedSubtopicFilters: string[],
  shouldShuffle = true,
): RestructuredQuestion[] {
  // Get all questions using the existing getQuestions function
  const allQuestions = getQuestions(restructuredData, categoryId, topicId)
  const questions = shouldShuffle ? shuffleArray(allQuestions) : allQuestions
  // Filter out questions based on excludedSubtopicFilters
  return questions.filter((question) => !excludedSubtopicFilters.includes(question.subTopicId))
}
