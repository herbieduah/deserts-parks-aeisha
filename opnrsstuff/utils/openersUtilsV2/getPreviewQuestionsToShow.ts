import { RestructuredQuestion } from "app/@types/appTypes/ResturctureData"

type GetPreviewQuestionsToShowProps = {
  questionPreviews: string[]
  previewedTopicQuestions: RestructuredQuestion[]
}

export const getPreviewQuestionsToShow = ({
  questionPreviews,
  previewedTopicQuestions,
}: GetPreviewQuestionsToShowProps): RestructuredQuestion[] => {
  // Filter questions that are in both questionPreviews and previewedTopicQuestions
  const matchedQuestions = previewedTopicQuestions.filter((q) =>
    questionPreviews.includes(q.questionId),
  )

  // If we have 3 or more matched questions, return the first 4
  if (matchedQuestions.length >= 3) {
    return matchedQuestions.slice(0, 4)
  }

  // If we have less than 3 matched questions, add random questions to make up 4
  const randomQuestions = previewedTopicQuestions
    .filter((q) => !matchedQuestions.includes(q))
    .sort(() => 0.5 - Math.random())
    .slice(0, 4 - matchedQuestions.length)

  return [...matchedQuestions, ...randomQuestions]
}
