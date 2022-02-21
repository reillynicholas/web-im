import { Api } from "../../api/api"
import { IApiRespond, IMerchantDto } from "../../entity/type"

interface IMerchInfoResult {
  result: IMerchantDto
}

export const getMerchInfoRequset = (
  id: string
): Promise<IApiRespond<IMerchInfoResult>> => {
  return Api.get("/api/Merch/get", { params: { id } })
}
