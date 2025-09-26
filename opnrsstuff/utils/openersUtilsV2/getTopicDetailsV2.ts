import { CategoryDataV2 } from "app/@types/appTypes/CategoryDataV2"
import { HandleTopicDetailsInput } from "app/@types/appTypes/HandleTopicDetailsInput"
import { TopicDetailV2 } from "app/@types/appTypes/TopicDetailV2"
import { allOpenersDataV2 } from "app/dataV2"

const openersDataV2 = allOpenersDataV2

const getTopicDetailsV2 = ({
  categoryId,
  topicId,
}: HandleTopicDetailsInput): TopicDetailV2 | null => {
  const categoryData: CategoryDataV2 = openersDataV2[categoryId]

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
    topicTagline: topic.topicTagline, // New field
    playersRecommended: topic.playersRecommended, // New field
    waysToPlay: topic.waysToPlay, // New field
    keepInMind: topic.keepInMind, // New field
    sharingOptions: topic.sharingOptions, // New field for sharing permissions
    filterCount: Object.keys(topic.subTopics).length,
    questionCount,
    subTopics: topic.subTopics,
    categoryName: categoryData.categoryName,
    categoryText: categoryData.categoryText,
    categoryId: categoryData.id,
  }
}

export default getTopicDetailsV2
