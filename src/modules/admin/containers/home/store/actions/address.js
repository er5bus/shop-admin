import { ACTIONS, ENDPOINTS } from "./../constants"
import { CALL_API, HTTP_METHODS } from "./../../../constants"


export const fetchAddresses = ({ keyWord }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_ADDRESSES_INIT,
        success: ACTIONS.FETCH_ADDRESSES_SUCCEDED,
        fail: ACTIONS.FETCH_ADDRESSES_FAILED
      },
      params: { keyWord },
      endpoint: ENDPOINTS.ADDRESS,
      method: HTTP_METHODS.GET,
      auth: true
    }
  })
