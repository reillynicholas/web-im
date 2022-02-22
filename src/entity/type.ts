export type LanguageCode = "en-US" | "zh-TW" | "zh-CN"

export enum MerchantStatus {
  Closed,
  Opening,
}

export interface IMerchantOnlineTimeItem {
  close: string
  closeTime: string
  open: string
  openTime: string
  preparation_minutes: number
}

export enum DeliveryType {
  Pickup,
  Delivery,
  Both,
}

export enum MerchPaymentType {
  Online,
  Offline,
  Both,
}

export enum MerchantType {
  Restaurant,
  Supermarket,
}

export enum BannerType {
  Image,
  Video,
}

export interface IMerchantOnlineTimes {
  monday: IMerchantOnlineTimeItem[]
  tuesday: IMerchantOnlineTimeItem[]
  wednesday: IMerchantOnlineTimeItem[]
  thursday: IMerchantOnlineTimeItem[]
  friday: IMerchantOnlineTimeItem[]
  saturday: IMerchantOnlineTimeItem[]
  sunday: IMerchantOnlineTimeItem[]
}

export enum PromotionItemType {
  DiscountForGeneric, //全场折扣
  DiscountBaseOnNumOfOrders, //首单折扣
}

export interface IPromotionItem {
  name: string
  startDate: string
  endDate: string
  type: PromotionItemType
  discount: number
  canGetDiscountUpToOrderCount: number
}

export enum CategoryMenuType {
  TextOnly,
  TextAndImage,
  ImageOnly,
}

export enum MerchantParkingLotPickupSupportType {
  NotSupported,
  ParkingLotOnly,
  OptionalParkingLot,
}

export interface IMerchParkingLotPickupFieldDto {
  id: string
  name: string
  mandatory: boolean
  merchId: string
  value?: string
}

export enum OrderPaymenMethod {
  payOnline = 2,
  payInStore = 1,
}

export enum ProtonPaymentMethod {
  CreditCard,
  DebitCard,
  CustomerProfile,
  UserPoint,
  ApplePay,
}

export interface ISupportedPaymentType {
  title: string
  paymentType: OrderPaymenMethod
  isDefault: boolean
  protonPaymentMethod: ProtonPaymentMethod
}
export interface IAddress {
  [x: string]: any
  address1: string
  addressTypes: string[]
  administrativeAreaLevel1: string
  apartmentNumber: string
  contact: string
  country: string
  deliveryNotes: string
  gateCode: string
  houseNumber: string
  id: string
  isApartmentNumberRequired: boolean
  lastUsedDate: string
  lat: number
  lng: number
  locality: string
  phone: string
  postalCode: string
  route: string
  tag: string
  userId: string
  placeId?: string
  isDefault?: boolean
  canUseInThisMerch?: boolean
}

export interface IOrderParkingLotPickupFieldValue {
  fieldId: string
  name: string
  mandatory: boolean
  value: string
}

export interface IUserConfig {
  id: string
  userId: string
  mile: number
  languageCode: LanguageCode
  orderParkingLotPickupFieldValues: IOrderParkingLotPickupFieldValue[]
  deliveryType: number
  email: string
  isEmailNotification: boolean | null
}

export interface IUserInfo {
  defaultAddress: IAddress | null
  userId: string
  platformServiceFeeCredit: number
  email: string
  displayName: string
  merchId: string | null
  userConfig: IUserConfig
  picture: string
  allAddresses: IAddress[]
  phone: string
  mobileOrEmailBinding: {
    isMandatory: boolean
    smsOrEmailBound: boolean
  }
}

export interface IMerchantDto {
  id: string
  name: string
  status: MerchantStatus
  address: string
  lat: number
  lng: number
  logo: string
  banner: string
  phone: string
  mail: string
  distance: number
  onlineTimes: IMerchantOnlineTimes
  description: string
  labels: string[]
  deliveryType: DeliveryType
  deliveryPolygons: []
  autoAcceptOrder: boolean
  autoMarkOrderToReady: boolean
  willingToReceiveNotification: boolean
  type: MerchantType
  currentPromotions: IPromotionItem[]
  rating: number
  orderCancellationPenaltyPercentages: {
    Pending: number
    WaitingForAcceptance: number
    Processing: number
    Ready: number
    Delivering: number
    Completed: number
  }
  isFavour: boolean
  isInBusinessHours: boolean
  timeZoom: number
  imEnabled: boolean
  shouldShowRating: boolean
  paymentType: MerchPaymentType
  serialNumber: string
  acceptPreorder: boolean
  acceptTodayOrder: boolean
  maxPreorderDays: number
  leastPreorderDays: number
  country: string
  city: string
  postalCode: string
  mediaSetting: boolean
  mediaUrl: string
  bannerType: BannerType
  categoryMenuType: CategoryMenuType
  merchParkingLotPickupSupportType: MerchantParkingLotPickupSupportType
  merchParkingLotPickupFields: IMerchParkingLotPickupFieldDto[]
  availableCoupons: []
  userCoupons: []
  isAsapOnly: boolean
  orderTipsTitle: string
  merchDecideConfirmedTime: boolean
  acceptSpecialInstruction: boolean
  showTotalPriceOfOptionsInModifier: boolean
  supportedPaymentTypes: ISupportedPaymentType[]
  categoryAndFoodsCountInfo: {
    numberOfFoodsForCategories: { [key: string]: number }
  }
  isPrintEnable: boolean
  canUseUserPoints?: boolean
  orderTipsSetting?: string
  userOrderCountInThisMerch: number
  isOrderAdditionEnabled?: boolean
  bannerVideoUrl?: string
  isMergePaymentsEnable?: boolean
  provideUtensilsEnable?: boolean
  isProvideUtensils?: boolean
}

export interface IApiRespond<T> {
  status: number
  data: T
}

export enum EventType {
  Back,
}

export interface IEventData<T> {
  type: EventType
  data: T
}
