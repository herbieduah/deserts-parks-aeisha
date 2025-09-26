import { CategoryData } from "app/@types/appTypes/CategoryData"
import { HandleTopicDetailsInput } from "app/@types/appTypes/HandleTopicDetailsInput"
import { TopicDetail } from "app/@types/appTypes/TopicDetail"
import { allOpenersDataV2 } from "app/dataV2"

const openersData = allOpenersDataV2
const getTopicDetails = ({ categoryId, topicId }: HandleTopicDetailsInput): TopicDetail | null => {
  const categoryData: CategoryData = openersData[categoryId]

  if (!categoryData) {
    return null
  }

  const topic = categoryData.topics[topicId]

  if (!topic) {
    return null
  }

  const questionCount = Object.values(topic.subTopics).reduce(
    (acc, subTopic) => acc + Object.keys(subTopic.questions).length,
    0,
  )

  return {
    topicName: topic.topicName,
    topicText: topic.topicText,
    topicId: topic.id,
    filterCount: Object.keys(topic.subTopics).length,
    questionCount, // total number of questions in all subtopics
    subTopics: topic.subTopics,
    categoryName: categoryData.categoryName,
    categoryText: categoryData.categoryText,
    categoryId: categoryData.id,
  }
}

export default getTopicDetails
