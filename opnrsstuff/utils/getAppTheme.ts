import { DEFAULT_FONT, appSectionDetails } from "./../screens/HomeScreen/constants"
import { spacing, timing, typography } from "../theme"
import { readableColor, rgba } from "polished"
import { DefaultTheme } from "react-native-stylex"
import { Dimensions, Platform } from "react-native"
import getAppStyleValues from "./getAppStyleValues"
import getAppColorsInfo from "./getAppColors"
const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window")

/**
 * Device type detection utility
 */
const getDeviceType = () => {
  const aspectRatio = deviceHeight / deviceWidth // height / width

  // iPad detection
  if (Platform.OS === "ios") {
    // iPads have aspect ratio closer to 4:3 (1.33)
    // iPhones are closer to 16:9 (1.77) or taller
    if (aspectRatio < 1.6 || deviceWidth > 768) {
      return "tablet"
    }
  }

  // Android tablets
  if (Platform.OS === "android" && deviceWidth > 600) {
    return "tablet"
  }

  return "phone"
}

/**
 * Get current app theme
 */

const elementSize = {
  micro: 2,
  tiny: 4,
  extraSmall: 8,
  small: 12,
  medium: 16,
  large: 24,
  extraLarge: 32,
  huge: 48,
  massive: 64,
}

const borderRadiusSize = {
  micro: 2,
  tiny: 4,
  extraSmall: 8,
  small: 12,
  medium: 16,
  large: 24,
  extraLarge: 32,
  huge: 48,
  massive: 64,
}

interface CurrentFont {
  light: string
  normal: string
  medium: string
  semiBold: string
  bold: string
}

export interface ThemeSettingsProps {
  statusBarStyle?: "light" | "dark"
  selectedFont?:
    | "helveticaNeue"
    | "archivo"
    | "systemFont"
    | "ibmPlexSans"
    | "zillaSlab"
    | "fredoka"
    | "syne"
    | "caudex"
    | "inconsolata"
  themeSwitchState?: "THEME_SWITCH_ON" | "THEME_SWITCH_OFF"
  setValues?: (values: ThemeSettingsProps) => void
  /**
   * Id for the from the colors object
   */
  currentIdForColors: string
}

// interface ColorValues {
//   primaryColorBgStatusBarStyle?: "light" | "dark"
//   secondaryColorBgStatusBarStyle?: "light" | "dark"
//   /**
//    * Id for the from the colors object
//    */
//   primaryColor: string
//   secondaryColor: string
//   readablePrimaryColor: string
//   readableSecondaryColor: string
// }

const magicHeight = deviceHeight * 0.11
const borderSize = {
  xxl: 6,
  xl: 5,
  lg: 4,
  md: 3,
  sm: 2,
  xs: 1,
  xxs: 0.5,
}
const getWidthOf = (percentage: number) => deviceWidth * (percentage / 100)

const getHeightOf = (percentage: number) => deviceHeight * (percentage / 100)
const isTablet = getDeviceType() === "tablet"

const initialOpenersHeight = deviceHeight + +spacing.extraLarge - magicHeight * 5
const magicWidth = isTablet ? deviceWidth * 0.95 : deviceWidth * 0.9
const magicLeftRightSpacing = (deviceWidth - magicWidth) / 2
const initialTopicSelectionHeight = deviceHeight + -(magicHeight / 2)
const initialInfoHeight = magicHeight / 2
const initialActionBarHeight = magicHeight
const combinedOpenersAndActionBarHeight = initialOpenersHeight + initialActionBarHeight

const actionBarIconInitialWidth = (deviceWidth * 0.8) / 4
// Keeping this for future reference
// const actionBarIconActiveWidth = actionBarIconInitialWidth * 1.5

const utils = {
  positionAbsolute: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  positionAbsoluteBottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  getWidthOf,
  getHeightOf,
  fullWidth: deviceWidth,
  fullHeight: deviceHeight,
  isTablet: getDeviceType() === "tablet",
  appValues: getAppStyleValues(appSectionDetails, deviceHeight),
  layoutValues: {
    defaultHeight: magicHeight,
    defaultWidth: magicWidth,
    magicLeftRightSpacing,
    initial: {
      openersHeight: initialOpenersHeight + magicHeight,
      topicSelectionHeight: initialTopicSelectionHeight,
      infoHeight: initialInfoHeight,
      infoCircleWrapperHeight: elementSize.extraLarge,
      infoCircleWrapperWidth: elementSize.extraLarge,
      infoCircleWrapperBorderRadius: elementSize.extraLarge / 2,
    },
    animated: {
      combinedOpenersAndActionBarHeight,
      infoOpenHeight: initialInfoHeight + combinedOpenersAndActionBarHeight,
      infoCircleWrapperHeight: combinedOpenersAndActionBarHeight - magicHeight,
      infoCircleWrapperWidth: deviceWidth * 0.9,
      actionBar: {
        large: {
          openersHeight: combinedOpenersAndActionBarHeight * 0.3,
          actionBarHeight: combinedOpenersAndActionBarHeight * 0.7,
        },
        medium: {
          openersHeight: combinedOpenersAndActionBarHeight * 0.45,
          actionBarHeight: combinedOpenersAndActionBarHeight * 0.55,
        },
        small: {
          openersHeight: combinedOpenersAndActionBarHeight * 0.5,
          actionBarHeight: combinedOpenersAndActionBarHeight * 0.5,
        },
      },
    },
  },
  actionBarValues: {
    actionBarIconInitialWidth,
  },
}
// https://chat.openai.com/share/8aae4e0b-feff-468c-a2bc-0d95b2421001
export const appColorsV1 = {
  darkMode: {
    primaryColor: "#000000",
    secondaryColor: "#FFFFFF",
    combinationName: "Black and White",
  },
  "51114fe0-6830-41ce-b127-3684613ddff8": {
    primaryColor: "#0B262A",
    secondaryColor: "#D6F0DC",
    combinationName: "Serene Depths",
  },
  "d1c2f743-5a31-4ec1-b71c-369e5b82f32f": {
    primaryColor: "#7F3500",
    secondaryColor: "#F9E7D4",
    combinationName: "Warm Embrace",
  },
  "8fce0b23-1f57-4ec4-b8b5-785cc5dc4a92": {
    primaryColor: "#393255",
    secondaryColor: "#FFB3C3",
    combinationName: "Passionate Night",
  },
  "2d0b5b6e-31f8-4b3b-a5da-43d0e8147baf": {
    primaryColor: "#7E3079",
    secondaryColor: "#FAF3A0",
    combinationName: "Blissful Dawn",
  },
  "e7326149-1c28-4b4d-8b7f-2e63c477de7b": {
    primaryColor: "#154215",
    secondaryColor: "#FDD703",
    combinationName: "Hopeful Morning",
  },
  "0296d3ab-758e-4c6a-a1cc-6382b6d72a8e": {
    primaryColor: "#141213",
    secondaryColor: "#DCF357",
    combinationName: "Radiant Energy",
  },
  "b35fd614-0ef8-43c2-983d-1be0c5b8ae6a": {
    primaryColor: "#08352D",
    secondaryColor: "#AFC0B8",
    combinationName: "Tranquil Forest",
  },
  "1b4709af-9d4a-46a1-97ed-1a0b49105a61": {
    primaryColor: "#8D3445",
    secondaryColor: "#FBF8BC",
    combinationName: "Tender Affection",
  },
  "4bc85330-c8a8-4189-b998-ff5fcd5b52ff": {
    primaryColor: "#5A0C0F",
    secondaryColor: "#FD9FA3",
    combinationName: "Heartfelt Warmth",
  },
  "9828d6b0-04fa-4d58-84e7-26d47bb9f7b1": {
    primaryColor: "#19181A",
    secondaryColor: "#E7D4EA",
    combinationName: "Calm Twilight",
  },
  "1c8e57aa-bb5d-4c8d-92f1-d7adfd2c1d90": {
    primaryColor: "#4D5530",
    secondaryColor: "#FBF5AC",
    combinationName: "Gentle Sunrise",
  },
  "35b97eae-9a8b-4736-8652-505978ee36d8": {
    primaryColor: "#385D32",
    secondaryColor: "#FBF9C6",
    combinationName: "Peaceful Meadow",
  },
  "62b22e14-38e0-4911-91c2-942bb6242f13": {
    primaryColor: "#034F47",
    secondaryColor: "#FDD8BE",
    combinationName: "Ocean Calm",
  },
  "3b6ed67f-5de4-4d5e-8f79-6bcb2ae28e12": {
    primaryColor: "#595010",
    secondaryColor: "#FCECD4",
    combinationName: "Golden Serenity",
  },
  "af304d6d-b3b1-4d20-913a-1a95e37ffdf4": {
    primaryColor: "#013F25",
    secondaryColor: "#E4D4CF",
    combinationName: "Forest Whisper",
  },
  "b1099d8e-33b3-4d9d-8783-e99ebfce7063": {
    primaryColor: "#602426",
    secondaryColor: "#F2E74E",
    combinationName: "Vivid Joy",
  },
  "f8a21e72-d33d-404d-abe6-9484d76c83c7": {
    primaryColor: "#034F47",
    secondaryColor: "#FDD8BE",
    combinationName: "Serene Waters",
  },
  "4eab1f45-33b0-42b7-8d60-4abfd530b0d3": {
    primaryColor: "#19181A",
    secondaryColor: "#E7D4EA",
    combinationName: "Evening Calm",
  },
  "3a8e3082-4ae1-4843-b7af-8fba745a2f3a": {
    primaryColor: "#4D5530",
    secondaryColor: "#FBF5AC",
    combinationName: "Tranquil Moments",
  },
  "235ae610-22e1-4b2f-91d2-e1373e2da61e": {
    primaryColor: "#385D32",
    secondaryColor: "#FBF9C6",
    combinationName: "Harmonious Fields",
  },
}

export const appColors = {
  darkMode: {
    primaryColor: "#000000",
    secondaryColor: "#FFFFFF",
    combinationName: "Black and White",
    subscription: "FREE",
  },
  "8bda0c92-2346-4378-84a3-88f07cfae6b1": {
    primaryColor: "#011675",
    secondaryColor: "#FEB8B7",
    combinationName: "Sailor Sunset",
    subscription: "FREE",
  },
  "63c5d-4b2e-4ef9-8a4c-5bc4c143ee4b": {
    primaryColor: "#01644C",
    secondaryColor: "#FBE1A3",
    combinationName: "Tropical Beach",
    subscription: "PAID",
  },
  "2d607dd5-9d18-47df-91d2-4b0122e2ef48": {
    primaryColor: "#3D028F",
    secondaryColor: "#FBBC8F",
    combinationName: "Plum Apricot",
    subscription: "PAID",
  },
  "f2g3h4i5-j6k7-89l0-m1n2-o3p4q5r6s7t8": {
    primaryColor: "#1e3d2f",
    secondaryColor: "#e3a23e",
    combinationName: "Autumn Forest",
    subscription: "PAID",
  },
  "35c96d2d-f6d0-484b-8ca0-36f1c15ba7e0": {
    primaryColor: "#90011E",
    secondaryColor: "#C8F3FE",
    combinationName: "Coral Sea",
    subscription: "PAID",
  },
  "12345678-9abc-def0-1234-56789abcdef0": {
    primaryColor: "#12351D",
    secondaryColor: "#FF4E18",
    combinationName: "Moss and Flame",
    subscription: "PAID",
  },
  "b8c9d0e1-f2g3-45h6-i7j8-k9l0m1n2o3p4": {
    primaryColor: "#ff300c",
    secondaryColor: "#efefef",
    combinationName: "Arctic Flame",
    subscription: "PAID",
  },
  "63a9dfc2-e69a-4b0d-a238-88fcb6e242c5": {
    primaryColor: "#723806",
    secondaryColor: "#91E4F6",
    combinationName: "Desert Sky",
    subscription: "PAID",
  },
  "e1f7960b-bf07-4ee1-8b5c-9a0d406beac3": {
    primaryColor: "#7E1700",
    secondaryColor: "#C6FCD8",
    combinationName: "Cherry Mint",
    subscription: "PAID",
  },
  "b73521b7-2e92-420a-86d2-c6be7009e91a": {
    primaryColor: "#09288C",
    secondaryColor: "#F9DE93",
    combinationName: "Ocean Sand",
    subscription: "PAID",
  },
  "a7b4c2d8-e5f6-47g9-h1i2-j3k4l5m6n7o8": {
    primaryColor: "#9147d2",
    secondaryColor: "#ffe7a9",
    combinationName: "Mystic Dawn",
    subscription: "PAID",
  },
  "fae4167b-5ad0-43bb-b443-bf37bb8d6eaf": {
    primaryColor: "#1B058B",
    secondaryColor: "#99FEA3",
    combinationName: "Midnight Mint",
    subscription: "PAID",
  },
  "12345678-9abc-def0-1234-56789abcdef1": {
    primaryColor: "#3B3221",
    secondaryColor: "#B0B75A",
    combinationName: "Desert Bloom",
    subscription: "PAID",
  },
  "d0e1f2g3-h4i5-67j8-k9l0-m1n2o3p4q5r6": {
    primaryColor: "#ce2d35",
    secondaryColor: "#e6d5ff",
    combinationName: "Ruby Mist",
    subscription: "PAID",
  },
  "cd7a7c72-1f16-4c12-84b3-83ed71e5ae17": {
    primaryColor: "#191A19",
    secondaryColor: "#E5E5E5",
    combinationName: "Slate Balance",
    subscription: "PAID",
  },
  "e1f2g3h4-i5j6-78k9-l0m1-n2o3p4q5r6s7": {
    primaryColor: "#522205",
    secondaryColor: "#fefb4a",
    combinationName: "Sunlit Earth",
    subscription: "PAID",
  },
  "g3h4i5j6-k7l8-90m1-n2o3-p4q5r6s7t8u9": {
    primaryColor: "#0d1c39",
    secondaryColor: "#bbb630",
    combinationName: "Meadow Night",
    subscription: "PAID",
  },
  "896b2987-cd78-4cfb-b3e1-87ab83ecaa7f": {
    primaryColor: "#2E3C44",
    secondaryColor: "#F5E8C7",
    combinationName: "Coastal Breeze",
    subscription: "PAID",
  },
  "547418e4-9782-4679-be2e-9c685329fb5c": {
    primaryColor: "#9E2A2B",
    secondaryColor: "#F4D58D",
    combinationName: "Golden Sunset",
    subscription: "PAID",
  },
  "2f8175be-d88d-45d6-bd3e-422dbf4eb2a6": {
    primaryColor: "#4A6C6F",
    secondaryColor: "#E3F2FD",
    combinationName: "Ocean Mist",
    subscription: "PAID",
  },
  "c629574f-e96e-4691-9163-3daefd11dfb9": {
    primaryColor: "#001524",
    secondaryColor: "#88A2B9",
    combinationName: "Deep Sea",
    subscription: "PAID",
  },
  "8e83e5d4-c90d-4883-8cf4-3f6b9c7e11d1": {
    primaryColor: "#8E3B46",
    secondaryColor: "#FAE0C2",
    combinationName: "Rosewood",
    subscription: "PAID",
  },
  "aaea1159-9c02-4e27-9051-9d8f3a0dcafe": {
    primaryColor: "#254E70",
    secondaryColor: "#ECE2E1",
    combinationName: "Arctic Glow",
    subscription: "PAID",
  },
  "c1e23be3-225e-42e0-a053-842f146e2da5": {
    primaryColor: "#084C61",
    secondaryColor: "#FFDDC1",
    combinationName: "Tropical Dawn",
    subscription: "PAID",
  },
  "12345678-9abc-def0-1234-56789abcdef2": {
    primaryColor: "#293725",
    secondaryColor: "#b99fe3",
    combinationName: "Forest Twilight",
    subscription: "PAID",
  },
  "e1e78ad6-f0f3-4573-b582-780c995a9bd6": {
    primaryColor: "#6A0572",
    secondaryColor: "#F9EAE1",
    combinationName: "Royal Embrace",
    subscription: "PAID",
  },
  "d92c0fd4-b5cf-4721-91ad-c843ce3a469d": {
    primaryColor: "#2E1F27",
    secondaryColor: "#F5EDDC",
    combinationName: "Coffee Cream",
    subscription: "PAID",
  },
  "03f1c4d7-a127-4a29-91e7-42f4d6e032a3": {
    primaryColor: "#2F4858",
    secondaryColor: "#FFE5D9",
    combinationName: "Copper Horizon",
    subscription: "PAID",
  },
  "12345678-9abc-def0-1234-56789abcdef3": {
    primaryColor: "#0f5891",
    secondaryColor: "#b79fcf",
    combinationName: "Blueberry Breeze",
    subscription: "PAID",
  },
  "f3a5e9c7-8d6e-4b9a-3c2f-b7f4a2e5d8f1": {
    primaryColor: "#1E3A8A",
    secondaryColor: "#F5F7FA",
    combinationName: "Indigo Resolve", // Updated
    subscription: "PAID",
  },
  "9f7e4b6c-3a8b-2f5a-b7d6-c9e4f3a5e7b8": {
    primaryColor: "#B22222",
    secondaryColor: "#FDE8E8",
    combinationName: "Scarlet Passion", // Updated
    subscription: "PAID",
  },
  "3f7b9c5a-8f2a-4e9e-b6d3-c9a5f4e2f8b1": {
    primaryColor: "#E75480",
    secondaryColor: "#F9F1F6",
    combinationName: "Blush Kindness", // Updated
    subscription: "PAID",
  },
  "9e7b4f3c-8f5a-2a1e-b6f3-d9a4f3e7c8b2": {
    primaryColor: "#1E90FF",
    secondaryColor: "#E8F6FB",
    combinationName: "Azure Glow", // Updated
    subscription: "PAID",
  },
  "c4e8f4a7-9b3c-4f7d-a6f9-e3b5d8a9f2e4": {
    primaryColor: "#0B0B0B", // Rich, beautiful black
    secondaryColor: "#FFD700", // Vibrant yellow
    combinationName: "Golden Shadow", // AAA Large Text
    subscription: "PAID",
  },
  "7f4e9c3a-2b5d-4a6e-b7f3-d5a9e3f8c7b1": {
    primaryColor: "#4B0082", // Deep indigo
    secondaryColor: "#F2E5FF", // Soft lavender white
    combinationName: "Violet Whisper", // AAA Large Text
    subscription: "PAID",
  },
  "4e7b9a6f-8d3c-2b5f-b7e6-c5a9f3e4d8b2": {
    primaryColor: "#8B0000", // Dark crimson
    secondaryColor: "#FFE6E6", // Soft rose white
    combinationName: "Crimson Light", // AAA Large Text
    subscription: "PAID",
  },
  "c9d0e1f2-g3h4-56i7-j8k9-l0m1n2o3p4q5": {
    primaryColor: "#ed0db5",
    secondaryColor: "#ffe8d1",
    combinationName: "Peach Glow",
    subscription: "PAID",
  },
}

export const appFonts = [
  { name: "fredoka", fontName: "Fredoka", displayName: "Playful", subscription: "FREE" },
  { name: "systemFont", fontName: "System Font", displayName: "System", subscription: "FREE" },
  { name: "ibmPlexSans", fontName: "IBM Plex Sans", displayName: "Friendly", subscription: "PAID" },
  { name: "zillaSlab", fontName: "Zilla Slab", displayName: "Strong", subscription: "PAID" },
  { name: "syne", fontName: "Syne", displayName: "Creative", subscription: "PAID" },
  { name: "caudex", fontName: "Caudex", displayName: "Classic", subscription: "PAID" },
  {
    name: "specialElite",
    fontName: "Special Elite",
    displayName: "Typewriter",
    subscription: "PAID",
  },
]

// export const appColors = {
//   darkMode: {
//     primaryColor: "#000000",
//     secondaryColor: "#FFFFFF",
//     combinationName: "Black and White",
//   },
//   "fae4167b-5ad0-43bb-b443-bf37bb8d6eaf": {
//     primaryColor: "#99FEA3",
//     secondaryColor: "#1B058B",
//     combinationName: "Midnight Mint",
//   },
//   "92f7a503-08fc-43eb-acc5-b39cf5a2b653": {
//     primaryColor: "#670854",
//     secondaryColor: "#9EF89D",
//     combinationName: "Watermelon Burst",
//   },
//   "8ebda183-b131-4042-87c9-b6382e39876a": {
//     primaryColor: "#A7015A",
//     secondaryColor: "#BAF9CF",
//     combinationName: "Strawberry Mojito",
//   },
//   "155dc0d9-2de1-46e5-8e2e-34016940f8c6": {
//     primaryColor: "#9FF789",
//     secondaryColor: "#3B027B",
//     combinationName: "Grape Limeade",
//   },
//   "2d607dd5-9d18-47df-91d2-4b0122e2ef48": {
//     primaryColor: "#3D028F",
//     secondaryColor: "#FBBC8F",
//     combinationName: "Plum Apricot",
//   },
//   "a26a8490-445f-4d97-a25d-1e34ae4c4db7": {
//     primaryColor: "#B5FDC9",
//     secondaryColor: "#620968",
//     combinationName: "Raspberry Mint",
//   },
//   "03a2fa60-9827-4e2f-99ef-e89f1e0e3eb8": {
//     primaryColor: "#F0FEB2",
//     secondaryColor: "#1047A1",
//     combinationName: "Electric Lemonade",
//   },
//   "2c23f338-4d46-44b1-9340-9ad570202deb": {
//     primaryColor: "#9C0848",
//     secondaryColor: "#B3FD8E",
//     combinationName: "Spring Blossom",
//   },
//   "735a9928-d6d1-4627-a3a3-4f5e4a4304bc": {
//     primaryColor: "#FBDCAD",
//     secondaryColor: "#026752",
//     combinationName: "Coral Reef",
//   },
//   "63a9dfc2-e69a-4b0d-a238-88fcb6e242c5": {
//     primaryColor: "#723806",
//     secondaryColor: "#91E4F6",
//     combinationName: "Desert Sky",
//   },
//   "8f1af3ea-8a9f-4688-b852-53eb491f0d80": {
//     primaryColor: "#A7F58D",
//     secondaryColor: "#330573",
//     combinationName: "Jade Amethyst",r
//   },
//   "b60ae5f0-9e56-40aa-bc1d-73baff84d232": {
//     primaryColor: "#530164",
//     secondaryColor: "#E4F9CD",
//     combinationName: "Orchid Mint",
//   },
//   "ec44e6a8-0e94-41fc-926c-2b9638a1c900": {
//     primaryColor: "#734700",
//     secondaryColor: "#ABF3FA",
//     combinationName: "Amber Ocean",
//   },
//   "f87743b6-5f7a-4e27-92c7-6c99c05f54fa": {
//     primaryColor: "#DAF998",
//     secondaryColor: "#0B1C96",
//     combinationName: "Neon Tides",
//   },
//   "217ce2e0-28b1-4bc1-93f8-302fdd5d0f1f": {
//     primaryColor: "#C6FBC9",
//     secondaryColor: "#3E0390",
//     combinationName: "Violet Spring",
//   },
//   "cbcfd6b3-3a10-4c1b-902c-2e27f7bc3b14": {
//     primaryColor: "#CEFD83",
//     secondaryColor: "#16049F",
//     combinationName: "Electric Grape",
//   },
//   "b73521b7-2e92-420a-86d2-c6be7009e91a": {
//     primaryColor: "#09288C",
//     secondaryColor: "#F9DE93",
//     combinationName: "Ocean Sand",
//   },
//   "e1f7960b-bf07-4ee1-8b5c-9a0d406beac3": {
//     primaryColor: "#7E1700",
//     secondaryColor: "#C6FCD8",
//     combinationName: "Cherry Mint",
//   },
//   "b38f5ab8-732c-45e0-9e51-b4be74dbbe52": {
//     primaryColor: "#AB066C",
//     secondaryColor: "#8AF8B3",
//     combinationName: "Miami Vice",
//   },
//   "13c6be35-6fd7-489c-8b97-06e97b9780b8": {
//     primaryColor: "#CAFEF8",
//     secondaryColor: "#9A099F",
//     combinationName: "Cotton Candy",
//   },
//   "7c2e5e45-73a4-4ac4-bab7-cf2c3045c977": {
//     primaryColor: "#C5E0FC",
//     secondaryColor: "#97230F",
//     combinationName: "Fire & Ice",
//   },
//   "e684f6ae-0c29-4e7b-b2c2-74abdc4dca7c": {
//     primaryColor: "#026832",
//     secondaryColor: "#FCCDF5",
//     combinationName: "Mermaid Blush",
//   },
//   "12bb8c91-1ad3-44c6-924b-57ed9fa17463": {
//     primaryColor: "#D9FBC9",
//     secondaryColor: "#24076D",
//     combinationName: "Lavender Lime",
//   },
//   "ee9d88e6-cab1-476f-8ad7-3f3289c099ab": {
//     primaryColor: "#F6F699",
//     secondaryColor: "#0B4F8F",
//     combinationName: "Sunflower Sky",
//   },
//   "e46f6db7-c4be-4eb0-8cd6-7d4520b2368d": {
//     primaryColor: "#7D0F9B",
//     secondaryColor: "#DEF697",
//     combinationName: "Dragonfruit",
//   },
//   "8bda0c92-2346-4378-84a3-88f07cfae6b1": {
//     primaryColor: "#011675",
//     secondaryColor: "#FEB8B7",
//     combinationName: "Sailor Sunset",
//   },
//   "b7412865-07b1-478a-900c-687d072c37c1": {
//     primaryColor: "#BFFADB",
//     secondaryColor: "#680A44",
//     combinationName: "Lotus Pond",
//   },
//   "6c117a3e-b4c2-44e8-b34b-617d614e5ac0": {
//     primaryColor: "#2B088B",
//     secondaryColor: "#F2CA8D",
//     combinationName: "Royal Gold",
//   },
//   "3d7f9a9e-7ea4-4ae2-963e-98b8d1aab63b": {
//     primaryColor: "#50086F",
//     secondaryColor: "#B1F78C",
//     combinationName: "Mystic Garden",
//   },
//   "8bcefcdd-b5a4-4372-b9f7-c8ebf2e9c89c": {
//     primaryColor: "#6B0A5C",
//     secondaryColor: "#A8FCB5",
//     combinationName: "Berry Mint",
//   },
//   "aa7e34e7-cb54-4a7b-b2e6-3f6ac4b9c1de": {
//     primaryColor: "#A0074C",
//     secondaryColor: "#CFFAD2",
//     combinationName: "Rosewater Mint",
//   },
//   "35c96d2d-f6d0-484b-8ca0-36f1c15ba7e0": {
//     primaryColor: "#C8F3FE",
//     secondaryColor: "#90011E",
//     combinationName: "Coral Sea",
//   },
//   "229e9a08-188c-439c-9421-1342cf1e6035": {
//     primaryColor: "#8A0EA3",
//     secondaryColor: "#FDF9B0",
//     combinationName: "Orchid Lemonade",
//   },
//   "6d2d3100-cce2-45e4-9f5a-b6d322da3176": {
//     primaryColor: "#380169",
//     secondaryColor: "#FBD5AA",
//     combinationName: "Peach Plum",
//   },
//   "2a1f5e47-b37e-4bc1-a083-28fd367f8e87": {
//     primaryColor: "#9BFAF5",
//     secondaryColor: "#6F0A63",
//     combinationName: "Mermaid Kiss",
//   },
//   "278e2937-3cb4-47c7-9da3-48a42e865b1a": {
//     primaryColor: "#A2D8FB",
//     secondaryColor: "#880432",
//     combinationName: "Pink Sky",
//   },
//   "d970bce7-4166-4c8f-9a45-74fdbb6fa34e": {
//     primaryColor: "#9EF5F7",
//     secondaryColor: "#65020C",
//     combinationName: "Red Sea",
//   },
//   "66d491a3-3071-4e8c-b2d5-d2d0c2b4972a": {
//     primaryColor: "#9F0D73",
//     secondaryColor: "#C2F9C4",
//     combinationName: "Bubblegum Mint",
//   },
//   "441c13e0-4d7f-48a1-8de5-49e38fdb2bfe": {
//     primaryColor: "#83109F",
//     secondaryColor: "#EEFDAB",
//     combinationName: "Wicked Grape",
//   },
//   "d06e89af-9c6c-4a1a-8987-2c00b016fdc9": {
//     primaryColor: "#B6FAC6",
//     secondaryColor: "#480E9E",
//     combinationName: "Lavender Mint",
//   },
//   "f4f63c5d-4b2e-4ef9-8a4c-5bc4c143ee4b": {
//     primaryColor: "#FBE1A3",
//     secondaryColor: "#01644C",
//     combinationName: "Tropical Beach",
//   },
//   "189fa1e7-c34e-4a08-9b5d-d2ef4726656b": {
//     primaryColor: "#99F78B",
//     secondaryColor: "#3C0681",
//     combinationName: "Neon Orchid",
//   },
//   "5e434b98-f45b-474c-859b-6eec1bb6c807": {
//     primaryColor: "#41058B",
//     secondaryColor: "#F3E28D",
//     combinationName: "Golden Orchid",
//   },
//   "f06f35a6-d197-4e1f-8ec1-9b431f110ea7": {
//     primaryColor: "#9100A1",
//     secondaryColor: "#EEFBC6",
//     combinationName: "Pink Limeade",
//   },
//   "6d330c93-4641-4b2d-91d0-1da9f53bfc3c": {
//     primaryColor: "#B3D7F9",
//     secondaryColor: "#632605",
//     combinationName: "Copper Sky",
//   },
//   "c6ab8b56-6e56-432c-bc95-14db04f5af7e": {
//     primaryColor: "#BEFB95",
//     secondaryColor: "#061961",
//     combinationName: "Emerald Night",
//   },
//   "5a798f48-eacf-489a-9398-83c9c403db3a": {
//     primaryColor: "#ACFAC0",
//     secondaryColor: "#520883",
//     combinationName: "Kiwi Berry",
//   },
//   "3a2c516f-bb51-47b3-bd82-1c02c45e10b2": {
//     primaryColor: "#B6F892",
//     secondaryColor: "#2B007A",
//     combinationName: "Ube Avocado",
//   },
//   "c168251a-375d-4c54-8071-7ad190ff0de8": {
//     primaryColor: "#99E2F4",
//     secondaryColor: "#860A23",
//     combinationName: "Crimson Tide",
//   },
//   "e9e9e354-4a57-484a-b943-86b6ca420a7a": {
//     primaryColor: "#890211",
//     secondaryColor: "#A0F8E0",
//     combinationName: "Arctic Rose",
//   },
// }

export const colorsKeysTest = Object.keys(appColors)

const getMarkdownBaseStyles = (color: string, font: CurrentFont) => ({
  body: {
    color,
    fontFamily: font.normal,
    fontSize: typography.size.md,
    lineHeight: typography.lineHeight.md * 1.6,
  },
  heading1: {
    color,
    fontFamily: font.bold,
    fontSize: typography.size.xxl,
    lineHeight: typography.lineHeight.xxl * 1.4,
    marginBottom: spacing.large,
    marginTop: spacing.extraLarge,
  },
  heading2: {
    color,
    fontFamily: font.bold,
    fontSize: typography.size.xl,
    lineHeight: typography.lineHeight.xl * 1.4,
    marginBottom: spacing.medium,
    marginTop: spacing.large,
  },
  heading3: {
    color,
    fontFamily: font.semiBold,
    fontSize: typography.size.lg,
    lineHeight: typography.lineHeight.lg * 1.4,
    marginBottom: spacing.small,
    marginTop: spacing.medium,
  },
  strong: {
    fontFamily: font.bold,
    fontWeight: "bold" as const,
    color,
  },
  paragraph: {
    marginBottom: spacing.medium,
  },
  bullet_list: {
    marginBottom: spacing.medium,
  },
  ordered_list: {
    marginBottom: spacing.medium,
  },
  list_item: {
    marginBottom: spacing.small,
  },
  hr: {
    backgroundColor: color,
    height: 1,
    marginVertical: spacing.large,
    opacity: 0.2,
  },
  blockquote: {
    borderLeftWidth: 4,
    borderLeftColor: color,
    opacity: 0.8,
    paddingLeft: spacing.medium,
    marginLeft: spacing.small,
    marginBottom: spacing.medium,
  },
  code_inline: {
    fontFamily: font.normal,
    backgroundColor: rgba(color, 0.1),
    paddingHorizontal: spacing.tiny,
    paddingVertical: spacing.tiny / 2,
    borderRadius: borderRadiusSize.tiny,
  },
  code_block: {
    fontFamily: font.normal,
    backgroundColor: rgba(color, 0.1),
    padding: spacing.small,
    borderRadius: borderRadiusSize.small,
    marginVertical: spacing.medium,
  },
})

export function getAppTheme(themeSettings: ThemeSettingsProps): DefaultTheme {
  const { currentIdForColors, selectedFont, themeSwitchState } = themeSettings

  // Use tablet-specific theme if on tablet
  const isTablet = getDeviceType() === "tablet"
  if (isTablet) {
    return getTabletAppTheme(themeSettings)
  }

  let currentAppColors = getAppColorsInfo(currentIdForColors) || {
    primaryColor: "#000000",
    secondaryColor: "#FFFFFF",
  }

  // Swap colors if themeSwitchState is THEME_SWITCH_ON
  if (themeSwitchState === "THEME_SWITCH_ON") {
    currentAppColors = {
      ...currentAppColors,
      primaryColor: currentAppColors.secondaryColor,
      secondaryColor: currentAppColors.primaryColor,
    }
  }

  const isLightOrDark = (color: string): "light" | "dark" =>
    color.includes("#fff") ? "light" : "dark"

  const readablePrimaryColor = readableColor(currentAppColors.primaryColor)
  const readableSecondaryColor = readableColor(currentAppColors.secondaryColor)
  const transparent = "transparent"
  const opaquePrimaryColor = rgba(currentAppColors.primaryColor, 0.2)
  const opaquePrimaryColorLevel1 = rgba(currentAppColors.primaryColor, 0.2)
  const opaquePrimaryColorLevel2 = rgba(currentAppColors.primaryColor, 0.4)
  const opaquePrimaryColorLevel3 = rgba(currentAppColors.primaryColor, 0.6)
  const opaquePrimaryColorLevel4 = rgba(currentAppColors.primaryColor, 0.8)
  const opaqueSecondaryColor = rgba(currentAppColors.secondaryColor, 0.2)
  const opaqueSecondaryColorLevel1 = rgba(currentAppColors.secondaryColor, 0.2)
  const opaqueSecondaryColorLevel2 = rgba(currentAppColors.secondaryColor, 0.4)
  const opaqueSecondaryColorLevel3 = rgba(currentAppColors.secondaryColor, 0.6)
  const opaqueSecondaryColorLevel4 = rgba(currentAppColors.secondaryColor, 0.8)
  const primaryColorBgStatusBarStyle: "light" | "dark" = isLightOrDark(readablePrimaryColor)
  const secondaryBgStatusBarStyle: "light" | "dark" = isLightOrDark(readableSecondaryColor)

  const colors = {
    ...currentAppColors,
    readablePrimaryColor,
    readableSecondaryColor,
    primaryColorBgStatusBarStyle,
    secondaryBgStatusBarStyle,
    opaquePrimaryColor,
    opaqueSecondaryColor,
    opaquePrimaryColorLevel1,
    opaquePrimaryColorLevel2,
    opaquePrimaryColorLevel3,
    opaquePrimaryColorLevel4,
    opaqueSecondaryColorLevel1,
    opaqueSecondaryColorLevel2,
    opaqueSecondaryColorLevel3,
    opaqueSecondaryColorLevel4,
    transparent,
  }

  const staticAppColors = getAppColorsInfo(currentIdForColors) || {
    primaryColor: "#000000",
    secondaryColor: "#FFFFFF",
  }

  const staticColors = {
    ...staticAppColors,
    readablePrimaryColor: readableColor(staticAppColors.primaryColor),
    readableSecondaryColor: readableColor(staticAppColors.secondaryColor),
    opaquePrimaryColor: rgba(staticAppColors.primaryColor, 0.2),
    opaqueSecondaryColor: rgba(staticAppColors.secondaryColor, 0.2),
    opaquePrimaryColorLevel1: rgba(staticAppColors.primaryColor, 0.2),
    opaqueSecondaryColorLevel1: rgba(staticAppColors.secondaryColor, 0.2),
    opaquePrimaryColorLevel2: rgba(staticAppColors.primaryColor, 0.4),
    opaqueSecondaryColorLevel2: rgba(staticAppColors.secondaryColor, 0.4),
    opaquePrimaryColorLevel3: rgba(staticAppColors.primaryColor, 0.6),
    opaqueSecondaryColorLevel3: rgba(staticAppColors.secondaryColor, 0.6),
    opaquePrimaryColorLevel4: rgba(staticAppColors.primaryColor, 0.8),
    opaqueSecondaryColorLevel4: rgba(staticAppColors.secondaryColor, 0.8),
    primaryColorBgStatusBarStyle: isLightOrDark(readablePrimaryColor),
    secondaryBgStatusBarStyle: isLightOrDark(readableSecondaryColor),
    transparent,
  }

  const actionBarHeight = elementSize.extraLarge + elementSize.extraSmall
  const actionBarBg = {
    width: utils.getWidthOf(80),
    height: actionBarHeight,
    borderRadius: borderRadiusSize.small,
    backgroundColor: colors.secondaryColor,
    marginBottom: actionBarHeight,
  }

  // Make sure we have a valid font with all required properties
  const defaultFont = typography.fonts[DEFAULT_FONT]

  // Cast to any to avoid TypeScript errors with different font structures
  const selectedFontObj =
    selectedFont && typography.fonts[selectedFont as keyof typeof typography.fonts]
      ? (typography.fonts[selectedFont as keyof typeof typography.fonts] as any)
      : (defaultFont as any)

  const currentFont: CurrentFont = {
    light: selectedFontObj.light || defaultFont.light,
    normal: selectedFontObj.normal || defaultFont.normal,
    medium: selectedFontObj.medium || defaultFont.medium,
    semiBold: selectedFontObj.semiBold || defaultFont.semiBold,
    bold: selectedFontObj.bold || defaultFont.bold,
  }

  const markdownStyles = getMarkdownBaseStyles(colors.secondaryColor, currentFont)
  const primaryTextMarkdownStyles = getMarkdownBaseStyles(colors.primaryColor, currentFont)

  return {
    spacing: {
      ...spacing,
    },
    timing: {
      ...timing,
    },
    colors,
    staticColors,
    typography: {
      ...typography,
      currentFont,
      // System font is handled in the currentFont
    },
    borderSize,
    elementSize,
    borderRadiusSize,
    utils: {
      ...utils,
      actionBarBg,
      actionBarHeight,
    },
    markdownStyles,
    primaryTextMarkdownStyles,
  }
}

/**
 * Tablet-optimized theme with larger fonts, spacing, and sizing
 * Designed specifically for iPad and Android tablets
 */
export function getTabletAppTheme(themeSettings: ThemeSettingsProps): DefaultTheme {
  const { currentIdForColors, selectedFont, themeSwitchState } = themeSettings
  let currentAppColors = getAppColorsInfo(currentIdForColors) || {
    primaryColor: "#000000",
    secondaryColor: "#FFFFFF",
  }

  // Swap colors if themeSwitchState is THEME_SWITCH_ON
  if (themeSwitchState === "THEME_SWITCH_ON") {
    currentAppColors = {
      ...currentAppColors,
      primaryColor: currentAppColors.secondaryColor,
      secondaryColor: currentAppColors.primaryColor,
    }
  }

  const isLightOrDark = (color: string): "light" | "dark" =>
    color.includes("#fff") ? "light" : "dark"

  const readablePrimaryColor = readableColor(currentAppColors.primaryColor)
  const readableSecondaryColor = readableColor(currentAppColors.secondaryColor)
  const transparent = "transparent"
  const opaquePrimaryColor = rgba(currentAppColors.primaryColor, 0.2)
  const opaquePrimaryColorLevel1 = rgba(currentAppColors.primaryColor, 0.2)
  const opaquePrimaryColorLevel2 = rgba(currentAppColors.primaryColor, 0.4)
  const opaquePrimaryColorLevel3 = rgba(currentAppColors.primaryColor, 0.6)
  const opaquePrimaryColorLevel4 = rgba(currentAppColors.primaryColor, 0.8)
  const opaqueSecondaryColor = rgba(currentAppColors.secondaryColor, 0.2)
  const opaqueSecondaryColorLevel1 = rgba(currentAppColors.secondaryColor, 0.2)
  const opaqueSecondaryColorLevel2 = rgba(currentAppColors.secondaryColor, 0.4)
  const opaqueSecondaryColorLevel3 = rgba(currentAppColors.secondaryColor, 0.6)
  const opaqueSecondaryColorLevel4 = rgba(currentAppColors.secondaryColor, 0.8)
  const primaryColorBgStatusBarStyle: "light" | "dark" = isLightOrDark(readablePrimaryColor)
  const secondaryBgStatusBarStyle: "light" | "dark" = isLightOrDark(readableSecondaryColor)

  const colors = {
    ...currentAppColors,
    readablePrimaryColor,
    readableSecondaryColor,
    primaryColorBgStatusBarStyle,
    secondaryBgStatusBarStyle,
    opaquePrimaryColor,
    opaqueSecondaryColor,
    opaquePrimaryColorLevel1,
    opaquePrimaryColorLevel2,
    opaquePrimaryColorLevel3,
    opaquePrimaryColorLevel4,
    opaqueSecondaryColorLevel1,
    opaqueSecondaryColorLevel2,
    opaqueSecondaryColorLevel3,
    opaqueSecondaryColorLevel4,
    transparent,
  }

  const staticAppColors = getAppColorsInfo(currentIdForColors) || {
    primaryColor: "#000000",
    secondaryColor: "#FFFFFF",
  }

  const staticColors = {
    ...staticAppColors,
    readablePrimaryColor: readableColor(staticAppColors.primaryColor),
    readableSecondaryColor: readableColor(staticAppColors.secondaryColor),
    opaquePrimaryColor: rgba(staticAppColors.primaryColor, 0.2),
    opaqueSecondaryColor: rgba(staticAppColors.secondaryColor, 0.2),
    opaquePrimaryColorLevel1: rgba(staticAppColors.primaryColor, 0.2),
    opaqueSecondaryColorLevel1: rgba(staticAppColors.secondaryColor, 0.2),
    opaquePrimaryColorLevel2: rgba(staticAppColors.primaryColor, 0.4),
    opaqueSecondaryColorLevel2: rgba(staticAppColors.secondaryColor, 0.4),
    opaquePrimaryColorLevel3: rgba(staticAppColors.primaryColor, 0.6),
    opaqueSecondaryColorLevel3: rgba(staticAppColors.secondaryColor, 0.6),
    opaquePrimaryColorLevel4: rgba(staticAppColors.primaryColor, 0.8),
    opaqueSecondaryColorLevel4: rgba(staticAppColors.secondaryColor, 0.8),
    primaryColorBgStatusBarStyle: isLightOrDark(readablePrimaryColor),
    secondaryBgStatusBarStyle: isLightOrDark(readableSecondaryColor),
    transparent,
  }

  // TABLET-SPECIFIC SIZING - Scale everything up for better tablet experience
  const tabletScale = 1.5 // 40% larger than phone

  // Tablet-optimized element sizes
  const tabletElementSize = {
    micro: Math.round(elementSize.micro * tabletScale),
    tiny: Math.round(elementSize.tiny * tabletScale),
    extraSmall: Math.round(elementSize.extraSmall * tabletScale),
    small: Math.round(elementSize.small * tabletScale),
    medium: Math.round(elementSize.medium * tabletScale),
    large: Math.round(elementSize.large * tabletScale),
    extraLarge: Math.round(elementSize.extraLarge * tabletScale),
    huge: Math.round(elementSize.huge * tabletScale),
    massive: Math.round(elementSize.massive * tabletScale),
  }

  // Tablet-optimized border radius
  const tabletBorderRadiusSize = {
    micro: Math.round(borderRadiusSize.micro * tabletScale),
    tiny: Math.round(borderRadiusSize.tiny * tabletScale),
    extraSmall: Math.round(borderRadiusSize.extraSmall * tabletScale),
    small: Math.round(borderRadiusSize.small * tabletScale),
    medium: Math.round(borderRadiusSize.medium * tabletScale),
    large: Math.round(borderRadiusSize.large * tabletScale),
    extraLarge: Math.round(borderRadiusSize.extraLarge * tabletScale),
    huge: Math.round(borderRadiusSize.huge * tabletScale),
    massive: Math.round(borderRadiusSize.massive * tabletScale),
  }

  // Tablet-optimized spacing
  const tabletSpacing = {
    micro: Math.round(spacing.micro * tabletScale),
    tiny: Math.round(spacing.tiny * tabletScale),
    extraSmall: Math.round(spacing.extraSmall * tabletScale),
    small: Math.round(spacing.small * tabletScale),
    medium: Math.round(spacing.medium * tabletScale),
    large: Math.round(spacing.large * tabletScale),
    extraLarge: Math.round(spacing.extraLarge * tabletScale),
    huge: Math.round(spacing.huge * tabletScale),
    massive: Math.round(spacing.massive * tabletScale),
  }

  // Tablet-optimized border sizes
  const tabletBorderSize = {
    xxl: Math.round(borderSize.xxl * tabletScale),
    xl: Math.round(borderSize.xl * tabletScale),
    lg: Math.round(borderSize.lg * tabletScale),
    md: Math.round(borderSize.md * tabletScale),
    sm: Math.round(borderSize.sm * tabletScale),
    xs: Math.round(borderSize.xs * tabletScale),
    xxs: borderSize.xxs * tabletScale, // Keep decimal for very small borders
  }

  // Tablet-optimized layout calculations
  const tabletMagicHeight = deviceHeight * 0.12 // Slightly larger proportion for tablets
  const tabletInitialOpenersHeight = deviceHeight + tabletSpacing.extraLarge - tabletMagicHeight * 5
  const tabletMagicWidth = deviceWidth * 0.85 // Slightly narrower for better proportions
  const tabletMagicLeftRightSpacing = (deviceWidth - tabletMagicWidth) / 2
  const tabletInitialTopicSelectionHeight = deviceHeight + -(tabletMagicHeight / 2)
  const tabletInitialInfoHeight = tabletMagicHeight / 2
  const tabletInitialActionBarHeight = tabletMagicHeight
  const tabletCombinedOpenersAndActionBarHeight =
    tabletInitialOpenersHeight + tabletInitialActionBarHeight
  const tabletActionBarIconInitialWidth = (deviceWidth * 0.8) / 4

  // Tablet-optimized utils
  const tabletUtils = {
    positionAbsolute: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    positionAbsoluteBottom: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
    },
    getWidthOf,
    getHeightOf,
    fullWidth: deviceWidth,
    fullHeight: deviceHeight,
    isTablet: true, // Always true for tablet theme
    appValues: getAppStyleValues(appSectionDetails, deviceHeight),
    layoutValues: {
      defaultHeight: tabletMagicHeight,
      defaultWidth: tabletMagicWidth,
      magicLeftRightSpacing: tabletMagicLeftRightSpacing,
      initial: {
        openersHeight: tabletInitialOpenersHeight + tabletMagicHeight + tabletMagicHeight / 2,
        topicSelectionHeight: tabletInitialTopicSelectionHeight,
        infoHeight: tabletInitialInfoHeight,
        infoCircleWrapperHeight: tabletElementSize.extraLarge,
        infoCircleWrapperWidth: tabletElementSize.extraLarge,
        infoCircleWrapperBorderRadius: tabletElementSize.extraLarge / 2,
      },
      animated: {
        combinedOpenersAndActionBarHeight: tabletCombinedOpenersAndActionBarHeight,
        infoOpenHeight: tabletInitialInfoHeight + tabletCombinedOpenersAndActionBarHeight,
        infoCircleWrapperHeight: tabletCombinedOpenersAndActionBarHeight - tabletMagicHeight,
        infoCircleWrapperWidth: deviceWidth * 0.85, // Slightly narrower for tablets
        actionBar: {
          large: {
            openersHeight: tabletCombinedOpenersAndActionBarHeight * 0.3,
            actionBarHeight: tabletCombinedOpenersAndActionBarHeight * 0.7,
          },
          medium: {
            openersHeight: tabletCombinedOpenersAndActionBarHeight * 0.45,
            actionBarHeight: tabletCombinedOpenersAndActionBarHeight * 0.55,
          },
          small: {
            openersHeight: tabletCombinedOpenersAndActionBarHeight * 0.5,
            actionBarHeight: tabletCombinedOpenersAndActionBarHeight * 0.5,
          },
        },
      },
    },
    actionBarValues: {
      actionBarIconInitialWidth: tabletActionBarIconInitialWidth,
    },
  }

  // Tablet-optimized action bar
  const tabletActionBarHeight = tabletElementSize.extraLarge + tabletElementSize.extraSmall
  const tabletActionBarBg = {
    width: tabletUtils.getWidthOf(80),
    height: tabletActionBarHeight,
    borderRadius: tabletBorderRadiusSize.small,
    backgroundColor: colors.secondaryColor,
    marginBottom: tabletActionBarHeight,
  }

  // Tablet-optimized typography with larger font sizes
  const defaultFont = typography.fonts[DEFAULT_FONT]
  const selectedFontObj =
    selectedFont && typography.fonts[selectedFont as keyof typeof typography.fonts]
      ? (typography.fonts[selectedFont as keyof typeof typography.fonts] as any)
      : (defaultFont as any)

  const currentFont: CurrentFont = {
    light: selectedFontObj.light || defaultFont.light,
    normal: selectedFontObj.normal || defaultFont.normal,
    medium: selectedFontObj.medium || defaultFont.medium,
    semiBold: selectedFontObj.semiBold || defaultFont.semiBold,
    bold: selectedFontObj.bold || defaultFont.bold,
  }

  // Tablet-optimized typography sizes
  const tabletTypography = {
    ...typography,
    currentFont,
    // Scale up font sizes for tablets
    size: {
      ...typography.size,
      xxs: Math.round(typography.size.xxs * tabletScale),
      xs: Math.round(typography.size.xs * tabletScale),
      sm: Math.round(typography.size.sm * tabletScale),
      md: Math.round(typography.size.md * tabletScale),
      lg: Math.round(typography.size.lg * tabletScale),
      xl: Math.round(typography.size.xl * tabletScale),
      xxl: Math.round(typography.size.xxl * tabletScale),
      xxxl: Math.round(typography.size.xxxl * tabletScale),
      huge: Math.round(typography.size.huge * tabletScale),
      xxxs: Math.round(typography.size.xxxs * tabletScale),
    },
    lineHeight: {
      ...typography.lineHeight,
      xxs: typography.lineHeight.xxs * tabletScale,
      xs: typography.lineHeight.xs * tabletScale,
      sm: typography.lineHeight.sm * tabletScale,
      md: typography.lineHeight.md * tabletScale,
      lg: typography.lineHeight.lg * tabletScale,
      xl: typography.lineHeight.xl * tabletScale,
      xxl: typography.lineHeight.xxl * tabletScale,
    },
  }

  const markdownStyles = getMarkdownBaseStyles(colors.secondaryColor, currentFont)
  const primaryTextMarkdownStyles = getMarkdownBaseStyles(colors.primaryColor, currentFont)

  return {
    spacing: tabletSpacing,
    timing: {
      ...timing,
    },
    colors,
    staticColors,
    typography: tabletTypography,
    borderSize: tabletBorderSize,
    elementSize: tabletElementSize,
    borderRadiusSize: tabletBorderRadiusSize,
    utils: {
      ...tabletUtils,
      actionBarBg: tabletActionBarBg,
      actionBarHeight: tabletActionBarHeight,
    },
    markdownStyles,
    primaryTextMarkdownStyles,
  }
}
