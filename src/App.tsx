import React from "react"
import { useRoutes } from "react-router-dom"
import { Global, css } from "@emotion/react"
import { GlobalStyle } from "./theme/resetCss"
import routers from "./router/routers"
import Loading from "./component/loading"
import Toast from "./component/toast"

const App: React.FunctionComponent<{}> = () => {
  const routersElement = useRoutes(routers)

  return (
    <>
      <Global
        styles={css`
          ${GlobalStyle("en-US")}
        `}
      />
      <Loading
        ref={(loaidngRef: ILoading) => {
          global.$loading = loaidngRef
        }}
      ></Loading>
      <Toast
        ref={(toastRef: IToast) => {
          global.$toast = toastRef
        }}
      />
      {routersElement}
    </>
  )
}

export default App
