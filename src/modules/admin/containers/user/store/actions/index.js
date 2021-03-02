import { ACTIONS, ENDPOINTS } from "./../constants"
import { CALL_API, HTTP_METHODS } from "./../../../../../../constants"


export const clearStore = () =>
  ({
    type: ACTIONS.CLEAR_USER
  })


export const fetchUsers = (params) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_USERS_INIT,
        success: ACTIONS.FETCH_USERS_SUCCEDED,
        fail: ACTIONS.FETCH_USERS_FAILED
      },
      endpoint: ENDPOINTS.USERS,
      method: HTTP_METHODS.GET,
      params,
      auth: true
    }
  })


export const createUser = (payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.CREATE_USER_INIT,
        success: ACTIONS.CREATE_USER_SUCCEDED,
        fail: ACTIONS.CREATE_USER_FAILED
      },
      endpoint: ENDPOINTS.USERS,
      method: HTTP_METHODS.POST,
      auth: true
    }
  })


export const editUser = ({ param }, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.EDIT_USER_INIT,
        success: ACTIONS.EDIT_USER_SUCCEDED,
        fail: ACTIONS.EDIT_USER_FAILED
      },
      endpoint: ENDPOINTS.USER.replace(":param", param),
      method: HTTP_METHODS.PATCH,
      auth: true
    }
  })


export const disableUser = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.DISABLE_USER_INIT,
        success: ACTIONS.DISABLE_USER_SUCCEDED,
        fail: ACTIONS.DISABLE_USER_FAILED
      },
      endpoint: ENDPOINTS.USER_DEACTIVATE.replace(":param", param),
      method: HTTP_METHODS.DELETE,
      auth: true
    }
  })


export const enableUser = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.ENABLE_USER_INIT,
        success: ACTIONS.ENABLE_USER_SUCCEDED,
        fail: ACTIONS.ENABLE_USER_FAILED
      },
      endpoint: ENDPOINTS.USER_ACTIVATE.replace(":param", param),
      method: HTTP_METHODS.DELETE,
      auth: true
    }
  })


export const disableUsers = (params) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.DISABLE_USERS_INIT,
        success: ACTIONS.DISABLE_USERS_SUCCEDED,
        fail: ACTIONS.DISABLE_USERS_FAILED
      },
      endpoint: ENDPOINTS.USERS_DEACTIVATE,
      method: HTTP_METHODS.DELETE,
      params,
      auth: true
    }
  })


export const enableUsers = (params) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.ENABLE_USERS_INIT,
        success: ACTIONS.ENABLE_USERS_SUCCEDED,
        fail: ACTIONS.ENABLE_USERS_FAILED
      },
      endpoint: ENDPOINTS.USERS_ACTIVATE,
      method: HTTP_METHODS.DELETE,
      params,
      auth: true
    }
  })


export const regenerateUserPassword = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.REGENRATE_USER_PASSWORD_INIT,
        success: ACTIONS.REGENRATE_USER_PASSWORD_SUCCEDED,
        fail: ACTIONS.REGENRATE_USER_PASSWORD_FAILED
      },
      endpoint: ENDPOINTS.REGENRATE_PASSWORD.replace(":param", param),
      method: HTTP_METHODS.POST,
      auth: true
    }
  })


export const fetchUser = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_USER_INIT,
        success: ACTIONS.FETCH_USER_SUCCEDED,
        fail: ACTIONS.FETCH_USER_FAILED
      },
      endpoint: ENDPOINTS.USER.replace(":param", param),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })


export const undeleteUser = ({ param }) => ({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.SOFT_DELETE_USER_INIT,
      success: ACTIONS.SOFT_DELETE_USER_SUCCEDED,
      fail: ACTIONS.SOFT_DELETE_USER_FAILED,
    },
    endpoint: ENDPOINTS.USER_UNDELETE.replace(":param", param),
    method: HTTP_METHODS.DELETE,
    auth: true,
  },
})

export const deleteUser = ({ param }) => ({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.DELETE_USER_INIT,
      success: ACTIONS.DELETE_USER_SUCCEDED,
      fail: ACTIONS.DELETE_USER_FAILED,
    },
    endpoint: ENDPOINTS.USER_DELETE.replace(":param", param),
    method: HTTP_METHODS.DELETE,
    auth: true,
  },
})


export const undeleteUsers = (params) => ({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.SOFT_DELETE_USERS_INIT,
      success: ACTIONS.SOFT_DELETE_USERS_SUCCEDED,
      fail: ACTIONS.SOFT_DELETE_USERS_FAILED,
    },
    endpoint: ENDPOINTS.USERS_UNDELETE,
    method: HTTP_METHODS.DELETE,
    params,
    auth: true,
  },
})

export const deleteUsers = (params) => ({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.DELETE_USERS_INIT,
      success: ACTIONS.DELETE_USERS_SUCCEDED,
      fail: ACTIONS.DELETE_USERS_FAILED,
    },
    endpoint: ENDPOINTS.USERS_DELETE,
    method: HTTP_METHODS.DELETE,
    params,
    auth: true,
  },
})
