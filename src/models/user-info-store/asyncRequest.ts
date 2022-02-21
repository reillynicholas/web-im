import { Api } from "../../api/api"
import { IUserInfo, IApiRespond } from "../../entity/type"

interface IUserInfoResult {
  userInfo: IUserInfo
}

export const getUserInfoRequest = (): Promise<IApiRespond<IUserInfoResult>> => {
  return Api.post("/api/User/signin")
}
