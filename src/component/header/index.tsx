import { FC, MutableRefObject, useCallback, useEffect, useState } from "react"
import { HeaderWrapper, Icon, Title } from "./styles"
import { useLocation, useNavigate } from "react-router-dom"
import { observer } from "mobx-react-lite"
import { useStores } from "../../models/root-store/root-store"
import { EventType, IEventData } from "../../entity/type"

const Header: FC<{
  enterPage: MutableRefObject<string>
}> = observer(({ enterPage }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { shopStore } = useStores()
  const [title, setTitle] = useState<string>("")

  useEffect(() => {
    if (location.pathname === "/IM") setTitle(shopStore?.merchant?.name)
    if (location.pathname === "/littleY") setTitle("Yami")
  }, [location.pathname, shopStore?.merchant?.name])

  const back = useCallback(() => {
    // 如果当前页面是一开始进来的页面，向小明web发送一个事件
    if (
      location.pathname.toLocaleUpperCase() ===
      `/${enterPage.current}`.toUpperCase()
    ) {
      const data: IEventData<null> = {
        type: EventType.Back,
        data: null,
      }
      window?.top?.postMessage(data, "http://localhost:8080")
      // window?.top?.postMessage(data, "https://testshopping.yamimeal.com")
    } else {
      navigate(-1)
    }
  }, [location.pathname, enterPage, navigate])

  return (
    <div style={HeaderWrapper}>
      <i className="iconicon_previous iconfont" style={Icon} onClick={back}></i>
      <p style={Title}>{title}</p>
    </div>
  )
})

export default Header
