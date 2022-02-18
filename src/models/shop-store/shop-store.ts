import { flow, Instance, toGenerator, types } from "mobx-state-tree"
import { IMerchantDto } from "../../entity/type"
import { BaseMerchant } from "./types"
import { getMerchInfoRequset } from "./asyncRequest"
import { translate } from "../../language/nidex"

export const ShopStoreModel = types
  .model("ShopStore", {
    merchant: types.optional(types.frozen<IMerchantDto>(), BaseMerchant),
  })
  .actions((self) => ({
    setMerchant(merchant: IMerchantDto) {
      self.merchant = merchant
    },
  }))
  .actions((self) => ({
    getMerchantInfo: flow(function* (id: string) {
      try {
        const {
          status,
          data: { result },
        } = yield* toGenerator(getMerchInfoRequset(id))
        if (status === 200) {
          self.setMerchant(result)
        } else {
          global.$toast.open({
            type: "error",
            message: translate("common_NetworkError"),
          })
        }
      } catch (error) {
        global.$toast.open({
          type: "error",
          message: translate("common_NetworkError"),
        })
      }
    }),
  }))

type ShopStoreType = Instance<typeof ShopStoreModel>
export interface ShopStore extends ShopStoreType {}
