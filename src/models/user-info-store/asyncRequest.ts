import { Api } from "../../api/api"
import { IUserInfo, IApiRespone } from "../../entity/type"

interface IUserInfoResult {
  userInfo: IUserInfo
}

export const getUserInfoRequest = (): Promise<IApiRespone<IUserInfoResult>> => {
  return Api.post("/api/User/signin")
}
