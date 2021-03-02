import React from "react"
import { injectIntl } from "react-intl"

import {
  DisplayItems,
} from "./../../../../../../components/partials/controls"

import { productFields } from "./fields/productFields"


const ProductTemplate = ({ product = {}, error, isFetching, intl }) => {

  const fields = productFields({ intl })

  return (
    <DisplayItems
      fields={fields}
      error={error}
      isFetching={isFetching}
      object={product}
    />
  )
}

export default injectIntl(ProductTemplate)
