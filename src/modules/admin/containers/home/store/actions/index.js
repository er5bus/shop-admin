import { ACTIONS, ENDPOINTS } from "./../constants"
import { CALL_API, HTTP_METHODS } from "./../../../../../../constants"


export const clearError = () => 
  ({
    type: ACTIONS.CLEAR_STATS
  })

export const fetchIncomeByDate = () =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_ORDERS_INCOME_BY_DATE_INIT,
        success: ACTIONS.FETCH_ORDERS_INCOME_BY_DATE_SUCCEDED,
        fail: ACTIONS.FETCH_ORDERS_INCOME_BY_DATE_FAILED
      },
      endpoint: ENDPOINTS.ORDERS_INCOME_BY_DATE,
      method: HTTP_METHODS.GET,
      auth: true
    }
  })


export const fetchCountByDate = () =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_ORDERS_COUNT_BY_DATE_INIT,
        success: ACTIONS.FETCH_ORDERS_COUNT_BY_DATE_SUCCEDED,
        fail: ACTIONS.FETCH_ORDERS_COUNT_BY_DATE_FAILED
      },
      endpoint: ENDPOINTS.ORDERS_COUNT_BY_DATE,
      method: HTTP_METHODS.GET,
      auth: true
    }
  })


export const fetchCountByStatus = () =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_ORDERS_COUNT_BY_STATUS_INIT,
        success: ACTIONS.FETCH_ORDERS_COUNT_BY_STATUS_SUCCEDED,
        fail: ACTIONS.FETCH_ORDERS_COUNT_BY_STATUS_FAILED
      },
      endpoint: ENDPOINTS.ORDERS_COUNT_BY_STATUS,
      method: HTTP_METHODS.GET,
      auth: true
    }
  })
