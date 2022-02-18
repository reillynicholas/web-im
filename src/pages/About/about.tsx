import React from "react"
import { useNavigate } from "react-router-dom"

const About: React.FunctionComponent<{}> = (props) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/IM")
  }

  return <div onClick={handleClick}>about</div>
}

export default About
