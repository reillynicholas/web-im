import { FC, forwardRef, useImperativeHandle, useRef, useState } from "react"
import { Alert, Snackbar } from "@mui/material"
import * as styles from "./styles"

export type ToastType = "success" | "warning" | "error" | "info" | "message"

export interface IToastConfig {
  type: ToastType
  message: string
  autoHideDuration?: number
}

export default forwardRef((_, ref) => {
  const [state, setstate] = useState<{ open: boolean }>({ open: false })

  const toastConfig = useRef<IToastConfig>({
    type: "success",
    message: "",
    autoHideDuration: 5000,
  })

  const open = ({ type, message, autoHideDuration = 5000 }: IToastConfig) => {
    toastConfig.current.type = type
    toastConfig.current.message = message.trim()
    toastConfig.current.autoHideDuration = autoHideDuration
    setstate({ open: true })
  }

  const close = () => {
    setstate({ open: false })
  }

  useImperativeHandle(ref, () => ({
    open,
    close,
  }))

  const AlertIcon: FC = () => {
    switch (toastConfig.current.type) {
      case "success":
        return (
          <i className="iconfont iconic_check_circle" style={styles.Icont}></i>
        )
      case "warning":
        return (
          <i className="iconfont iconmdi_alert-circle" style={styles.Icont}></i>
        )
      case "error":
        return <i className="iconfont iconattention" style={styles.Icont}></i>
      case "info":
        return <i className="iconfont iconic_info" style={styles.Icont}></i>
      case "message":
        return <></>
      default:
        return (
          <i className="iconfont iconic_check_circle" style={styles.Icont}></i>
        )
    }
  }

  return (
    <>
      <Snackbar
        style={styles.Snackbar}
        open={state.open}
        onClose={close}
        autoHideDuration={toastConfig.current.autoHideDuration}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
      >
        <Alert
          style={styles.Alert(toastConfig?.current?.type)}
          icon={AlertIcon({})}
        >
          {toastConfig?.current?.message}
        </Alert>
      </Snackbar>
    </>
  )
})
