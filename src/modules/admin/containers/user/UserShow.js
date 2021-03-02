import React, { useEffect, useLayoutEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import User from "./components/display/User"

import { useSubheader } from "../../../../components/layout"
import routes from "./../../routes"
import { clearStore, fetchUser } from "./store/actions"
import {ShowView} from "../../../../components/partials"


const UserShow = ({ history, match: { params }, intl }) => {
  // Subheader
  const suhbeader = useSubheader()

  // Tabs
  let title = intl.formatMessage({ id: "USER.SHOW.TITLE" })
  const dispatch = useDispatch()
  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isFetching, userForShow, error } = useSelector(
    (state) => ({
      isFetching: state.admin.user.isFetching,
      userForShow: state.admin.user.user,
      error: state.admin.user.error
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(fetchUser(params))
  }, [params, dispatch])

  useLayoutEffect(() => {
    suhbeader.setTitle(title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const goBackToUsersList = () => {
    history.push(routes.userList.path)
  }

  return (
    <ShowView
      title={title}
      goBackTo={goBackToUsersList}
      onClose={clearStore}
      error={error}
    >
      <User error={error} isFetching={isFetching} profile={userForShow} />
    </ShowView>
  )
}


export default injectIntl(UserShow)
