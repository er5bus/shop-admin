/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux'

// Reducers
import structureReducer from './structure'

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default combineReducers({
  structure: structureReducer
})

