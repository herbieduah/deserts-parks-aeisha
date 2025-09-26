import { Dimensions } from "react-native"

export const detectSmallPhone = (): boolean => {
  const screenHeight = Dimensions.get("window").height
  const screenWidth = Dimensions.get("window").width

  return screenWidth <= 375 && screenHeight <= 667
}
