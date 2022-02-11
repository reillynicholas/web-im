import React from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import routers from "./router/routers"

const App: React.FunctionComponent<{}> = (props) => {
  return (
    <div>
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
    </div>
  )
}

export default App
