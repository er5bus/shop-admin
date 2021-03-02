import React from "react"
import { injectIntl } from "react-intl"
import { productFields } from "./fields/productFields"
import { DynamicForm } from "./../../../../../../components/partials/controls"

const ProductForm = (props) => {
  const { onSubmit, product, success, saveRef, intl } = props

  const fields = productFields({ intl })

  return (
    <DynamicForm
      className="mt-5"
      fields={fields}
      clearValuesAfterSubmit={success}
      initialValues={product}
      onSubmit={onSubmit}
    >
      <button ref={saveRef} className="d-none" type="submit" />
    </DynamicForm>
  )
}

export default injectIntl(ProductForm)
