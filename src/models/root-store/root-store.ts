import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { createContext, useContext } from "react"
import { ShopStoreModel } from "../shop-store/shop-store"
import { UserInfoStoreModel } from "../user-info-store/user-store"

export const RootStoreModel = types.model("RootStore", {
  userInfoStore: types.optional(UserInfoStoreModel, {}),
  shopStore: types.optional(ShopStoreModel, {}),
})

export interface RootStore extends Instance<typeof RootStoreModel> {}

export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}

export const rootStore = RootStoreModel.create()

const RootStoreContext = createContext<RootStore>({} as RootStore)

export const Provider = RootStoreContext.Provider

export const useStores = () => useContext(RootStoreContext)
