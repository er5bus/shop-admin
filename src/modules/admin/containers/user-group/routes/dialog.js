import UserGroupDeleteDialog from "./../components/dialog/UserGroupDeleteDialog"
import UserGroupsDeleteDialog from "./../components/dialog/UserGroupsDeleteDialog"
import {MODULES_PERMISSIONS, DEACTIVATE} from "../../../../../constants"


const {USER_GROUP} = MODULES_PERMISSIONS


export const userGroupDelete = {
  path: "/delete/userGroup/:param",
  component: UserGroupDeleteDialog,
  can: USER_GROUP.permissions[DEACTIVATE]
}

export const userGroupsDelete = {
  path: "/delete/userGroups",
  component: UserGroupsDeleteDialog,
  can: USER_GROUP.permissions[DEACTIVATE]
}
