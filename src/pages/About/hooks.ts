import { useEffect, useState } from "react"
import { Api } from "../../api/api"

export const useRequest = () => {
  const [merchant, setMerchant] = useState()

  const getMerch = async () => {
    const { status } = await Api.get("/api/Merch/get", {
      params: {
        id: "0dc1ef5e-7658-41cf-b21e-b307a0f1e47d",
      },
    })
  }

  useEffect(() => {
    try {
      global?.$loading?.open()
      getMerch()
    } catch (error) {
      console.log(error)
    } finally {
      setTimeout(() => {
        global?.$loading.close()
      }, 3000)
    }
  }, [])

  return { merchant }
}
