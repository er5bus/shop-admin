/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useLayoutEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"

import { ShowView } from "../../../../components/partials/controls"
import UserGroup from "./components/display/UserGroup"
import { useSubheader } from "../../../../components/layout"
import { fetchUserGroup, clearStore } from "./store/actions"
import routes from "./../../routes"

const UserGroupShow = ({ history, match: { params = null }, intl }) => {
  // Subheader
  const suhbeader = useSubheader()
  const _title = intl.formatMessage({ id: "USER_GROUP.SHOW.TITLE" })

  // Tabs
  const dispatch = useDispatch()
  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isFetching, userGroupForShow = null, error } = useSelector(
    (state) => ({
      isFetching: state.admin.userGroup.isFetching,
      userGroupForShow: state.admin.userGroup.userGroup,
      error: state.admin.userGroup.error
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(fetchUserGroup(params))
  }, [params, dispatch])

  useLayoutEffect(() => {
    suhbeader.setTitle(_title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const goBackToUserGroupsList = () => {
    history.push(routes.userGroupList.path)
  }

  return (
    <ShowView 
      title={_title}
      goBackTo={goBackToUserGroupsList}
      onClose={clearStore}
      error={error}
    >
      <UserGroup error={error} isFetching={isFetching} userGroup={userGroupForShow} />
    </ShowView>
  )
}

export default injectIntl(UserGroupShow)
