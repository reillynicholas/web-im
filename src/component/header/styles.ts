import { Style } from "../../theme/type"
import { rem } from "../../theme/rem"
import { Colors } from "../../theme/base"

export const HeaderWrapper: Style = {
  display: "flex",
  alignItems: "center",
  padding: rem(10),
  color: Colors.ColorTextPrimary,
  fontSize: rem(20),
  fontWeight: 600,
  borderBottom: `${rem(1)} solid rgba(0, 0, 0, 0.06)`,
}

export const Icon: Style = {
  fontSize: rem(20),
}

export const title: Style = {
  flex: 1,
  textAlign: "center",
}
