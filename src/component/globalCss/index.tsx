import { Global, css } from "@emotion/react"
import { observer } from "mobx-react-lite"
import { useMemo } from "react"
import { useStores } from "../../models"
import { GlobalStyle } from "../../theme/resetCss"

const GlobalCssComp = observer(() => {
  const { userInfoStore } = useStores()
  const globalStyle = useMemo(() => {
    return GlobalStyle(userInfoStore.languageCode)
  }, [userInfoStore.languageCode])
  return (
    <Global
      styles={css`
        ${globalStyle}
      `}
    />
  )
})

export default GlobalCssComp
