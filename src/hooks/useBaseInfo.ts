import qs from "qs"
import { useEffect } from "react"
import { useStores } from "../models"
import { storage } from "../utils/index"

export const useBaseInfo = () => {
  const { userInfoStore, shopStore } = useStores()

  useEffect(() => {
    const { token = "", merchId = "" } = qs.parse(
      window.location.href.split("?")[1]
    )

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
}
