import {
  BOOKMARK_ACTION_BUTTON,
  COPY_ACTION_BUTTON,
  CUSTOMIZE_ACTION_BUTTON,
  STARRED_ACTION_BUTTON,
  tappableElementsProps,
} from "app/screens/HomeScreen/constants"

interface IGetActionBarSizes {
  screenWidth: number
  isShowMore?: boolean
  isActionsBarActive?: boolean
  isIconActive?: boolean
  elementName?: tappableElementsProps | undefined | null
}

const getActionBarSizes = ({
  screenWidth,
  isActionsBarActive,
  isIconActive,
  elementName,
}: IGetActionBarSizes) => {
  let actionBarIconButtonSize = 0

  const totalActionBarWidth = screenWidth * 0.8

  const numIcons = 4
  const initialWidth = totalActionBarWidth / 4

  const activeWidth = initialWidth * 1.5
  const totalInactiveWidth = totalActionBarWidth - activeWidth
  let activeBarTranslateXSize = 0
  if (isActionsBarActive) {
    if (isIconActive) {
      actionBarIconButtonSize = activeWidth
    } else {
      const inactiveWidth = totalInactiveWidth / (numIcons - 1)
      actionBarIconButtonSize = inactiveWidth
      activeBarTranslateXSize = inactiveWidth
    }
  } else {
    actionBarIconButtonSize = initialWidth
  }

  const elements = [
    CUSTOMIZE_ACTION_BUTTON,
    STARRED_ACTION_BUTTON,
    BOOKMARK_ACTION_BUTTON,
    COPY_ACTION_BUTTON,
  ]
  const elementIndex = elements.indexOf(elementName)
  return {
    actionBarIconButtonSize,
    activeBarTranslateX: elementName ? elementIndex * activeBarTranslateXSize : 0,
    activeWidth,
    totalActionBarWidth,
  }
}

export default getActionBarSizes
