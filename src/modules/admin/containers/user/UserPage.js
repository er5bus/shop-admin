import React from "react"
import UsersLoadingDialog from "./components/loading/UsersLoadingDialog"
import UsersCard from "./components/card/UsersCard"
import { UsersUIProvider } from "./context/UsersUIContext"

import dialogRoutes from "./routes"
import routes from "./../../routes"
import {ProtectedDialogRoute} from "../../../../components/routes"


const UserPage = ({ history }) => {

  const usersUIEvents = {
    newUserButtonClick: () => {
      history.push(routes.userCreate.path)
    },
    newUserRule: routes.userCreate,
    openShowUserPage: (param) => {
      history.push(routes.userShow.path.replace(":param", param))
    },
    showUserRule: routes.userShow,
    openEditUserPage: (param) => {
      history.push(routes.userEdit.path.replace(":param", param))
    },
    editUserRule: routes.userEdit,
    openRegenerateUserPasswordDialog: (param) => {
      history.push(dialogRoutes.regenerateUserPassword.path.replace(":param", param))
    },
    regenerateUserPasswordRule: dialogRoutes.regenerateUserPassword,
    openDisableUserDialog: (param) => {
      history.push(dialogRoutes.userDisable.path.replace(":param", param))
    },
    disableUserRule: dialogRoutes.userDisable,
    openDisableUsersDialog: () => {
      history.push(dialogRoutes.usersDisable.path)
    },
    disableUsersRule: dialogRoutes.usersDisable,
    openEnableUserDialog: (param) => {
      history.push(dialogRoutes.userEnable.path.replace(":param", param))
    },
    enableUserRule: dialogRoutes.userEnable,
    openEnableUsersDialog: () => {
      history.push(dialogRoutes.usersEnable.path)
    },
    enableUsersRule: dialogRoutes.usersEnable,
    openUndeleteUserDialog: (param) => {
      history.push(dialogRoutes.userUndelete.path.replace(":param", param))
    },
    undeleteUserRule: dialogRoutes.userUndelete,
    openDeleteUserDialog: (param) => {
      history.push(dialogRoutes.userDelete.path.replace(":param", param))
    },
    deleteUserRule: dialogRoutes.userDelete,
    openUndeleteUsersDialog: () => {
      history.push(dialogRoutes.usersUndelete.path)
    },
    undeleteUsersRule: dialogRoutes.usersUndelete,
    openDeleteUsersDialog: () => {
      history.push(dialogRoutes.usersDelete.path)
    },
    deleteUsersRule: dialogRoutes.usersDelete,
  }

  const renderRoute = ({ component, history, match })  => {
    const Component = component
    const params = (match && match.params) ? {...match.params} : {}
    return <Component params={params} show={match != null} onHide = {() => { history.push(routes.userList.path)} } />
  }

  return (
    <UsersUIProvider usersUIEvents={usersUIEvents}>
      <UsersLoadingDialog />
      { Object.keys(dialogRoutes).map(key => (
        <ProtectedDialogRoute key={key} path={dialogRoutes[key].path}>
          {({ history, match }) => renderRoute({ component: dialogRoutes[key].component, history, match })}
        </ProtectedDialogRoute>
      )) }
      <UsersCard />
    </UsersUIProvider>
  )
}


export default UserPage
