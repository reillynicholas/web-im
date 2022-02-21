import { FC, MutableRefObject, useCallback } from "react"
import { HeaderWrapper, Icon, Title } from "./styles"
import { useLocation, useNavigate } from "react-router-dom"
import { observer } from "mobx-react-lite"
import { useStores } from "../../models/root-store/root-store"

const Header: FC<{ enterPage: MutableRefObject<string> }> = observer(
  ({ enterPage }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const { shopStore } = useStores()

    const back = useCallback(() => {
      if (location.pathname === `/${enterPage.current}`) {
        console.log(`should emit an event`)
      } else {
        navigate(-1)
      }
    }, [location.pathname, enterPage, navigate])

    const renderTitle = useCallback(() => {
      if (location.pathname === "/IM") {
        return shopStore.merchant.name
      }
      if (location.pathname === "/littleY") {
        return "Yami"
      }
      return ""
    }, [location.pathname, shopStore.merchant.name])

    return (
      <div style={HeaderWrapper}>
        <i
          className="iconicon_previous iconfont"
          style={Icon}
          onClick={back}
        ></i>
        <p style={Title}>{renderTitle()}</p>
      </div>
    )
  }
)

export default Header
