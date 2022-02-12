import React from "react"
import { Outlet } from "react-router-dom"

interface IIMprops {}

const IM: React.FunctionComponent<IIMprops> = (props) => {
  return (
    <div>
      <p> IM Page</p>
      <Outlet />
    </div>
  )
}

export default IM
