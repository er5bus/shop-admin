import { lazy } from "react"
import {UPDATE, MODULES_PERMISSIONS, VIEW, CREATE} from "../../../../constants"

const Group = lazy(() => import("./../../containers/user-group/UserGroupNewEdit"))
const GroupEdit = lazy(() => import("./../../containers/user-group/UserGroupNewEdit"))
const GroupShow = lazy(() => import("./../../containers/user-group/UserGroupShow"))
const GroupPage = lazy(() => import("./../../containers/user-group/UserGroupPage"))

const { USER_GROUP } = MODULES_PERMISSIONS

export const userGroupCreate = {
  path: "/user-groups/new",
  component: Group,
  can: USER_GROUP.permissions[CREATE],
  exact: true,
}

export const userGroupEdit = {
  path: "/user-groups/:param/edit",
  component: GroupEdit,
  can: USER_GROUP.permissions[UPDATE]
}

export const userGroupShow = {
  path: "/user-groups/:param/show",
  component: GroupShow,
  can: USER_GROUP.permissions[VIEW]
}

export const userGroupList = {
  path: "/user-groups",
  component: GroupPage,
  can: USER_GROUP.permissions[VIEW]
}
