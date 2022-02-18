import React from "react"
import { useNavigate } from "react-router-dom"
import { translate } from "../../language/nidex"
import * as styles from "./styles"

interface IIMprops {}

const IM: React.FunctionComponent<IIMprops> = (props) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/about")
  }

  return (
    <div style={styles.Content} onClick={handleClick}>
      {translate("IM_Test")}
    </div>
  )
}

export default IM
