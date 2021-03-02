import { ACTIONS } from "./../constants"

const initialState = {
  users: [],
  user: {},
  totalSize: 0,
  isFetching: false,
  isLoading: false,
  hasMore: true,
  success: {
    isDeactivated: false,
    isActivated: false,
    isCreated: false,
    isUpdated: false,
    isDeleted: false,
    isReseted: false,
    isUndeleted: false,
  },
  error: null,
}

export default (state = initialState, action) => {
  const { payload, type } = action
  switch (type) {
    case ACTIONS.CLEAR_USER: {
      return {
        ...state,
        success: initialState.success,
        error: null,
        isFetching: false,
        isLoading: false,
      }
    }

    case ACTIONS.FETCH_USERS_INIT: {
      return { ...state, isFetching: true, error: null }
    }
    case ACTIONS.FETCH_USERS_SUCCEDED: {
      const { count, results } = payload
      return {
        ...state,
        totalSize: count,
        users: results,
        isFetching: false,
        error: null,
      }
    }
    case ACTIONS.FETCH_USERS_FAILED: {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.CREATE_USER_INIT: {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.CREATE_USER_SUCCEDED: {
      return { ...state, success: { ...state.success, isCreated: true }, isLoading: false, error: null }
    }
    case ACTIONS.CREATE_USER_FAILED: {
      return { ...state, error: payload, isLoading: false, success: false }
    }

    case ACTIONS.EDIT_USER_INIT: {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_USER_SUCCEDED: {
      return {
        ...state,
        user: payload,
        success: { ...state.success, isUpdated: true },
        isLoading: false,
        error: null,
      }
    }
    case ACTIONS.EDIT_USER_FAILED: {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.FETCH_USER_INIT: {
      return { ...state, isFetching: true, user: null, error: null }
    }
    case ACTIONS.FETCH_USER_SUCCEDED: {
      return { ...state, user: payload, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_USER_FAILED: {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.REGENRATE_USER_PASSWORD_INIT: {
      return { ...state, isLoading: true, user: null, error: null, success: initialState.success }
    }
    case ACTIONS.REGENRATE_USER_PASSWORD_SUCCEDED: {
      return { ...state, success: { ...state.success, isReseted: true }, isLoading: false, error: null }
    }
    case ACTIONS.REGENRATE_USER_PASSWORD_FAILED: {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.DELETE_USER_INIT: {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.DELETE_USER_SUCCEDED: {
      return { ...state, success: { ...state.success, isDeleted: true }, isLoading: false, error: null }
    }
    case ACTIONS.DELETE_USER_FAILED: {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.DELETE_USERS_INIT: {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.DELETE_USERS_SUCCEDED: {
      return { ...state, success: { ...state.success, isDeleted: true }, isLoading: false, error: null }
    }
    case ACTIONS.DELETE_USERS_FAILED: {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.DISABLE_USER_INIT: {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.DISABLE_USER_SUCCEDED: {
      return { ...state, success: { ...state.success, isDeactivated: true }, isLoading: false, error: null }
    }
    case ACTIONS.DISABLE_USER_FAILED: {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.DISABLE_USERS_INIT: {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.DISABLE_USERS_SUCCEDED: {
      return { ...state, success: { ...state.success, isDeactivated: true }, isLoading: false, error: null }
    }
    case ACTIONS.DISABLE_USERS_FAILED: {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.ENABLE_USER_INIT: {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.ENABLE_USER_SUCCEDED: {
      return { ...state, success: { ...state.success, isActivated: true }, isLoading: false, error: null }
    }
    case ACTIONS.ENABLE_USER_FAILED: {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.ENABLE_USERS_INIT: {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.ENABLE_USERS_SUCCEDED: {
      return { ...state, success: { ...state.success, isActivated: true }, isLoading: false, error: null }
    }
    case ACTIONS.ENABLE_USERS_FAILED: {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.SOFT_DELETE_USER_INIT: {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.SOFT_DELETE_USER_SUCCEDED: {
      return { ...state, success: { ...state.success, isUndeleted: true }, isLoading: false, error: null }
    }
    case ACTIONS.SOFT_DELETE_USER_FAILED: {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.SOFT_DELETE_USERS_INIT: {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.SOFT_DELETE_USERS_SUCCEDED: {
      return { ...state, success: { ...state.success, isUndeleted: true }, isLoading: false, error: null }
    }
    case ACTIONS.SOFT_DELETE_USERS_FAILED: {
      return { ...state, isLoading: false, error: payload }
    }

    default: {
      return state
    }
  }
}
