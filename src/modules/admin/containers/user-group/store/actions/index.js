import { ACTIONS, ENDPOINTS } from "./../constants"
import { CALL_API, HTTP_METHODS } from "./../../../../../../constants"


export const clearStore = () =>
  ({
    type: ACTIONS.CLEAR_USER_GROUP
  })


export const fetchUserGroups = (params) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_USER_GROUPS_INIT,
        success: ACTIONS.FETCH_USER_GROUPS_SUCCEDED,
        fail: ACTIONS.FETCH_USER_GROUPS_FAILED
      },
      endpoint: ENDPOINTS.USER_GROUPS,
      method: HTTP_METHODS.GET,
      params,
      auth: true
    }
  })


export const createUserGroup = (payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.CREATE_USER_GROUP_INIT,
        success: ACTIONS.CREATE_USER_GROUP_SUCCEDED,
        fail: ACTIONS.CREATE_USER_GROUP_FAILED
      },
      endpoint: ENDPOINTS.USER_GROUPS,
      method: HTTP_METHODS.POST,
      auth: true
    }
  })


export const editUserGroup = ({ param }, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.EDIT_USER_GROUP_INIT,
        success: ACTIONS.EDIT_USER_GROUP_SUCCEDED,
        fail: ACTIONS.EDIT_USER_GROUP_FAILED
      },
      endpoint: ENDPOINTS.USER_GROUP.replace(":param", param),
      method: HTTP_METHODS.PATCH,
      auth: true
    }
  })


export const deleteUserGroup = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.DELETE_USER_GROUP_INIT,
        success: ACTIONS.DELETE_USER_GROUP_SUCCEDED,
        fail: ACTIONS.DELETE_USER_GROUP_FAILED
      },
      endpoint: ENDPOINTS.USER_GROUP.replace(":param", param),
      method: HTTP_METHODS.DELETE,
      auth: true
    }
  })


export const deleteUserGroups = (params) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.DELETE_USER_GROUP_INIT,
        success: ACTIONS.DELETE_USER_GROUP_SUCCEDED,
        fail: ACTIONS.DELETE_USER_GROUP_FAILED
      },
      endpoint: ENDPOINTS.USER_GROUPS,
      method: HTTP_METHODS.DELETE,
      params,
      auth: true
    }
  })


export const fetchUserGroup = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_USER_GROUP_INIT,
        success: ACTIONS.FETCH_USER_GROUP_SUCCEDED,
        fail: ACTIONS.FETCH_USER_GROUP_FAILED
      },
      endpoint: ENDPOINTS.USER_GROUP.replace(":param", param),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })
