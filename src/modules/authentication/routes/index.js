import { combinePathRoutes } from "./../../../helpers"

import baseRoutes from "./../../../routes"
import * as authenticationRoutes from "./authentication"


// Combined routes
export default combinePathRoutes({ path: baseRoutes.auth.path }, authenticationRoutes)
