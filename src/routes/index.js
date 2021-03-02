import * as commonLayoutRoutes from "./authentication"
import * as adminLayoutRoutes from "./admin"


// Combined routes
export default Object.assign({}, commonLayoutRoutes, adminLayoutRoutes)
