import React from "react"
import * as styles from "./styles"
import { useLanguage } from "../../language/hooks"

interface IIMprops {}

const IM: React.FunctionComponent<IIMprops> = (props) => {
  const { translate } = useLanguage()

  return <div style={styles.Content}>{translate("IM_Test")}</div>
}

export default IM
