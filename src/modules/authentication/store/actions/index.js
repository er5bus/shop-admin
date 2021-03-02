import { ACTIONS, ENDPOINTS } from "./../constants"
import { CALL_API, HTTP_METHODS } from "./../../../../constants"

export const clearError = () => 
  ({
    type: ACTIONS.CLEAR_ERROR
  })


export const login = (payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.LOGIN_INIT,
        success: ACTIONS.LOGIN_SUCCEDED,
        fail: ACTIONS.LOGIN_FAILED
      },
      endpoint: ENDPOINTS.LOGIN,
      method: HTTP_METHODS.POST
    }
  })


export const forgotPassword = (payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.FORGOT_PASSWORD_INIT,
        success: ACTIONS.FORGOT_PASSWORD_SUCCEDED,
        fail: ACTIONS.FORGOT_PASSWORD_FAILED
      },
      endpoint: ENDPOINTS.FORGOT_PASSWORD,
      method: HTTP_METHODS.POST
    }
  })


export const fetchToken = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_TOKEN_INIT,
        success: ACTIONS.FETCH_TOKEN_SUCCEDED,
        fail: ACTIONS.FETCH_TOKEN_FAILED
      },
      endpoint: ENDPOINTS.FETCH_TOKEN.replace(":param", param),
      method: HTTP_METHODS.GET
    }
  })


export const resetPassword = (payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.RESET_PASSWORD_INIT,
        success: ACTIONS.RESET_PASSWORD_SUCCEDED,
        fail: ACTIONS.RESET_PASSWORD_FAILED
      },
      endpoint: ENDPOINTS.RESET_PASSWORD,
      method: HTTP_METHODS.POST
    }
  })

/*export const logout = () =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.LOGOUT_INIT,
        success: ACTIONS.LOGOUT_SUCCEDED,
        fail: ACTIONS.LOGOUT_FAILED
      },
      endpoint: ENDPOINTS.LOGOUT,
      method: HTTP_METHODS.POST,
      auth: true
    }
  })*/


export const logout = () =>
  ({
    type: ACTIONS.LOGOUT_SUCCEDED,
  })
