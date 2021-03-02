/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "redux"

// Reducers
import authReducer from "./store/reducers"



/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default combineReducers({
  auth: authReducer,
})

