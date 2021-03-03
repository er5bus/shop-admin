/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "redux"

// Reducers
import profileReducer from "./containers/profile/store/reducers"
import userReducer from "./containers/user/store/reducers"
import userGroupReducer from "./containers/user-group/store/reducers"

import statsReducer from "./containers/home/store/reducers"

import categoryReducer from "./containers/category/store/reducers"
import productReducer from "./containers/product/store/reducers"

import orderReducer from "./containers/order/store/reducers"

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default combineReducers({
  user: userReducer,
  profile: profileReducer,
  userGroup: userGroupReducer,
  category: categoryReducer,
  product: productReducer,
  order: orderReducer,
  stats: statsReducer
})
