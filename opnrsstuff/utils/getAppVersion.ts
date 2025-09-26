interface AppConfig {
  expo: {
    version: string
    ios: {
      buildNumber: string
    }
    android: {
      versionCode: number
    }
  }
}

function getAppVersions(appJsonContent: AppConfig) {
  const versions = {
    expoVersion: appJsonContent.expo.version,
    iosBuildNumber: appJsonContent.expo.ios.buildNumber,
    androidVersionCode: appJsonContent.expo.android.versionCode,
  }

  return versions
}
export default getAppVersions
