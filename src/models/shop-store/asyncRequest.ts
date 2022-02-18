import { Api } from "../../api/api"
import { IApiRespone, IMerchantDto } from "../../entity/type"

interface IMerchInfoResult {
  result: IMerchantDto
}

export const getMerchInfoRequset = (
  id: string
): Promise<IApiRespone<IMerchInfoResult>> => {
  return Api.get("/api/Merch/get", { params: { id } })
}
