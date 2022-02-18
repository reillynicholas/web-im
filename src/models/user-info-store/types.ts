import { DeliveryType, IUserInfo } from "../../entity/type"

export const BaseUserInfo: IUserInfo = {
  userId: "",
  platformServiceFeeCredit: 0,
  email: "",
  displayName: "",
  merchId: "",
  defaultAddress: null,
  userConfig: {
    id: "",
    userId: "",
    mile: 0,
    languageCode: "en-US",
    orderParkingLotPickupFieldValues: [],
    deliveryType: DeliveryType.Both,
    email: "",
    isEmailNotification: false,
  },
  picture: "",
  allAddresses: [],
  phone: "",
  mobileOrEmailBinding: {
    isMandatory: false,
    smsOrEmailBound: false,
  },
}
