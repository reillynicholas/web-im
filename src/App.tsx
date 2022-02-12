import React from "react"
import { useRoutes } from "react-router-dom"
import { Global, css } from "@emotion/react"
import { GlobalStyle } from "./theme/resetCss"
import routers from "./router/routers"

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
    </>
  )
}

export default App
