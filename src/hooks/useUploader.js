import { useEffect, useReducer } from "react"
import {shallowEqual, useSelector} from "react-redux"

import { HTTP_METHODS } from "./../constants"
import { uploadFile, makeCall } from "./../helpers"

const ACTIONS = {
  INIT: "START_UPLODING",
  SUCCESS: "SUCCESS_UPLODING",
  ERROR: "ERROR_UPLODING"
}

const initialState = { isFetching: false, success: false, error: null }

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INIT: {
      return { ...state, isFetching: true, success: false, error: null }
    }
    case ACTIONS.SUCCESS: {
      return { ...state, isFetching: false, success: true }
    }
    case ACTIONS.ERROR: {
      return { ...state, isFetching: false, error: action.payload }
    }
    default: {
      return state
    }
  }
}

const useUploader = ({ endpoint, mineType = "text/csv;charset=utf-8;", params = {}, filename, payload = {}, headers = {}, method = HTTP_METHODS.GET }) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const { token } = useSelector(
    (state) => ({
      token: state.common.auth.token
    }),
    shallowEqual
  )

  const uploadTrigger = () => {
    dispatch({ type: ACTIONS.INIT })
  }

  useEffect(() => {
    if (state.isFetching) {

      makeCall(method, endpoint, payload, {"Authorization": `Bearer  ${token.access}`, ...headers}, params, {
        responseType: "blob",
      })
        .then(resp => {
          dispatch({ type: ACTIONS.SUCCESS })
          uploadFile(resp.data, filename, mineType)
        })
        .catch(err => {
          dispatch({ type: ACTIONS.ERROR, payload: { err } })
        })
    }
  }, [state])

  return [ state, uploadTrigger ]
}

export default useUploader
