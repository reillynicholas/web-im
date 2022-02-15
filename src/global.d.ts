declare module globalThis {
  var $loading: ILoading
  var $toast: IToast
}

declare type BackdropConfig =
  import("./component/loading/index").IBackdropConfig
interface ILoading {
  open: (params?: BackdropConfig) => void
  close: () => void
}

declare type IToastConfig = import("./component/toast/index").IToastConfig
interface IToast {
  open: (params: IToastConfig) => void
  colse: () => void
}
