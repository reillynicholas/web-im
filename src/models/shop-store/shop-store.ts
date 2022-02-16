import { flow, Instance, types } from "mobx-state-tree"
import { Api } from "../../api/api"
import { Merchant } from "../../entity/type"
import { BaseMerchant } from "./types"

export const ShopStoreModel = types
  .model("ShopStore", {
    merchant: types.optional(types.frozen<Merchant>(), BaseMerchant),
  })
  .actions((self) => ({
    setMerchant(merchant: Merchant) {
      self.merchant = merchant
    },
  }))
  .actions((self) => ({
    getMerchantInfo: flow(function* (id: string) {
      try {
        const {
          status,
          data: { result },
        } = yield Api.get("/api/Merch/get", { params: { id: id } })
        if (status === 200) {
          self.setMerchant(result)
          return {
            success: true,
            data: result,
          }
        }
        return { success: true, data: {} }
      } catch (error) {}
    }),
  }))

type ShopStoreType = Instance<typeof ShopStoreModel>
export interface ShopStore extends ShopStoreType {}
