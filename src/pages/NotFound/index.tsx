import backgroundImg from "../../assets/images/pageNotFoundBg.png"

const NotFound = function () {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${backgroundImg})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  )
}

export default NotFound
