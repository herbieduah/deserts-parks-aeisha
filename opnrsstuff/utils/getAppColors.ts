import { appColors } from "./getAppTheme"

const getAppColorsInfo = (currentIdforColors: string) => {
  return {
    primaryColor: appColors?.[currentIdforColors]?.primaryColor ?? "#000000",
    secondaryColor: appColors?.[currentIdforColors]?.secondaryColor ?? "#FFFFFF",
    combinationName: appColors?.[currentIdforColors]?.combinationName ?? "Black and White",
    subscription: appColors?.[currentIdforColors]?.subscription ?? "FREE",
  }
}

export default getAppColorsInfo
