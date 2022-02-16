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
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "*",
    element: <IM />,
  },
]

export default routers
