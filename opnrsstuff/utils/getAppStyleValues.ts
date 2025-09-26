import {
  AppSectionDetails,
  AppSectionPercentProps,
  ActionBarSizesProps,
} from "../screens/HomeScreen/constants"

interface UpdatedAppSectionDetails {
  [sectionName: string]: UpdatedAppSection
}

interface UpdatedAppSection {
  height: AppSectionPercentProps
}

// interface ActionBarSizesProps {
//   [size: string]: number
// }

export default function getAppStyleValues(
  appSectionDetails: AppSectionDetails,
  deviceHeight: number,
): UpdatedAppSectionDetails {
  const getHeightOf = (percentage: number): number => deviceHeight * (percentage / 100)

  const updatedAppSectionDetails: UpdatedAppSectionDetails = {}

  for (const sectionName in appSectionDetails) {
    const section = appSectionDetails[sectionName]
    if (section.height) {
      const { value, ...rest } = section.height
      const updatedHeight: AppSectionPercentProps = {
        value: getHeightOf(value),
        ...rest,
      }

      for (const property in rest) {
        if (property !== "value") {
          updatedHeight[property] = getHeightOf(rest[property])
        }
      }

      if (rest.actionBarSizes) {
        const updatedActionBarSizes: ActionBarSizesProps = {}
        for (const size in rest.actionBarSizes) {
          updatedActionBarSizes[size] = getHeightOf(rest.actionBarSizes[size])
        }
        updatedHeight.actionBarSizes = updatedActionBarSizes
      }

      updatedAppSectionDetails[sectionName] = {
        height: updatedHeight,
      }
    }
  }

  return updatedAppSectionDetails
}
