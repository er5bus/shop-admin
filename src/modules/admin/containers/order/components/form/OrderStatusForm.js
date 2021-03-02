import React from "react"
import { injectIntl } from "react-intl"
import { orderStatusFields } from "./fields/orderStatusFields"
import { DynamicForm } from "./../../../../../../components/partials/controls"

const OrderForm = (props) => {
  const { onSubmit, order, saveRef, intl } = props

  const fields = orderStatusFields({ intl })

  return (
    <DynamicForm
      className="mt-5"
      fields={fields}
      initialValues={order}
      onSubmit={onSubmit}
    >
      <button ref={saveRef} className="d-none" type="submit" />
    </DynamicForm>
  )
}

export default injectIntl(OrderForm)
