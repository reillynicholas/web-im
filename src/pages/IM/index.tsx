import React from "react"
import { useNavigate } from "react-router-dom"
import { translate } from "../../language"
import * as styles from "./styles"
import { observer } from "mobx-react-lite"

interface IIMprops {}

const IM: React.FunctionComponent<IIMprops> = observer((props) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/littleY")
  }

  return (
    <div style={styles.Content} onClick={handleClick}>
      {translate("IM_Test")}
    </div>
  )
})

export default IM
