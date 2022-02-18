import { flow, Instance, toGenerator, types } from "mobx-state-tree"
import { IUserInfo, IAddress, LanguageCode } from "../../entity/type"
import { getUserInfoRequest } from "./asyncRequest"
import { BaseUserInfo } from "./types"
import { translate } from "../../language/nidex"
import { storage } from "../../utils/index"

export const UserInfoStoreModel = types
  .model("UserInfoStore", {
    userInfo: types.optional(types.frozen<IUserInfo>(), BaseUserInfo),
    idToken: types.optional(types.frozen<string>(), ""),
    languageCode: types.optional(types.frozen<LanguageCode>(), "en-US"),
  })
  .views((self) => ({
    get allAddresses(): IAddress[] {
      return self.userInfo?.allAddresses ?? []
    },
    get isLogin(): boolean {
      return !!self.idToken && !!self.userInfo?.userId
    },
  }))
  .actions((self) => ({
    updateIdToken(idToken: string) {
      self.idToken = idToken
    },
  }))
  .actions((self) => ({
    updateUserInfo(userInfo: IUserInfo) {
      self.updateIdToken(storage.session.getItem("token"))
      self.userInfo = userInfo
      self.languageCode = userInfo.userConfig.languageCode
    },
  }))
  .actions((self) => ({
    getUserInfo: flow(function* () {
      try {
        const {
          status,
          data: { userInfo },
        } = yield* toGenerator(getUserInfoRequest())
        if (status === 200) {
          self.updateUserInfo(userInfo)
          storage.session.setItem("userInfo", userInfo)
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

type UserInfoStoreType = Instance<typeof UserInfoStoreModel>
export interface UserInfoStore extends UserInfoStoreType {}
