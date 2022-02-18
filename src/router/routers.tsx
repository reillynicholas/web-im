import { RouteObject } from "react-router-dom"
import IM from "../pages/IM/IM"
import About from "../pages/About/about"
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
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "*",
    element: <Layout />,
  },
]

export default routers
