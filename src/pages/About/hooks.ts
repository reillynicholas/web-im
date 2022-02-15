import { useEffect, useState } from "react"
import { Api } from "../../api/api"

export const useRequest = (merchId: string) => {
  const [merchant, setMerchant] = useState()

  const getMerch = async () => {
    const { status } = await Api.get("/api/Merch/get", {
      params: {
        id: merchId,
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
      global?.$loading.close()
    }
  }, [])

  return { merchant }
}
