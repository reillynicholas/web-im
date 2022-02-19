import qs from "qs"
import { useEffect, useRef } from "react"
import { useStores } from "../models"
import { storage } from "../utils/index"

export const useBaseInfo = () => {
  const { userInfoStore, shopStore } = useStores()
  const enterPage = useRef<string>("") // 小明 web 传过来的参数，决定一进来去到小Y页面还是商家对话页面

  useEffect(() => {
    const {
      token = "",
      merchId = "",
      page = "",
    } = qs.parse(window.location.href.split("?")[1])

    enterPage.current = page as string
    if (token && merchId) {
      storage.session.setItem("token", token)
      storage.session.setItem("merchId", merchId)
    }

    initData(merchId as string)
  })

  async function initData(merchId: string) {
    try {
      global?.$loading?.open()
      await userInfoStore.getUserInfo()
      await shopStore.getMerchantInfo(
        merchId || storage.session.getItem("merchId")
      )
    } finally {
      global?.$loading.close()
    }
  }

  return { enterPage }
}
