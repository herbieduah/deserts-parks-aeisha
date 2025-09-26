import {
  ActionBarStateType,
  BOOKMARK_ACTION_BUTTON,
  COPY_ACTION_BUTTON,
  CUSTOMIZE_ACTION_BUTTON,
  STARRED_ACTION_BUTTON,
  actionBarState,
  tappableElementsProps,
} from "app/screens/HomeScreen/constants"
import { ta } from "date-fns/locale"
import { Dispatch, SetStateAction } from "react"

interface IActionBar {
  setIsActionsBarActive: Dispatch<SetStateAction<boolean>>
  tappedElement: tappableElementsProps | null
  setActionBarAnimationState: Dispatch<SetStateAction<ActionBarStateType>>
}

const handleActionBar = ({
  setIsActionsBarActive,
  tappedElement,
  setActionBarAnimationState,
}: IActionBar) => {
  if (tappedElement) {
    setIsActionsBarActive(true)
  }
  if (tappedElement === COPY_ACTION_BUTTON) {
    setActionBarAnimationState(actionBarState.ACTION_BAR_OPEN_MEDIUM)
  } else if (
    [BOOKMARK_ACTION_BUTTON, CUSTOMIZE_ACTION_BUTTON, STARRED_ACTION_BUTTON].includes(tappedElement)
  ) {
    setActionBarAnimationState(actionBarState.ACTION_BAR_OPEN_LARGE)
  } else if (!tappedElement) {
    setIsActionsBarActive(false)
    setActionBarAnimationState(actionBarState.ACTION_BAR_CLOSE)
  }
}

export default handleActionBar
