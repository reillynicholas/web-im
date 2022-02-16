import { flow, Instance, types } from "mobx-state-tree"
import { Api } from "../../api/api"
import { DeliveryType, IAddress, IUserInfo } from "../../entity/type"

export const BaseUserInfo: IUserInfo = {
  userId: "",
  platformServiceFeeCredit: 0,
  email: "",
  displayName: "",
  merchId: "",
  defaultAddress: null,
  userConfig: {
    id: "",
    userId: "",
    mile: 0,
    languageCode: "en-US",
    orderParkingLotPickupFieldValues: [],
    deliveryType: DeliveryType.Both,
    email: "",
    isEmailNotification: false,
  },
  picture: "",
  allAddresses: [],
  phone: "",
}

export const UserInfoStoreModel = types
  .model("UserInfoStore", {
    userInfo: types.optional(types.frozen<IUserInfo>(), BaseUserInfo),
    idToken: types.optional(types.frozen<string>(), ""),
    languageCode: types.optional(types.frozen<string>(), ""),
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
    updateUserInfo(userInfo: IUserInfo) {
      self.userInfo = userInfo
      self.languageCode = "zh-TW"
    },
    updateIdToken(idToken: string) {
      self.idToken = idToken
    },
  }))
  .actions((self) => ({
    getUserInfo: flow(function* () {
      try {
        const { status, data } = yield Api.post("/api/User/signin")
        if (status === 200) {
          self.updateUserInfo(data.userInfo)
          return {
            isSuccess: true,
            data,
          }
        }
        return {
          isSuccess: false,
          error: "Login Fail",
        }
      } catch (error) {
        console.log(error)

        return {
          isSuccess: false,
          error,
        }
      }
    }),
  }))

type UserInfoStoreType = Instance<typeof UserInfoStoreModel>
export interface UserInfoStore extends UserInfoStoreType {}
