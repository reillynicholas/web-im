import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { useStores } from "../../models"

export const Layout = () => {
  const { userInfoStore, shopStore } = useStores()

  let merchId = "b20a1c69-dcc7-463b-b03c-9324efe737d9"

  useEffect(() => {
    async function initData() {
      try {
        global?.$loading?.open()
        await shopStore.getMerchantInfo(merchId)
        await userInfoStore.getUserInfo()
      } catch (error) {
      } finally {
        global?.$loading.close()
      }
    }
    initData()
  }, [merchId, shopStore, userInfoStore])
  return (
    <div>
      <Outlet />
    </div>
  )
}
