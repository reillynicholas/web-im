import React from "react"
import { useRequest } from "./hooks"

const About: React.FunctionComponent<{}> = (props) => {
  const { merchant } = useRequest()
  return <div>about</div>
}

export default About
