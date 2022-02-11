import axios from "axios"

const instance = axios.create({
  baseURL: "https://testapi.yamimeal.com",

  headers: {
    "Content-Type": "application/json; charset=utf-8",
    loginWithNoUserInfo: true,
    js_version: "3.7.0",
    source_system: "web_customer",
  },
})

instance.interceptors.request.use()

instance.interceptors.response.use()

export const Api = instance
