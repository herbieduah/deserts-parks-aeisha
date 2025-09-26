import { translate } from "i18n-js"
import { BottomCardStylesProps } from "app/screens/HomeScreen/ActionsBar/components/BottomCard/styles"
import {
  BOOKMARK_ACTION_BUTTON,
  COPY_ACTION_BUTTON,
  CUSTOMIZE_ACTION_BUTTON,
  FILTER_ACTION_BUTTON,
  STARRED_ACTION_BUTTON,
  tappableElementsProps,
} from "app/screens/HomeScreen/constants"
import { DefaultTheme } from "react-native-stylex/DefaultTheme"

interface IgetActionItemTranslateSize {
  screenWidth: number
  isShowMore?: boolean
  isActionsBarActive?: boolean
  elementName?: tappableElementsProps | undefined | null
  theme: DefaultTheme
}

const getActionItemTranslateSize = ({
  screenWidth,
  isShowMore,
  elementName,
  theme,
}: IgetActionItemTranslateSize) => {
  const initialActionItemTranslateX = screenWidth

  const elements = [
    CUSTOMIZE_ACTION_BUTTON,
    STARRED_ACTION_BUTTON,
    BOOKMARK_ACTION_BUTTON,
    COPY_ACTION_BUTTON,
  ]
  const elementIndex = elements.indexOf(elementName)

  return {
    initialActionItemTranslateX: -initialActionItemTranslateX,
    translateX: -(elementIndex * initialActionItemTranslateX),
  }
}

export default getActionItemTranslateSize
