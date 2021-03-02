import React from "react"
import UserGroupsLoadingDialog from "./components/loading/UserGroupsLoadingDialog"
import { UserGroupsUIProvider } from "./context/UserGroupsUIContext"
import UserGroupCard from "./components/card/UserGroupsCard"

import { dialogRoutes, basePath } from "./routes"
import pageRoutes from "./../../routes"

import { ProtectedDialogRoute } from "../../../../components/routes"


const UserGroupPage = ({ history }) => {

  const userGroupsUIEvents = {
    newUserGroupButtonClick: () => {
      history.push(pageRoutes.userGroupCreate.path)
    },
    newUserGroupRule: pageRoutes.userGroupCreate,
    openShowUserGroupPage: (param) => {
      history.push(pageRoutes.userGroupShow.path.replace(":param", param))
    },
    showUserGroupRule: pageRoutes.userGroupShow,
    openEditUserGroupPage: (param) => {
      history.push(pageRoutes.userGroupEdit.path.replace(":param", param))
    },
    editUserGroupRule: pageRoutes.userGroupEdit,
    openDeleteUserGroupDialog: (param) => {
      history.push(dialogRoutes.userGroupDelete.path.replace(":param", param))
    },
    deleteUserGroupRule: dialogRoutes.userGroupDelete,
    openDeleteUserGroupsDialog: () => {
      history.push(dialogRoutes.userGroupsDelete.path)
    },
    deleteUserGroupsRule: dialogRoutes.userGroupsDelete
  }

  const renderRoute = ({ component, history, match })  => {
    const Component = component
    const params = (match && match.params) ? {...match.params} : {}
    return <Component params={params} show={match != null} onHide = {() => { history.push( basePath )} } />
  }

  return (
    <UserGroupsUIProvider userGroupsUIEvents={userGroupsUIEvents}>
      <UserGroupsLoadingDialog />
      { Object.keys(dialogRoutes).map(key => (
        <ProtectedDialogRoute key={key} path={dialogRoutes[key].path}>
          {({ history, match }) => renderRoute({ component: dialogRoutes[key].component, history, match })}
        </ProtectedDialogRoute>
      )) }
      <UserGroupCard />
    </UserGroupsUIProvider>
  )
}


export default UserGroupPage
