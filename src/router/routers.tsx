import { RouteObject } from "react-router-dom"

import IM from "../pages/IM/IM"
import About from "../pages/About/about"

const routers: RouteObject[] = [
  {
    path: "/im",
    element: <IM />,
    children: [
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "*",
    element: <IM />,
  },
]

export default routers
