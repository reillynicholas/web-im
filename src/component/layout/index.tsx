import { Outlet } from "react-router-dom"
import { useBaseInfo } from "../../hooks/useBaseInfo"
import Header from "../header"

export const Layout = () => {
  const { enterPage } = useBaseInfo()

  return (
    <div>
      <Header enterPage={enterPage} />
      <Outlet />
    </div>
  )
}
