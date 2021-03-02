import CategoryActivateDialog from "./../components/dialog/CategoryActivateDialog"
import CategoryDeactivateDialog from "./../components/dialog/CategoryDeactivateDialog"

import {MODULES_PERMISSIONS, DEACTIVATE, ACTIVATE} from "../../../../../constants"


const {CATEGORY} = MODULES_PERMISSIONS


export const categoryActivate = {
  path: "/activate/:param",
  component: CategoryActivateDialog,
  can: CATEGORY.permissions[ACTIVATE]
}

export const categoryDeactivate = {
  path: "/deactivate/:param",
  component: CategoryDeactivateDialog,
  can: CATEGORY.permissions[DEACTIVATE]
}
