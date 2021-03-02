import { lazy } from "react"

const Layout = lazy(() =>  import("./../modules/authentication/layout/Layout"))
const Logout = lazy(() =>  import("./../modules/authentication/containers/Logout"))


export const auth = {
  path: "/auth",
  component: Layout
}

export const logout = {
  path: "/logout",
  component: Logout
}
