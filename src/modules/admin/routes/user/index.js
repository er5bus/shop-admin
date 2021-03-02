import { lazy } from "react"
import {MODULES_PERMISSIONS, CREATE, UPDATE, VIEW} from "../../../../constants"

const User = lazy(() => import("./../../containers/user/User"))
const UserEdit = lazy(() => import("./../../containers/user/User"))
const UserShow = lazy(() => import("./../../containers/user/UserShow"))
const UserPage = lazy(() => import("./../../containers/user/UserPage"))

const { USER } = MODULES_PERMISSIONS

export const userCreate = {
  path: "/users/new",
  component: User,
  exact: true,
  can: USER.permissions[CREATE],
}

export const userEdit = {
  path: "/users/:param/edit",
  component: UserEdit,
  can: USER.permissions[UPDATE]
}

export const userShow = {
  path: "/users/:param/show",
  component: UserShow,
  can: USER.permissions[VIEW]
}

export const userList = {
  path: "/users",
  component: UserPage,
  can: USER.permissions[VIEW]
}
