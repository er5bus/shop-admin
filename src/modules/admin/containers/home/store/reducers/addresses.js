import { ACTIONS } from "./../constants"


const initialState = {
  addresses: [], 
  isFetching: false,
  error: null
}


export default (state = initialState , action) => {
  const { payload, type } = action
  switch (type) {
    case ACTIONS.FETCH_STRUCTURES_INIT : {
      return { ...state, isFetching: true, error: null }
    }
    case ACTIONS.FETCH_STRUCTURES_SUCCEDED : {
      return { ...state, addresses: payload, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_STRUCTURES_FAILED : {
      return { ...state, isFetching: false, error: payload }
    }

    default: {
      return state
    }
  }
}
