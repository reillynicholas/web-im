import axios, { AxiosRequestConfig } from "axios"

const instance = axios.create({
  baseURL: "https://testapi.yamimeal.com",

  headers: {
    "Content-Type": "application/json; charset=utf-8",
    loginWithNoUserInfo: true,
    js_version: "3.7.0",
    source_system: "web_customer",
  },
})

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const Authorization = `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjE4MmU0NTBhMzVhMjA4MWZhYTFkOWFlMWQyZDc1YTBmMjNkOTFkZjgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI1NDI1NTYwMzIwMzYtbG4yMmlkdGwxYzk4Y2VhN2NrM3JoYTVwaTgyZDFqdHYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI1NDI1NTYwMzIwMzYtbG4yMmlkdGwxYzk4Y2VhN2NrM3JoYTVwaTgyZDFqdHYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTU4NTc5Njg3NzI5MzI5MDA4NzYiLCJlbWFpbCI6InJlaWxseW5pY2hvbGFzNTNAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiIzRXY3TFZEQ0Vtb05hM3ZzUHJYSl9nIiwibmFtZSI6InJlaWxseSBuaWNob2xhcyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQVRYQUp4ektodGF2MnV3dUpfVG5DWjQtQ0JJN0RjX3JPN1BHQ2R1SnhQUD1zOTYtYyIsImdpdmVuX25hbWUiOiJyZWlsbHkiLCJmYW1pbHlfbmFtZSI6Im5pY2hvbGFzIiwibG9jYWxlIjoiemgtQ04iLCJpYXQiOjE2NDQxOTc4OTEsImV4cCI6MTY0NDIwMTQ5MX0.VIBkqw-6_4uk5Sr3GsBaUEFtk_SbZRfzZIfcOpgFc1puGxdbCYQ9H0U7v0sGVcq6ty-oN6kMaA-Wvs7WOWfPuxPY6Yb7cY-7j1J9q9sMrZ0Q_FGRsQHg1hHDThl7jx9QO2sJ9fvVv8zBaIwcX36Cq2g_Rmh5B4OELPDK3HuqaI2tFht2yupYxpOqnEolOk-pYkbl43cpIWMvQaZ8RFDFwAC4VfsMGfR_BbP3Pl7IVEvWHcmyFj7pVvB34T3GFVMVryFNx6CcqPQEJvbSO0eDocFG2A1lyIHBrSQdRQG_pHXcydeEOXceLwHfyLolfsx4cqLBSjZZJ-gBfHV6P_217A`
    config.headers = {
      Authorization: Authorization,
      language_code: "zh-TW",
      lat: "",
      lng: "",
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
