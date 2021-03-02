import React from 'react'
import { injectIntl } from 'react-intl'

import changePasswordFields from './fields/changePasswordFields'
import { DynamicForm } from './../../../../../../components/partials/controls'

const ChangePasswordForm = (props) => {
  const { onSubmit, initialValues, saveRef, intl } = props

  const fields = changePasswordFields({ intl })

  return (
    <>
      <DynamicForm
        initialValues={initialValues}
        onSubmit={onSubmit}
        fields={fields}
      >
        <button ref={saveRef} className='d-none' type='submit' />
      </DynamicForm>
    </>
  )
}

export default injectIntl(ChangePasswordForm)
