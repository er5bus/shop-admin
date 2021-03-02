import ProductActivateDialog from "./../components/dialog/ProductActivateDialog"
import ProductDeactivateDialog from "./../components/dialog/ProductDeactivateDialog"

import {MODULES_PERMISSIONS, DEACTIVATE, ACTIVATE} from "../../../../../constants"


const {PRODUCT} = MODULES_PERMISSIONS


export const productActivate = {
  path: "/activate/:param",
  component: ProductActivateDialog,
  can: PRODUCT.permissions[ACTIVATE]
}

export const productDeactivate = {
  path: "/deactivate/:param",
  component: ProductDeactivateDialog,
  can: PRODUCT.permissions[DEACTIVATE]
}
