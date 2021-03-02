import { ACTIONS } from "./../constants"


const initialState = { 
  structures: [], 
  structure: {}, 
  totalSize: 0,
  isFetching: false, 
  isLoading: false,
  hasMore: true, 
  error: null
}


export default (state = initialState , action) => {
  const { payload, type } = action
  switch (type) {
    case ACTIONS.CREATE_STRUCTURE_INIT : {
      return { ...state, isLoading: true, error: null }
    }
    case ACTIONS.CREATE_STRUCTURE_SUCCEDED : {
      const { id: param } = payload
      return { ...state, structure: { param }, sructures: state.sructures.concat(payload), isLoading: false, error: null }
    }
    case ACTIONS.CREATE_STRUCTURE_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.EDIT_STRUCTURE_INIT : {
      return { ...state, isLoading: true, error: null }
    }
    case ACTIONS.EDIT_STRUCTURE_SUCCEDED : {
      return { ...state, structure: payload, sructures: state.sructures.map((structure) => structure.id === payload.id ? payload : structure ), isLoading: false, error: null }
    }
    case ACTIONS.EDIT_STRUCTURE_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.FETCH_STRUCTURES_INIT : {
      return { ...state, isFetching: true, error: null }
    }
    case ACTIONS.FETCH_STRUCTURES_SUCCEDED : {
      return { ...state, structures: payload.results, totalSize: payload.count, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_STRUCTURES_FAILED : {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.FETCH_STRUCTURE_INIT : {
      return { ...state, isLoading: true, structure: null, error: null }
    }
    case ACTIONS.FETCH_STRUCTURE_SUCCEDED : {
      return { ...state, structure: payload, isLoading: false, error: null }
    }
    case ACTIONS.FETCH_STRUCTURE_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.DELETE_STRUCTURE_INIT : {
      return { ...state, isLoading: true, error: null }
    }
    case ACTIONS.DELETE_STRUCTURE_SUCCEDED : {
      return { ...state, sructures: state.sructures.filter( item => payload.id !== item.id ), isLoading: false, error: null }
    }
    case ACTIONS.DELETE_STRUCTURE_FAILED : {
      return { ...state, isLoading: false, error: null }
    }

    default: {
      return state
    }
  }
}
