/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "redux"

// root reducer
import commonReducer from "./modules/authentication/rootReducer"
import adminReducer from "./modules/admin/rootReducer"

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default combineReducers({
  common: commonReducer,
  admin: adminReducer
})

