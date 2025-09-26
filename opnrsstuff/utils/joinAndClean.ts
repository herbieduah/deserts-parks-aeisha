function joinAndClean(arr: string[]): string {
  if (!arr.length) return ""
  return arr.join("").replace(/[^a-zA-Z0-9]/g, "")
}

export default joinAndClean
