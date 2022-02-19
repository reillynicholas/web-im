import { FC, MutableRefObject } from "react"
import { HeaderWrapper, Icon, title } from "./styles"
import { useLocation, useNavigate } from "react-router-dom"

const Header: FC<{ enterPage: MutableRefObject<string> }> = ({ enterPage }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const back = () => {
    if (location.pathname === `/${enterPage.current}`) {
      console.log(`should emit an event`)
    } else {
      navigate(-1)
    }
  }

  return (
    <div style={HeaderWrapper}>
      <i className="iconicon_previous iconfont" style={Icon} onClick={back}></i>
      <p style={title}>hello</p>
    </div>
  )
}

export default Header
