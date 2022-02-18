import { RouteObject } from "react-router-dom"
import IM from "../pages/IM/IM"
import About from "../pages/About/about"
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
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]

export default routers
