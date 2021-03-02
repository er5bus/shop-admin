import React from "react"
import { injectIntl } from "react-intl"

import userGroupFields from "./fields/userGroupFields"
import { DynamicForm } from "./../../../../../../components/partials/controls"

const UserGroupForm = (props) => {

  const { onSubmit, userGroup, success, saveRef, intl } = props

  const fields = userGroupFields({ intl })

  return (
    <>
      <DynamicForm
        initialValues={userGroup}
        onSubmit={onSubmit}
        clearValuesAfterSubmit={success}
        fields={fields}
      >
        <button ref={saveRef} className="d-none" type="submit"></button>
      </DynamicForm>
    </>
  )
}

export default injectIntl(UserGroupForm)
