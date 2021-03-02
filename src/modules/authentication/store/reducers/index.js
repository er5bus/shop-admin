import { ACTIONS } from "./../constants"
import { PURGE } from "redux-persist"


const initialState = { 
  currentUser: null, 
  permissions: null,
  token: null,
  isAuthenticated: false,
  isSuperuser: false,
  isLoading: false, 
  isFetching: false, 
  success: false, 
  error: null 
}


export default (state = initialState, action) => {
  
  const { payload, type } = action
  
  switch (type) {

    case ACTIONS.CLEAR_ERROR : {
      return { ...state, isLoading: false, isFetching: false, success: false, error: null }
    }
    
    case ACTIONS.LOGIN_INIT : {
      return { ...state, isLoading: true, error: null }
    }
    case ACTIONS.LOGIN_SUCCEDED : {
      const { profile, profile: { user: { isSuperuser = false  } = {} }= {}, permissions = [], ...token } = payload
      return { ...state, isLoading: false, isAuthenticated: true, currentUser: profile, isSuperuser, permissions, token, error: null }
    }
    case ACTIONS.LOGIN_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.LOGOUT_INIT : {
      return { ...state, isLoading: true, error: null }
    }
    case ACTIONS.LOGOUT_SUCCEDED : {
      return { ...state, ...initialState }
    }
    case PURGE : {
      return { ...state, ...initialState }
    }
    case ACTIONS.LOGOUT_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.UPDATE_PERSONAL_INFORMATION_SUCCEDED : {
      return { ...state, currentUser: payload }
    }

    case ACTIONS.FORGOT_PASSWORD_INIT : {
      return { ...state, isLoading: true, error: null, success: false }
    }
    case ACTIONS.FORGOT_PASSWORD_SUCCEDED : {
      return { ...state, isLoading: false, success: true, error: null }
    }
    case ACTIONS.FORGOT_PASSWORD_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.RESET_PASSWORD_INIT : {
      return { ...state, isLoading: true, error: null, success: false }
    }
    case ACTIONS.RESET_PASSWORD_SUCCEDED : {
      const { user, user: { isSuperuser = false }, permissions = [], ...token } = payload
      return { ...state, isLoading: false, isAuthenticated: true, currentUser: user, isSuperuser, permissions, token, error: null }
    }
    case ACTIONS.RESET_PASSWORD_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }
   
    default: {
      return state
    }
  }
}
