import { ACTIONS, ENDPOINTS } from "../constants"
import { CALL_API, HTTP_METHODS } from "../../../../../../constants"


export const clearStore = () =>
({
  type: ACTIONS.CLEAR_PRODUCT
})


export const fetchProducts = (params) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_PRODUCTS_INIT,
      success: ACTIONS.FETCH_PRODUCTS_SUCCEDED,
      fail: ACTIONS.FETCH_PRODUCTS_FAILED
    },
    endpoint: ENDPOINTS.PRODUCTS,
    method: HTTP_METHODS.GET,
    params,
    auth: true
  }
})


export const createProduct = (payload) =>
({
  type: CALL_API,
  payload,
  meta: {
    actions: {
      init: ACTIONS.CREATE_PRODUCT_INIT,
      success: ACTIONS.CREATE_PRODUCT_SUCCEDED,
      fail: ACTIONS.CREATE_PRODUCT_FAILED
    },
    isFormData: true,
    endpoint: ENDPOINTS.PRODUCTS,
    method: HTTP_METHODS.POST,
    auth: true
  }
})


export const editProduct = ({ param }, payload) =>
({
  type: CALL_API,
  payload,
  meta: {
    actions: {
      init: ACTIONS.EDIT_PRODUCT_INIT,
      success: ACTIONS.EDIT_PRODUCT_SUCCEDED,
      fail: ACTIONS.EDIT_PRODUCT_FAILED
    },
    endpoint: ENDPOINTS.PRODUCT.replace(":param", param),
    isFormData: true,
    method: HTTP_METHODS.PATCH,
    auth: true
  }
})


export const deactivateProduct = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.DEACTIVATE_PRODUCT_INIT,
      success: ACTIONS.DEACTIVATE_PRODUCT_SUCCEDED,
      fail: ACTIONS.DEACTIVATE_PRODUCT_FAILED
    },
    endpoint: ENDPOINTS.PRODUCT_DEACTIVATE.replace(":param", param),
    method: HTTP_METHODS.DELETE,
    auth: true
  }
})
export const activateProduct = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.ACTIVATE_PRODUCT_INIT,
      success: ACTIONS.ACTIVATE_PRODUCT_SUCCEDED,
      fail: ACTIONS.ACTIVATE_PRODUCT_FAILED
    },
    endpoint: ENDPOINTS.PRODUCT_ACTIVATE.replace(":param", param),
    method: HTTP_METHODS.DELETE,
    auth: true
  }
})

export const fetchProduct = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_PRODUCT_INIT,
      success: ACTIONS.FETCH_PRODUCT_SUCCEDED,
      fail: ACTIONS.FETCH_PRODUCT_FAILED
    },
    endpoint: ENDPOINTS.PRODUCT.replace(":param", param),
    method: HTTP_METHODS.GET,
    auth: true
  }
})
