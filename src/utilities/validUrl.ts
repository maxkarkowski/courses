export const isValidURL = (value: string): boolean => {
  try {
    new URL(value)
    return true
  } catch (e) {
    console.log(e)
    return false
  }
}
