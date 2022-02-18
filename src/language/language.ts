import imPage from "./pages/im"
import common from "./pages/common"

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
  },
  "zh-TW": {
    ...common["en-US"],
    ...imPage["zh-TW"],
  },
  "zh-CN": {
    ...common["en-US"],
    ...imPage["zh-CN"],
  },
} as LanguageList
