import { ACTIONS, ENDPOINTS } from "../constants"
import { CALL_API, HTTP_METHODS } from "../../../../../../constants"


export const clearStore = () =>
({
  type: ACTIONS.CLEAR_CATEGORY
})


export const fetchCategorys = (params) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_CATEGORYS_INIT,
      success: ACTIONS.FETCH_CATEGORYS_SUCCEDED,
      fail: ACTIONS.FETCH_CATEGORYS_FAILED
    },
    endpoint: ENDPOINTS.CATEGORYS,
    method: HTTP_METHODS.GET,
    params,
    auth: true
  }
})


export const createCategory = (payload) =>
({
  type: CALL_API,
  payload,
  meta: {
    actions: {
      init: ACTIONS.CREATE_CATEGORY_INIT,
      success: ACTIONS.CREATE_CATEGORY_SUCCEDED,
      fail: ACTIONS.CREATE_CATEGORY_FAILED
    },
    endpoint: ENDPOINTS.CATEGORYS,
    method: HTTP_METHODS.POST,
    auth: true
  }
})


export const editCategory = ({ param }, payload) =>
({
  type: CALL_API,
  payload,
  meta: {
    actions: {
      init: ACTIONS.EDIT_CATEGORY_INIT,
      success: ACTIONS.EDIT_CATEGORY_SUCCEDED,
      fail: ACTIONS.EDIT_CATEGORY_FAILED
    },
    endpoint: ENDPOINTS.CATEGORY.replace(":param", param),
    method: HTTP_METHODS.PATCH,
    auth: true
  }
})


export const deactivateCategory = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.DEACTIVATE_CATEGORY_INIT,
      success: ACTIONS.DEACTIVATE_CATEGORY_SUCCEDED,
      fail: ACTIONS.DEACTIVATE_CATEGORY_FAILED
    },
    endpoint: ENDPOINTS.CATEGORY_DEACTIVATE.replace(":param", param),
    method: HTTP_METHODS.DELETE,
    auth: true
  }
})
export const activateCategory = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.ACTIVATE_CATEGORY_INIT,
      success: ACTIONS.ACTIVATE_CATEGORY_SUCCEDED,
      fail: ACTIONS.ACTIVATE_CATEGORY_FAILED
    },
    endpoint: ENDPOINTS.CATEGORY_ACTIVATE.replace(":param", param),
    method: HTTP_METHODS.DELETE,
    auth: true
  }
})

export const fetchCategory = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_CATEGORY_INIT,
      success: ACTIONS.FETCH_CATEGORY_SUCCEDED,
      fail: ACTIONS.FETCH_CATEGORY_FAILED
    },
    endpoint: ENDPOINTS.CATEGORY.replace(":param", param),
    method: HTTP_METHODS.GET,
    auth: true
  }
})
