import { init } from "@amplitude/analytics-react-native"
import { TRACKING_API_KEY } from "@env"

export const initializeAmplitude = async (): Promise<void> => {
  try {
    await init(TRACKING_API_KEY, undefined, {
      // React Native specific options
      trackingSessionEvents: true,

      // General options
      flushQueueSize: 30,
      flushIntervalMillis: 30000, // 30 seconds

      // Tracking options
      trackingOptions: {
        adid: true,
        deviceManufacturer: true,
        deviceModel: true,
        ipAddress: true,
        language: true,
        osName: true,
        osVersion: true,
        platform: true,
      },
    })

    console.log("Amplitude initialized successfully with offline support")
  } catch (error: unknown) {
    console.error("Failed to initialize Amplitude:", error)
  }
}
