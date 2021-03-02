import { ACTIONS } from "./../constants"


const initialState = { 
  userGroups: [], 
  userGroup: {}, 
  totalSize: 0,
  isFetching: false, 
  isLoading: false,
  hasMore: true, 
  success: {
    isCreated: false,
    isUpdated: false,
    isDeleted: false
  },
  error: null
}


export default (state = initialState , action) => {
  const { payload, type } = action
  switch (type) {

    case ACTIONS.CLEAR_USER_GROUP : {
      return { ...state, success: initialState.success, error: null, isFetching: false, isLoading: false }
    }

    case ACTIONS.FETCH_USER_GROUPS_INIT : {
      return { ...state, isFetching: true, error: null }
    }
    case ACTIONS.FETCH_USER_GROUPS_SUCCEDED : {
      const { count, results } = payload
      return { ...state, totalSize: count, userGroups: results, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_USER_GROUPS_FAILED : {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.CREATE_USER_GROUP_INIT : {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.CREATE_USER_GROUP_SUCCEDED : {
      return { ...state, success: { ...state.success, isCreated: true }, isLoading: false, error: null }
    }
    case ACTIONS.CREATE_USER_GROUP_FAILED : {
      return { ...state, error: payload, isLoading: false, success: false }
    }

    case ACTIONS.EDIT_USER_GROUP_INIT : {      
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_USER_GROUP_SUCCEDED : {
      return { ...state, success: { ...state.success, isUpdated: true }, isLoading: false, error: null }
    }
    case ACTIONS.EDIT_USER_GROUP_FAILED : {
      return { ...state, error: payload, isLoading: false, success: false }
    }
 
    case ACTIONS.FETCH_USER_GROUP_INIT : {
      return { ...state, isLoading: true, userGroup: null, error: null }
    }
    case ACTIONS.FETCH_USER_GROUP_SUCCEDED : {
      return { ...state, userGroup: payload, isLoading: false, error: null }
    }
    case ACTIONS.FETCH_USER_GROUP_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.DELETE_USER_GROUP_INIT : {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.DELETE_USER_GROUP_SUCCEDED : {
      return { ...state, success: { ...state.success, isDeleted: true }, isLoading: false, error: null }
    }
    case ACTIONS.DELETE_USER_GROUP_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    default: {
      return state
    }
  }
}
