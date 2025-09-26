import AsyncStorage from "@react-native-async-storage/async-storage"

// Storage keys
const STREAK_STORAGE_KEY = "user:streak"
const LAST_OPEN_DATE_KEY = "user:lastOpenDate"
const LONGEST_STREAK_KEY = "user:longestStreak"
const TOTAL_OPENS_KEY = "user:totalOpens"

/**
 * Utility function to reset all streak data
 * This is useful for testing purposes
 */
export async function resetStreakData(): Promise<void> {
  try {
    await Promise.all([
      AsyncStorage.removeItem(STREAK_STORAGE_KEY),
      AsyncStorage.removeItem(LONGEST_STREAK_KEY),
      AsyncStorage.removeItem(LAST_OPEN_DATE_KEY),
      AsyncStorage.removeItem(TOTAL_OPENS_KEY),
    ])
    console.log("Streak data reset successfully")
  } catch (error) {
    console.error("Error resetting streak data:", error)
  }
}

/**
 * Utility function to log all streak data
 * This is useful for debugging purposes
 */
export async function logStreakData(): Promise<void> {
  try {
    const [currentStreakStr, longestStreakStr, lastOpenDate, totalOpensStr] = await Promise.all([
      AsyncStorage.getItem(STREAK_STORAGE_KEY),
      AsyncStorage.getItem(LONGEST_STREAK_KEY),
      AsyncStorage.getItem(LAST_OPEN_DATE_KEY),
      AsyncStorage.getItem(TOTAL_OPENS_KEY),
    ])

    console.log("Current streak data:", {
      currentStreak: currentStreakStr,
      longestStreak: longestStreakStr,
      lastOpenDate,
      totalOpens: totalOpensStr,
    })
  } catch (error) {
    console.error("Error logging streak data:", error)
  }
}

/**
 * Utility function to manually set streak data
 * This is useful for testing purposes
 */
export async function setStreakData(data: {
  currentStreak?: number
  longestStreak?: number
  lastOpenDate?: string
  totalOpens?: number
}): Promise<void> {
  try {
    const promises = []

    if (data.currentStreak !== undefined) {
      promises.push(AsyncStorage.setItem(STREAK_STORAGE_KEY, data.currentStreak.toString()))
    }

    if (data.longestStreak !== undefined) {
      promises.push(AsyncStorage.setItem(LONGEST_STREAK_KEY, data.longestStreak.toString()))
    }

    if (data.lastOpenDate !== undefined) {
      promises.push(AsyncStorage.setItem(LAST_OPEN_DATE_KEY, data.lastOpenDate))
    }

    if (data.totalOpens !== undefined) {
      promises.push(AsyncStorage.setItem(TOTAL_OPENS_KEY, data.totalOpens.toString()))
    }

    await Promise.all(promises)
    console.log("Streak data set successfully:", data)
  } catch (error) {
    console.error("Error setting streak data:", error)
  }
}
