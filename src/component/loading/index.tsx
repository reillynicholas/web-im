import {
  forwardRef,
  useImperativeHandle,
  ForwardRefExoticComponent as Component,
  RefAttributes,
  useRef,
} from "react"
import { useSafeState } from "ahooks"
import { Backdrop, CircularProgress, Paper, Theme } from "@mui/material"

interface IBackdropProps {}

export interface IBackdropConfig {
  onClick?: () => void
  invisible?: boolean
  logoColor?:
    | "inherit"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | undefined
}

const Loading: Component<IBackdropProps & RefAttributes<any>> = forwardRef<
  {},
  IBackdropProps
>(({}, ref) => {
  const conf = useRef<IBackdropConfig>({
    invisible: true,
    logoColor: "primary",
  })

  const [state, setState] = useSafeState({
    visable: false,
  })

  const open = (options?: IBackdropConfig) => {
    if (options) {
      conf.current.invisible = Boolean(conf.current.invisible)
      conf.current.onClick = conf?.current?.onClick
    }
    setState({ visable: true })
  }

  const close = () => {
    setState({ visable: false })
  }

  const onClickBackdrop = () => {
    conf?.current?.onClick?.()
  }

  useImperativeHandle(ref, () => ({
    open,
    close,
  }))

  return (
    <Paper component="div">
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme: Theme) => theme.zIndex.drawer + 1,
        }}
        open={state.visable}
        onClick={onClickBackdrop}
        invisible={conf.current.invisible}
      >
        <CircularProgress color="primary" />
      </Backdrop>
    </Paper>
  )
})

export default Loading
