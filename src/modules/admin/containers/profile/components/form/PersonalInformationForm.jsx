import React from "react"
import { injectIntl } from "react-intl"

import personalInformationFields from "./fields/personalInformationFields"
import { DynamicForm } from "./../../../../../../components/partials/controls"


const PersonalInformationForm = (props) => {

  const { onSubmit, initialValues, saveRef,  intl } = props

  const fields = personalInformationFields({intl})

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

export default injectIntl(PersonalInformationForm)
