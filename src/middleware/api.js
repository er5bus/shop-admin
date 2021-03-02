import { CALL_API } from "./../constants"
import { makeCall, objectToFormData } from "./../helpers"
import { PURGE } from "redux-persist"


const api = store => next => action => {
  if (!action || !action.type || action.type !== CALL_API ){
    return next(action)
  }

  const { actions, endpoint, method, auth, params = {}, isFormData=false, returnResponse=false, extra = {}, headers = {} } = action.meta
  const { token } = store.getState().common.auth || {}
  let payload = action.payload


  const dispatch = (type, payload) => next({type, payload})
  if (actions.init){
    dispatch(actions.init, params)
  }

  // check for authorization
  if (auth) {
    headers["Authorization"] = `Bearer ${token.access}`
  }


  // check for form data
  if (isFormData) {
    headers["Content-Type"] = "multipart/form-data"
    payload = objectToFormData(action.payload)
  }

  // make the request
  makeCall(method, endpoint, payload, headers, params, extra)
    .then(resp => {
      if (returnResponse){
        dispatch(actions.success, resp)
      }else {
        dispatch(actions.success, resp.data)
      }
    })
    .catch(err => {
      if (err.response && err.response.status === 401 && auth){
        next({
          type: PURGE,
          result: () => null
        })
      }else {
        dispatch(actions.fail, err.response || {})
      }    
    })
}


export default api
