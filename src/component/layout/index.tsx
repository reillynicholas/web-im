import { Outlet } from "react-router-dom"
import { useBaseInfo } from "../../hooks/useBaseInfo"

export const Layout = () => {
  useBaseInfo()
  return (
    <div>
      <Outlet />
    </div>
  )
}
