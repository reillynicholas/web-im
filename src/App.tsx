import React from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Global, css } from "@emotion/react"
import { GlobalStyle } from "./theme/resetCss"
import routers from "./router/routers"

const App: React.FunctionComponent<{}> = () => {
  return (
    <>
      <Global
        styles={css`
          ${GlobalStyle("en-US")}
        `}
      />
      <BrowserRouter>
        <Routes>
          {routers.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
              />
            )
          })}
          <Route path="*" element={<Navigate to="/IM" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
