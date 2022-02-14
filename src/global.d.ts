declare module globalThis {
  var $loading: ILoading
}

declare type BackdropConfig =
  import("./component/loading/index").IBackdropConfig
interface ILoading {
  open: (params?: BackdropConfig) => void
  close: () => void
}
