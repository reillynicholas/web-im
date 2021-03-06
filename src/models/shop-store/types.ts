import {
  BannerType,
  CategoryMenuType,
  DeliveryType,
  IMerchantDto,
  MerchantParkingLotPickupSupportType,
  MerchantStatus,
  MerchPaymentType,
} from "../../entity/type"

export const BaseMerchant: IMerchantDto = {
  id: "",
  name: "",
  status: MerchantStatus.Opening,
  address: "",
  lat: 0,
  lng: 0,
  logo: "",
  banner: "",
  phone: "",
  mail: "",
  distance: 0,
  onlineTimes: {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  },
  description: "",
  labels: [],
  deliveryType: DeliveryType.Delivery,
  deliveryPolygons: [],
  autoAcceptOrder: false,
  autoMarkOrderToReady: false,
  willingToReceiveNotification: true,
  type: 1,
  currentPromotions: [],
  rating: 5,
  orderCancellationPenaltyPercentages: {
    Pending: 0,
    WaitingForAcceptance: 0,
    Processing: 0,
    Ready: 0,
    Delivering: 0,
    Completed: 0,
  },
  isFavour: false,
  isInBusinessHours: true,
  timeZoom: 8,
  imEnabled: true,
  shouldShowRating: true,
  paymentType: MerchPaymentType.Online,
  serialNumber: "",
  acceptPreorder: false,
  acceptTodayOrder: true,
  maxPreorderDays: 0,
  leastPreorderDays: 0,
  country: "",
  city: "",
  postalCode: "",
  mediaSetting: false,
  mediaUrl: "",
  bannerType: BannerType.Image,
  categoryMenuType: CategoryMenuType.TextAndImage,
  merchParkingLotPickupSupportType:
    MerchantParkingLotPickupSupportType.NotSupported,
  merchParkingLotPickupFields: [],
  availableCoupons: [],
  userCoupons: [],
  isAsapOnly: false,
  orderTipsTitle: "",
  merchDecideConfirmedTime: false,
  acceptSpecialInstruction: true,
  showTotalPriceOfOptionsInModifier: false,
  canUseUserPoints: false,
  supportedPaymentTypes: [],
  categoryAndFoodsCountInfo: {
    numberOfFoodsForCategories: {},
  },
  isPrintEnable: false,
  userOrderCountInThisMerch: 0,
}
