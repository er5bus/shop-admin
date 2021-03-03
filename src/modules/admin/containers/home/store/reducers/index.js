import { ACTIONS } from "./../constants"

const initialState = { 
  incomeByDate: [], 
  countByStatus: [],
  countByDate: [], 
  error: null
}


export default (state = initialState , action) => {
  const { payload, type } = action
  switch (type) {
    case ACTIONS.FETCH_ORDERS_COUNT_BY_DATE_INIT : {
      return { ...state, isLoading: true, error: null }
    }
    case ACTIONS.FETCH_ORDERS_COUNT_BY_DATE_SUCCEDED : {
      return { ...state, countByDate: payload, isLoading: false, error: null }
    }
    case ACTIONS.FETCH_ORDERS_COUNT_BY_DATE_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.FETCH_ORDERS_INCOME_BY_DATE_INIT : {
      return { ...state, isLoading: true, error: null }
    }
    case ACTIONS.FETCH_ORDERS_INCOME_BY_DATE_SUCCEDED : {
      return { ...state, incomeByDate: payload, isLoading: false, error: null }
    }
    case ACTIONS.FETCH_ORDERS_INCOME_BY_DATE_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.FETCH_ORDERS_COUNT_BY_STATUS_INIT : {
      return { ...state, isLoading: true, error: null }
    }
    case ACTIONS.FETCH_ORDERS_COUNT_BY_STATUS_SUCCEDED : {
      return { ...state, countByStatus: payload, isLoading: false, error: null }
    }
    case ACTIONS.FETCH_ORDERS_COUNT_BY_STATUS_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    default: {
      return state
    }
  }
}
