import OrderActivateDialog from "./../components/dialog/OrderActivateDialog"
import OrderStatusDialog from "./../components/dialog/OrderStatusDialog"
import OrderDeactivateDialog from "./../components/dialog/OrderDeactivateDialog"

import {MODULES_PERMISSIONS, DEACTIVATE, UPDATE, ACTIVATE} from "../../../../../constants"


const {ORDER} = MODULES_PERMISSIONS


export const orderActivate = {
  path: "/activate/:param",
  component: OrderActivateDialog,
  can: ORDER.permissions[ACTIVATE]
}

export const orderStatusUpdate = {
  path: "/update/status/:param",
  component: OrderStatusDialog,
  can: ORDER.permissions[UPDATE]
}

export const orderDeactivate = {
  path: "/deactivate/:param",
  component: OrderDeactivateDialog,
  can: ORDER.permissions[DEACTIVATE]
}
