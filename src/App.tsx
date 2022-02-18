import React from "react"
import { useRoutes } from "react-router-dom"
import routers from "./router/routers"
import Loading from "./component/loading"
import Toast from "./component/toast"
import GlobalCssComp from "./component/globalCss"

const App: React.FunctionComponent<{}> = () => {
  const routersElement = useRoutes(routers)

  return (
    <>
      <GlobalCssComp />
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
