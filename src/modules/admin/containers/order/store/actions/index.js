import { ACTIONS, ENDPOINTS } from "../constants"
import { CALL_API, HTTP_METHODS } from "../../../../../../constants"


export const clearStore = () =>
({
  type: ACTIONS.CLEAR_ORDER
})


export const fetchOrders = (params) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_ORDERS_INIT,
      success: ACTIONS.FETCH_ORDERS_SUCCEDED,
      fail: ACTIONS.FETCH_ORDERS_FAILED
    },
    endpoint: ENDPOINTS.ORDERS,
    method: HTTP_METHODS.GET,
    params,
    auth: true
  }
})


export const createOrder = (payload) =>
({
  type: CALL_API,
  payload,
  meta: {
    actions: {
      init: ACTIONS.CREATE_ORDER_INIT,
      success: ACTIONS.CREATE_ORDER_SUCCEDED,
      fail: ACTIONS.CREATE_ORDER_FAILED
    },
    endpoint: ENDPOINTS.ORDERS,
    method: HTTP_METHODS.POST,
    auth: true
  }
})


export const editOrder = ({ param }, payload) =>
({
  type: CALL_API,
  payload,
  meta: {
    actions: {
      init: ACTIONS.EDIT_ORDER_INIT,
      success: ACTIONS.EDIT_ORDER_SUCCEDED,
      fail: ACTIONS.EDIT_ORDER_FAILED
    },
    endpoint: ENDPOINTS.ORDER.replace(":param", param),
    method: HTTP_METHODS.PATCH,
    auth: true
  }
})


export const deactivateOrder = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.DEACTIVATE_ORDER_INIT,
      success: ACTIONS.DEACTIVATE_ORDER_SUCCEDED,
      fail: ACTIONS.DEACTIVATE_ORDER_FAILED
    },
    endpoint: ENDPOINTS.ORDER_DEACTIVATE.replace(":param", param),
    method: HTTP_METHODS.DELETE,
    auth: true
  }
})
export const activateOrder = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.ACTIVATE_ORDER_INIT,
      success: ACTIONS.ACTIVATE_ORDER_SUCCEDED,
      fail: ACTIONS.ACTIVATE_ORDER_FAILED
    },
    endpoint: ENDPOINTS.ORDER_ACTIVATE.replace(":param", param),
    method: HTTP_METHODS.DELETE,
    auth: true
  }
})

export const fetchOrder = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_ORDER_INIT,
      success: ACTIONS.FETCH_ORDER_SUCCEDED,
      fail: ACTIONS.FETCH_ORDER_FAILED
    },
    endpoint: ENDPOINTS.ORDER.replace(":param", param),
    method: HTTP_METHODS.GET,
    auth: true
  }
})
