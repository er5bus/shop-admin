import React from "react"
import { injectIntl } from "react-intl"
import { categoryFields } from "./fields/categoryFields"
import { DynamicForm } from "./../../../../../../components/partials/controls"

const CategoryForm = (props) => {
  const { onSubmit, category, success, saveRef, intl } = props

  const fields = categoryFields({ intl })

  return (
    <DynamicForm
      className="mt-5"
      fields={fields}
      clearValuesAfterSubmit={success}
      initialValues={category}
      onSubmit={onSubmit}
    >
      <button ref={saveRef} className="d-none" type="submit" />
    </DynamicForm>
  )
}

export default injectIntl(CategoryForm)
