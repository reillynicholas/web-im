import { Style } from "../../theme/type"
import { rem } from "../../theme/rem"
import { ToastType } from "."

export const Snackbar: Style = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
}

export const Alert = (type: ToastType): Style => {
  let backgroundColor = "#4caf50"
  switch (type) {
    case "success":
      backgroundColor = "#4caf50"
      break
    case "warning":
      backgroundColor = "#fdd835"
      break
    case "error":
      backgroundColor = "#f44336"
      break
    case "info":
      backgroundColor = "#2196f3"
      break
    case "message":
      backgroundColor = "rgba(0,0,0,.87)"
  }
  return {
    display: "flex",
    alignItems: "center",
    width: "100%",
    fontSize: rem(14),
    fontWeight: 300,
    backgroundColor,
    color: "#fff",
    borderRadius: 0,
  }
}

export const Icont: Style = {
  fontSize: rem(18),
  color: "#fff",
}
