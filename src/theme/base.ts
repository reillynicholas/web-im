const BaseColorWhite = "#FFFFFF"
const BaseColorBlack = "#000000"

export const Colors = {
  /**
   * Brand Color
   * 主题色 - 品牌红
   * light - 80%
   * lighter - 90%
   */
  ColorPrimary: "#CE2664",
  ColorPrimaryLight: "#F5D4E0",
  ColorPrimaryLighter: "#F5D4E0",

  /**
   * Functional Color
   * 功能颜色
   */
  /**
   * 成功颜色
   * light - 80%
   * lighter - 90%
   */
  ColorSuccess: "#62E0C3",
  ColorSuccessLight: "#E0F9F3",
  ColorSuccessLighter: "#EFFCF9",
  /**
   * 警告颜色
   * light - 80%
   * lighter - 90%
   */
  ColorWarning: "#F8C550",
  ColorWarningLight: "#FEF0CC",
  ColorWarningLighter: "#FEF8E6",
  /**
   * 危险颜色
   * light - 80%
   * lighter - 90%
   */
  ColorDanger: "#ED4014",
  ColorDangerLight: "#F5D4E0",
  ColorDangerLighter: "#FAE9F0",
  /**
   * 信息颜色
   * light - 80%
   * lighter - 90%
   */
  ColorInfo: "#909399",
  ColorInfoLight: "#E9E9EB",
  ColorInfoLighter: "#F4F4F5",
  /**
   * 按钮禁止颜色
   */
  ColorButtonDisabale: "#8E8E93",

  /**
   * Font Color
   * 字体颜色
   */
  /**
   * 主要文字颜色
   */
  ColorTextPrimary: "#303133",
  /**
   * 常规文字颜色
   */
  ColorTextRegular: "#606266",
  /**
   * 次要文字颜色
   */
  ColorTextSecondary: "#909399",
  /**
   * 占位文字颜色
   */
  ColorTextPlaceholder: "#C0C4CC",
  /**
   * 禁用文字颜色
   */
  ColorTextDisabledBase: "#c0c4cc",
  /**
   * 白色文字颜色
   */
  ColorTextWhite: BaseColorWhite,
  /**
   * 小Y红   */
  ColorLittleY: "#870B38",

  /**
   * Border Color
   * 边框颜色
   */
  /**
   * 一级边框颜色
   */
  BorderColorBase: "#D9D9D9",
  /**
   * 二级边框颜色
   */
  BorderColorLight: "#E4E7ED",
  /**
   * 三级边框颜色
   */
  BorderColorLighter: "#EBEEF5",
  /**
   * 四级边框颜色
   */
  BorderColorExtralight: "#F2F6FC",

  BorderBottomColor: "#E8E8E8",

  /**
   * Background Color
   * 背景颜色
   */
  /**
   * 基础白色
   */
  ColorWhite: BaseColorWhite,
  /**
   * 基础黑色
   */
  ColorBlack: BaseColorBlack,
  /**
   * 基础背景色
   */
  BackgroundColorBase: "#F5F7FA",
  /**
   * 弹窗背景
   * #C0C4CC 60%
   */
  BackgroundColorPopup: "rgba0, 0, 0, 0.5",
  /**
   * 透明背景
   */
  BackgroundColorTransparent: "rgba0, 0, 0, 0",
  /**
   * 禁用背景色
   */
  BackgroundColorDisabled: "#C0C4CC",
  /**
   * 商户店铺关店遮罩颜色
   */
  BackgroundColorMerchantClose: "rgba37, 38, 45, 0.6",
  /**
   * 商户店铺关店可预购遮罩颜色
   */
  BackgroundColorMerchantCloseAcceptPreorder: "rgba241, 233, 233, 0.4",
  /**
   * 淡黄色提示bar背景色
   */
  BackgroundColorTipsColor: "#FEF8E6",

  /**
   * 淡红色提示bar背景色
   */
  BackgroundColorOrderPayTipsColor: "#FFE9E9",
  /**
   * 浅灰色IM时间提示背景色
   */
  BackgroundColorIMTImeTipsColor: "#E5E5E5",
  /**
   * 白色背景遮罩
   */
  BackgroundColorWhiteMask: "rgba255, 255, 255, 0.5",
}

export const Typography = {
  /**
   * Font Size
   * 字体大小
   */
  /**
   * 主标题文字大小 20
   */
  FontSizeExtralarge: 20,
  /**
   * 标题文字大小 18
   */
  FontSizeLarge: 18,
  /**
   * 小标题文字大小 16
   */
  FontSizeMedium: 16,
  /**
   * 正文文字大小 14
   */
  FontSizeBase: 14,
  /**
   * 正文（小）文字大小 13
   */

  FontSizeSmall: 13,
  /**
   * 辅助文字大小 12
   */
  FontSizeExtraSmall: 12,

  /**
   * 辅助文字大小 10
   */
  FontSizeExtraSmaller: 10,
  /**
   * （10）
   */
  FontSizeSmallMuch: 10,

  /**
   * 引導頁標題
   */
  FontSizeForGudieTitle: 40,

  /**
   * Font Weight
   * 字体字重
   */

  /**
   *
   * 主要标题粗细
   */
  FontWeightTitle: "600",
  /**
   *
   * 主要文字粗细
   */
  FontWeightPrimary: "500",
  /**
   * 次要文字粗细
   */
  FontWeightSecondary: "100",

  /**
   * Line Height
   * 字体高度
   */
  /**
   * 主要文字行高
   */
  FontLineHeightPrimary: 24,
  /**
   * 次要文字行高
   */
  FontLineHeightSecondary: 16,

  FontLineHeightLitterTitle: 19,
}

export const Border = {
  /**
   * Radius
   * 圆角
   */
  BorderRadiusForSearch: 20,
  /**
   * 大圆角
   */
  BorderRadiusLarge: 8,
  /**
   * 普通圆角
   */
  BorderRadiusBase: 4,
  /**
   * 小圆角
   */
  BorderRadiusSmall: 2,
  /**
   * 无圆角
   */
  BorderRadiusZero: 0,

  /**
   * Width
   * 边框宽度
   */
  BorderWidthBase: 1,
}

export const ZIndex = {
  /**
   * z-index
   * 堆叠顺序
   */
  IndexNormal: 1,
  IndexTop: 1000,
  IndexPoper: 2000,
}

export const base = {
  ...Colors,
  ...Typography,
  ...Border,
  ...ZIndex,
}
