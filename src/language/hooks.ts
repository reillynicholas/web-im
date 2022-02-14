import language from "./language"
import { LanguageCode } from "../entity/type"

export const useLanguage = () => {
  const translate = (key: string): string => {
    const languageCode: LanguageCode = "zh-TW"
    try {
      return language[languageCode][key] || key
    } catch (e) {
      return language["en-US"][key] || key
    }
  }

  const getDiffLanguageString = (
    str: string,
    arr: Array<{ [key: string]: string }>
  ) => {
    const length = Number(arr.length)
    for (let i = 0; i < length; i++) {
      const key = Object.keys(arr[i])[0]
      str = str.replace(`(${key})`, arr[i][key])
    }
    return str
  }

  return {
    translate,
    getDiffLanguageString,
  }
}
