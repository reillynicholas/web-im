import { RouteObject } from "react-router-dom"
import IM from "../pages/IM"
import LittleY from "../pages/littleY"
import NotFound from "../pages/NotFound"
import { Layout } from "../component/layout"

const routers: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "IM",
        element: <IM />,
      },
      {
        path: "littleY",
        element: <LittleY />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]

export default routers
