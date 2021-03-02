import React from 'react'
import { injectIntl } from 'react-intl'
import { DynamicForm } from './../../../../../../components/partials/controls'
import { userFields } from './fields/userFields'

const UserForm = (props) => {
  const { onSubmit, user, success, saveRef, intl } = props

  const fields = userFields({ intl })

  return (
    <DynamicForm
      className='mt-5'
      fields={fields}
      clearValuesAfterSubmit={success}
      initialValues={user}
      onSubmit={onSubmit}
    >
      <button ref={saveRef} className='d-none' type='submit' />
    </DynamicForm>
  )
}

export default injectIntl(UserForm)
