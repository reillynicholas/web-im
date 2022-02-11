import IRoute from "./types"
import IM from "../pages/IM/IM"

const routers: IRoute[] = [
  {
    path: "/IM",
    name: "IM",
    exact: true,
    component: IM,
  },
]

export default routers
