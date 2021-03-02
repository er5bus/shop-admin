import React from "react"
import { injectIntl } from "react-intl"
import { orderFields, orderItemFields } from "./fields/orderFields"
import { DynamicForm, FormRepeater, FormRepeaterFields } from "./../../../../../../components/partials/controls"

const OrderForm = (props) => {
  const { onSubmit, order, success, saveRef, intl } = props

  const fields = orderFields({ intl })
  const fieldsOrderItem = orderItemFields({ intl })

  return (
    <DynamicForm
      className="mt-5"
      fields={fields}
      clearValuesAfterSubmit={success}
      initialValues={order}
      onSubmit={onSubmit}
    >
      <FormRepeater max={15} min={1} label={ intl.formatMessage({ id: "ORDER.INPUT.ORDER_ITEM" }) }>
        <FormRepeaterFields fields={fieldsOrderItem} show={true} />
      </FormRepeater>
      <button ref={saveRef} className="d-none" type="submit" />
    </DynamicForm>
  )
}

export default injectIntl(OrderForm)
