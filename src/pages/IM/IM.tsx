import React from "react"
import { Outlet } from "react-router-dom"
import * as styles from "./styles"
import { useLanguage } from "../../language/hooks"

interface IIMprops {}

const IM: React.FunctionComponent<IIMprops> = (props) => {
  const { translate, getDiffLanguageString } = useLanguage()

  return (
    <>
      <div style={styles.Content}>{translate("IM_Test")}</div>
      <Outlet />
    </>
  )
}

export default IM
