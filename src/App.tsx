import React from "react"
import { useRoutes } from "react-router-dom"
import { Global, css } from "@emotion/react"
import { GlobalStyle } from "./theme/resetCss"
import routers from "./router/routers"
import Loading from "./component/loading"

const App: React.FunctionComponent<{}> = () => {
  const routersElement = useRoutes(routers)

  return (
    <>
      <Global
        styles={css`
          ${GlobalStyle("en-US")}
        `}
      />
      {routersElement}
      <Loading
        ref={(loaidngRef: any) => {
          global.$loading = loaidngRef
        }}
      ></Loading>
    </>
  )
}

export default App
