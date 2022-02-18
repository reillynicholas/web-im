import React, { useMemo } from "react"
import { useRoutes } from "react-router-dom"
import { Global, css } from "@emotion/react"
import { GlobalStyle } from "./theme/resetCss"
import routers from "./router/routers"
import Loading from "./component/loading"
import Toast from "./component/toast"
import { useStores } from "./models/root-store/root-store"
import { observer } from "mobx-react-lite"

const App: React.FunctionComponent<{}> = observer(() => {
  const routersElement = useRoutes(routers)

  const { userInfoStore } = useStores()
  const globalStyle = useMemo(() => {
    return GlobalStyle(userInfoStore.languageCode)
  }, [userInfoStore.languageCode])
  return (
    <>
      <Global
        styles={css`
          ${globalStyle}
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
})

export default App
