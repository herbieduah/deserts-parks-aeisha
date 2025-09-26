import Constants from "expo-constants"

export interface BuildInfo {
  isDevelopment: boolean
  isTestFlight: boolean
  isProduction: boolean
  buildType: "development" | "testflight" | "production"
}

/**
 * Detects the current build environment
 * - Development: __DEV__ is true or running in Expo Go
 * - TestFlight: iOS app distributed via TestFlight (internal distribution)
 * - Production: App Store or Play Store release
 */
export const getBuildInfo = (): BuildInfo => {
  const isDevelopment = __DEV__ || Constants.appOwnership === "expo"
  
  // TestFlight detection for iOS
  // TestFlight builds have specific characteristics:
  // - Not in development mode
  // - Running on device (not simulator)
  // - Has specific bundle identifiers or distribution methods
  const isTestFlight = !isDevelopment && 
    Constants.platform?.ios?.buildNumber !== undefined &&
    Constants.appOwnership === "standalone" &&
    // Additional TestFlight indicators could be added here
    // For now, we'll use the distribution type from EAS build
    (Constants.executionEnvironment === "storeClient" || 
     Constants.executionEnvironment === "standalone")

  const isProduction = !isDevelopment && !isTestFlight

  let buildType: "development" | "testflight" | "production"
  if (isDevelopment) {
    buildType = "development"
  } else if (isTestFlight) {
    buildType = "testflight"
  } else {
    buildType = "production"
  }

  return {
    isDevelopment,
    isTestFlight,
    isProduction,
    buildType,
  }
}

/**
 * Determines if TempUserTypePicker should be shown
 * Only show in development and TestFlight builds, never in production
 */
export const shouldShowTempUserTypePicker = (): boolean => {
  const buildInfo = getBuildInfo()
  return buildInfo.isDevelopment || buildInfo.isTestFlight
}

/**
 * Logs build information for debugging
 */
export const logBuildInfo = (): void => {
  const buildInfo = getBuildInfo()
  console.log("🏗️ Build Detection:", {
    buildType: buildInfo.buildType,
    isDevelopment: buildInfo.isDevelopment,
    isTestFlight: buildInfo.isTestFlight,
    isProduction: buildInfo.isProduction,
    appOwnership: Constants.appOwnership,
    executionEnvironment: Constants.executionEnvironment,
    platform: Constants.platform,
  })
}
