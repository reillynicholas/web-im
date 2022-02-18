import { Outlet } from "react-router-dom"
import { useBaseInfo } from "../../hooks/useBaseInfo"
import Header from "../header"

export const Layout = () => {
  useBaseInfo()
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
