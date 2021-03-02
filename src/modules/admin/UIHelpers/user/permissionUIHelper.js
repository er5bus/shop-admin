import _ from "lodash"

import { ACTIVATE, DEACTIVATE, VIEW, UPDATE, CREATE, MODULES_PERMISSIONS, DELETE, UNDELETE } from "./../../../../constants"
//import {isRLTLang} from "../../../i18n"

export const PERMISSIONS_LABELS = {
  [ACTIVATE]: "GENERAL.ACTIVATE",
  [DEACTIVATE]: "GENERAL.DEACTIVATE",
  [VIEW]: "GENERAL.VIEW",
  [UPDATE]: "GENERAL.UPDATE",
  [CREATE]: "GENERAL.CREATE",
  [DELETE]: "GENERAL.DELETE",
  [UNDELETE]: "GENERAL.UNDELETE"
}


export const MODULES_LABELS = {
  [MODULES_PERMISSIONS.USER.module]: "PERMISSIONS.USER",
  [MODULES_PERMISSIONS.USER_GROUP.module]: "PERMISSIONS.USER_GROUP",
  [MODULES_PERMISSIONS.PRODUCT.module]: "PERMISSIONS.CATEGORY",
  [MODULES_PERMISSIONS.CATEGORY.module]: "PERMISSIONS.CATEGORY",
  [MODULES_PERMISSIONS.ORDER.module]: "PERMISSIONS.ORDER",
}

export const permissionUIHelper = (callback, selectedPermissions = []) => {

  const permissions = []
  for(let modulePermissionKey in MODULES_PERMISSIONS){
    if (MODULES_PERMISSIONS[modulePermissionKey].module in MODULES_LABELS){
      let permission = {
        label: MODULES_LABELS[MODULES_PERMISSIONS[modulePermissionKey].module],
        options: []
      }
      for (let permissionKey in MODULES_PERMISSIONS[modulePermissionKey].permissions){
        if (
        permissionKey in PERMISSIONS_LABELS &&
          (_.isEmpty(selectedPermissions) || (!_.isEmpty(selectedPermissions)
          && _.includes(selectedPermissions, MODULES_PERMISSIONS[modulePermissionKey].permissions[permissionKey]) ))
        ){
          permission.options.push({
            label: PERMISSIONS_LABELS[permissionKey],
            value: MODULES_PERMISSIONS[modulePermissionKey].permissions[permissionKey]
          })
        }
      }
      if (!_.isEmpty(permission.options)){
        permissions.push(permission)
      }
    }
  }

  callback(permissions)
}


export default _.memoize(permissionUIHelper)
