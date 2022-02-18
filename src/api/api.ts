import axios, { AxiosRequestConfig } from "axios"
import { storage } from "../utils/index"

/**
 *  此处不能使用 store，避免循环引用问题
 */
const instance = axios.create({
  baseURL: "https://testapi.yamimeal.com",
})

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.headers = {
      Authorization: storage.session.getItem("token"),
      accept: "application/json; charset=utf-8",
      js_version: "3.7.0",
      source_system: "web_customer",
      merchid: storage.session.getItem("merchId"),
      language_code:
        storage.session.getItem("userInfo")?.userConfig?.languageCode ||
        "en-US",
      lat: storage.session.getItem("userInfo")?.defaultAddress?.lat || "",
      lng: storage.session.getItem("userInfo")?.defaultAddress?.lng || "",
    }
    return config
  },
  (error) => {}
)

instance.interceptors.response.use(
  (response) => {
    return response
  },
  (erro) => {}
)

export const Api = instance
