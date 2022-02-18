import { Api } from "../../api/api"
import { IApiRespone, Merchant } from "../../entity/type"

interface IMerchInfoResult {
  result: Merchant
}

export const getMerchInfoRequset = (
  id: string
): Promise<IApiRespone<IMerchInfoResult>> => {
  return Api.get("/api/Merch/get", { params: { id } })
}
