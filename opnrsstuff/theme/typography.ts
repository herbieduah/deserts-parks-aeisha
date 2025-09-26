// TODO: write documentation about fonts and typography along with guides on how to add custom fonts in own
// markdown file and add links from here

import { Platform } from "react-native"
// Fonts for the font picker
import {
  IBMPlexSans_400Regular as ibmPlexSansRegular,
  IBMPlexSans_700Bold as ibmPlexSansBold,
} from "@expo-google-fonts/ibm-plex-sans"

import {
  ZillaSlab_400Regular as zillaSlabRegular,
  ZillaSlab_700Bold as zillaSlabBold,
} from "@expo-google-fonts/zilla-slab"

import {
  Fredoka_400Regular as fredokaRegular,
  Fredoka_700Bold as fredokaBold,
} from "@expo-google-fonts/fredoka"

// Selected fonts
import { Syne_400Regular as syneRegular, Syne_700Bold as syneBold } from "@expo-google-fonts/syne"

import {
  Caudex_400Regular as caudexRegular,
  Caudex_700Bold as caudexBold,
} from "@expo-google-fonts/caudex"

import { SpecialElite_400Regular as specialEliteRegular } from "@expo-google-fonts/special-elite"

export const customFontsToLoad = {
  // Font picker fonts
  ibmPlexSansRegular,
  ibmPlexSansBold,
  zillaSlabRegular,
  zillaSlabBold,
  fredokaRegular,
  fredokaBold,
  syneRegular,
  syneBold,
  caudexRegular,
  caudexBold,
  specialEliteRegular,
}
// const [fontsLoaded] = useFonts({
//   "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
//   "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
// })

const systemFont = {
  light: Platform.select({ ios: "System", android: "sans-serif-light" }),
  normal: Platform.select({ ios: "System", android: "sans-serif" }),
  medium: Platform.select({ ios: "System", android: "sans-serif-medium" }),
  semiBold: Platform.select({ ios: "System", android: "sans-serif" }),
  bold: Platform.select({ ios: "System", android: "sans-serif" }),
}
const fonts = {
  systemFont: {
    light: systemFont.light,
    normal: systemFont.normal,
    medium: systemFont.medium,
    semiBold: systemFont.semiBold,
    bold: systemFont.bold,
  },
  // Font picker fonts
  ibmPlexSans: {
    light: "ibmPlexSansRegular", // Fallback to regular
    normal: "ibmPlexSansRegular",
    medium: "ibmPlexSansRegular", // Fallback to regular
    semiBold: "ibmPlexSansRegular", // Fallback to regular
    bold: "ibmPlexSansBold",
  },
  zillaSlab: {
    light: "zillaSlabRegular", // Fallback to regular
    normal: "zillaSlabRegular",
    medium: "zillaSlabRegular", // Fallback to regular
    semiBold: "zillaSlabRegular", // Fallback to regular
    bold: "zillaSlabBold",
  },
  fredoka: {
    light: "fredokaRegular", // Fallback to regular
    normal: "fredokaRegular",
    medium: "fredokaRegular", // Fallback to regular
    semiBold: "fredokaRegular", // Fallback to regular
    bold: "fredokaBold",
  },
  syne: {
    light: "syneRegular", // Fallback to regular
    normal: "syneRegular",
    medium: "syneRegular", // Fallback to regular
    semiBold: "syneRegular", // Fallback to regular
    bold: "syneBold",
  },
  caudex: {
    light: "caudexRegular", // Fallback to regular
    normal: "caudexRegular",
    medium: "caudexRegular", // Fallback to regular
    semiBold: "caudexRegular", // Fallback to regular
    bold: "caudexBold",
  },
  specialElite: {
    light: "specialEliteRegular", // Fallback to regular
    normal: "specialEliteRegular",
    medium: "specialEliteRegular", // Fallback to regular
    semiBold: "specialEliteRegular", // Fallback to regular
    bold: "specialEliteRegular", // Special Elite only has regular weight
  },
  currentFont: {
    // Default font (Fredoka)
    light: "fredokaRegular",
    normal: "fredokaRegular",
    medium: "fredokaRegular",
    semiBold: "fredokaRegular",
    bold: "fredokaBold",
  },
  helveticaNeue: {
    // iOS only font.
    thin: "HelveticaNeue-Thin",
    light: "HelveticaNeue-Light",
    normal: "Helvetica Neue",
    medium: "HelveticaNeue-Medium",
  },
  courier: {
    // iOS only font.
    normal: "Courier",
  },
  sansSerif: {
    // Android only font.
    thin: "sans-serif-thin",
    light: "sans-serif-light",
    normal: "sans-serif",
    medium: "sans-serif-medium",
  },
  monospace: {
    // Android only font.
    normal: "monospace",
  },
}

const fontSizes = {
  huge: 44,
  xxxl: 38,
  xxl: 32,
  xl: 24,
  lg: 20,
  md: 18,
  sm: 16,
  xs: 14,
  xxs: 12,
  xxxs: 10,
}

const lineHeights = {
  huge: 62, // 44 * 1.4
  xxxl: 50, // 38 * 1.4
  xxl: 45, // 32 * 1.4
  xl: 34, // 24 * 1.4
  lg: 28, // 20 * 1.4
  md: 25, // 18 * 1.4
  sm: 22, // 16 * 1.4
  xs: 20, // 14 * 1.4
  xxs: 17, // 12 * 1.4
  xxxs: 14, // 10 * 1.4
}

export const typography = {
  /**
   * The fonts are available to use, but prefer using the semantic name.
   */
  fonts,
  /**
   * font sizes for the app
   */
  size: {
    ...fontSizes,
  },
  /**
   * font lineHeights
   */
  lineHeight: {
    ...lineHeights,
  },
  fontWeight: {
    light: "300",
    normal: "normal",
    medium: "400",
    semiBold: "500",
    bold: "bold",
  },
  /**
   * The primary font. Used in most places.
   */
  primary: fonts.currentFont,
  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: fonts.helveticaNeue,
  /**
   * Lets get fancy with a monospace font!
   */
  code: Platform.select({ ios: fonts.courier, android: fonts.monospace }),
  systemFont: fonts.systemFont,
}

// code: Platform.select({ ios: fonts.courier, android: fonts.monospace }),
