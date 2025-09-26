// Web-compatible typography for Desert Spark Cards
// Adapted from Opnrs design system

const fonts = {
  fredoka: {
    light: "'Fredoka', sans-serif",
    normal: "'Fredoka', sans-serif",
    medium: "'Fredoka', sans-serif",
    semiBold: "'Fredoka', sans-serif",
    bold: "'Fredoka', sans-serif",
  },
  currentFont: {
    // Default font (Fredoka for web)
    light: "'Fredoka', sans-serif",
    normal: "'Fredoka', sans-serif",
    medium: "'Fredoka', sans-serif",
    semiBold: "'Fredoka', sans-serif",
    bold: "'Fredoka', sans-serif",
  },
  systemFont: {
    light: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    normal: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    medium: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    semiBold: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    bold: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
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
  secondary: fonts.systemFont,
}
