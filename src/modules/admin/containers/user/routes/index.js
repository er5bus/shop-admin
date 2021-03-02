import routes from "./../../../routes"

import { combinePathRoutes } from "./../../../../../helpers"

import UserEnableDialog from "./../components/dialog/UserEnableDialog"
import UserRegeneratePasswordDialog from "./../components/dialog/UserRegeneratePasswordDialog"
import UsersEnableDialog from "./../components/dialog/UsersEnableDialog"
import UserDisableDialog from "./../components/dialog/UserDisableDialog"
import UsersDisableDialog from "./../components/dialog/UsersDisableDialog"
import UserDeleteDialog from "./../components/dialog/UserDeleteDialog"
import UserUndeleteDialog from "./../components/dialog/UserUndeleteDialog"
import UsersDeleteDialog from "./../components/dialog/UsersDeleteDialog"
import UsersUndeleteDialog from "./../components/dialog/UsersUndeleteDialog"


import {MODULES_PERMISSIONS, ACTIVATE, DEACTIVATE , DELETE , UNDELETE} from "../../../../../constants"


const { USER } = MODULES_PERMISSIONS


const userEnable = {
  path: "/enable-user/:param",
  component: UserEnableDialog,
  can: USER.permissions[ACTIVATE]
}


const userDisable = {
  path: "/disable-user/:param",
  component: UserDisableDialog,
  can: USER.permissions[DEACTIVATE]
}

const usersDisable = {
  path: "/disable-users",
  component: UsersDisableDialog,
  can: USER.permissions[DEACTIVATE]
}

const usersEnable = {
  path: "/enable-users",
  component: UsersEnableDialog,
  can: USER.permissions[ACTIVATE]
}

const regenerateUserPassword = {
  path: "/generate-password/:param",
  component: UserRegeneratePasswordDialog,
  can: USER.permissions[ACTIVATE]
}

const userDelete = {
  path: "/delete-user/:param",
  component: UserDeleteDialog,
  can: USER.permissions[DELETE],
}

const userUndelete = {
  path: "/undelete-user/:param",
  component: UserUndeleteDialog,
  can: USER.permissions[UNDELETE],
}

const usersDelete = {
  path: "/delete-users",
  component: UsersDeleteDialog,
  can: USER.permissions[DELETE],
}

const usersUndelete = {
  path: "/undelete-users",
  component: UsersUndeleteDialog,
  can: USER.permissions[UNDELETE],
}

export default combinePathRoutes(
  {
    path: routes.userList.path
  },
  {
    userEnable,
    userDisable,
    usersEnable,
    usersDisable,
    userDelete,
    regenerateUserPassword,
    userUndelete,
    usersDelete,
    usersUndelete
  }
)
