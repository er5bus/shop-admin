import React from "react"
import { injectIntl } from "react-intl"

import {
  DisplayItems,
} from "./../../../../../../components/partials/controls"

import { orderFields } from "./fields/orderFields"


const OrderTemplate = ({ order = {}, error, isFetching, intl }) => {

  const fields = orderFields({ intl })

  return (
    <DisplayItems
      fields={fields}
      error={error}
      isFetching={isFetching}
      object={order}
    />
  )
}

export default injectIntl(OrderTemplate)
