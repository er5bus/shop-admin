import * as dashboardRoutes from "./dashboard"
import * as homeRoutes from "./home"
import * as profileRoutes from "./profile"
import * as userRoutes from "./user"
import * as userGroupRoutes from "./user-group"
import * as categoryRoutes from "./category"
import * as orderRoutes from "./order"
import * as productRoutes from "./product"


import { combinePathRoutes } from "./../../../helpers"

import baseRoutes from "./../../../routes"

const objectProps = { path: baseRoutes.admin.path, anonymous: true }

// Combined routes
export default combinePathRoutes(
  objectProps, 
  homeRoutes, 
  profileRoutes, 
  dashboardRoutes, 
  userRoutes,
  userGroupRoutes,
  categoryRoutes,
  orderRoutes,
  productRoutes
)
