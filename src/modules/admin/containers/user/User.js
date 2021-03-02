import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import _ from "lodash"

import UserForm from "./components/form/UserForm"
import { createUser, clearStore, fetchUser, editUser } from "./store/actions"
import { useSubheader } from "../../../../components/layout"
import routes from "./../../routes"
import {FormView} from "../../../../components/partials"


const User = ({ history, intl, match: { params } }) => {
  // Subheader
  const suhbeader = useSubheader()

  const _title = intl.formatMessage({ id: (_.isEmpty(params) ? "USER.NEW.TITLE" : "USER.EDIT.TITLE") })

  const dispatch = useDispatch()
  
  const { isLoading, success, error, userToEdit } = useSelector(
    (state) => ({
      isLoading: state.admin.user.isLoading,
      success: state.admin.user.success,
      userToEdit: state.admin.user.user,
      error: state.admin.user.error
    }),
    shallowEqual
  )

  const saveUser = (fieldValues) => {
    const values = _.cloneDeep(fieldValues)
    if (!_.isEmpty(params)){
      dispatch(editUser(params, values))
    }else {
      dispatch(createUser(values))
    }
  }

  const goBackToUsersList = () => {
    history.push(routes.userList.path)
  }

  useEffect(() => {
    suhbeader.setTitle(_title)
    if (!_.isEmpty(params)){
      dispatch(fetchUser(params))
    }
  }, [params, intl, dispatch, suhbeader, _title])

  return (
    <FormView
      goBackTo={goBackToUsersList}
      title={_title}
      onClose={clearStore}
      error={error}
      isLoading={isLoading}
      successMsg={[
        { condition: success.isUpdated, label: intl.formatMessage({ id: "USER.EDIT.MSG" }) },
        { condition: success.isCreated, label: intl.formatMessage({ id: "USER.NEW.MSG" }) }
      ]}
    >
      { ({ saveRef }) => (<UserForm
        isLoading={isLoading}
        success={success.isCreated}
        onSubmit={saveUser}
        user={!_.isEmpty(params) && userToEdit}
        saveRef={saveRef}
      />
      ) }
    </FormView>
  )
}


export default injectIntl(User)
