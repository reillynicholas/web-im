import imPage from "./pages/im"
import common from "./pages/common"
import littleY from "./pages/littleY"

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
    ...common["en-US"],
    ...imPage["en-US"],
    ...littleY["en-US"],
  },
  "zh-TW": {
    ...common["zh-TW"],
    ...imPage["zh-TW"],
    ...littleY["zh-TW"],
  },
  "zh-CN": {
    ...common["zh-CN"],
    ...imPage["zh-CN"],
    ...littleY["zh-CN"],
  },
} as LanguageList
