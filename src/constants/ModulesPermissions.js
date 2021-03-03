import { ACTIVATE, CREATE, UPDATE, DEACTIVATE, VIEW, DELETE, /*VIEW_UPDATE*/ } from "./Permissions"


export const USER = {
  module: "profile",
  permissions: {
    [VIEW]: "view_profile",
    [CREATE]: "add_profile",
    [UPDATE]: "change_profile",
    [ACTIVATE]: "activate_profile",
    [DEACTIVATE]: "delete_profile",
  },
}

export const USER_GROUP = {
  module: "group",
  permissions: {
    [VIEW]: "view_group",
    [CREATE]: "add_group",
    [UPDATE]: "change_group",
    [DELETE]: "delete_group"
  }
}

export const PRODUCT = {
  module: "product",
  permissions: {
    [VIEW]: "view_prodcut",
    [CREATE]: "add_product",
    [UPDATE]: "change_product",
    [ACTIVATE]: "activate_product",
    [DEACTIVATE]: "deactivate_product"
  }
}

export const ORDER = {
  module: "order",
  permissions: {
    [VIEW]: "view_order",
    [CREATE]: "add_order",
    [UPDATE]: "change_order",
    [ACTIVATE]: "activate_order",
    [DEACTIVATE]: "deactivate_order"
  }
}

export const CATEGORY = {
  module: "category",
  permissions: {
    [VIEW]: "view_category",
    [CREATE]: "add_category",
    [UPDATE]: "change_category",
    [ACTIVATE]: "activate_category",
    [DEACTIVATE]: "deactivate_category"
  }
}
