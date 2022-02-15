import React from "react"
import { useRequest } from "./hooks"

const About: React.FunctionComponent<{}> = (props) => {
  let merchId = "b20a1c69-dcc7-463b-b03c-9324efe737d9"
  const { merchant } = useRequest(merchId)
  return <div>about</div>
}

export default About
