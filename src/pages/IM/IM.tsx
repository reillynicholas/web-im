import React from "react"
import { Outlet } from "react-router-dom"
import * as styles from "./styles"

interface IIMprops {}

const IM: React.FunctionComponent<IIMprops> = (props) => {
  return (
    <>
      <div style={styles.Content}>IM Page</div>
      <Outlet />
    </>
  )
}

export default IM
