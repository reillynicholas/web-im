import language from "./language"
import { LanguageCode } from "../entity/type"
import { rootStore } from "../models/root-store/root-store"

export const translate = (key: string): string => {
  const languageCode: LanguageCode = rootStore.userInfoStore.languageCode
  try {
    return language[languageCode][key] || key
  } catch (e) {
    return language["en-US"][key] || key
  }
}

export const getDiffLanguageString = (
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
