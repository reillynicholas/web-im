import imPage from "./pages/im"

type LanguageList = {
  "en-US": {
    [key: string]: string
  }
  "zh-TW": {
    [key: string]: string
  }
  "zh-CN": {
    [key: string]: string
  }
}

export default {
  "en-US": {
    ...imPage["en-US"],
  },
  "zh-TW": {
    ...imPage["zh-TW"],
  },
  "zh-CN": {
    ...imPage["zh-CN"],
  },
} as LanguageList
