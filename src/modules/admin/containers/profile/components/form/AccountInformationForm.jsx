import React from "react"
import { injectIntl } from "react-intl"

import accountInformationFields from "./fields/accountInformationFields"
import { DynamicForm } from "./../../../../../../components/partials/controls"

const AccountInformationForm = (props) => {

  const { onSubmit, initialValues, saveRef, intl } = props

  const fields = accountInformationFields({ intl })

  return (
    <>
      <DynamicForm
        initialValues={initialValues}
        onSubmit={onSubmit}
        fields={fields}
      >
        <button ref={saveRef} className="d-none" type="submit"></button>
      </DynamicForm>
    </>
  )
}

export default injectIntl(AccountInformationForm)
