import React from "react"
import { injectIntl } from "react-intl"

import {
  DisplayItems,
} from "./../../../../../../components/partials/controls"

import { categoryFields } from "./fields/categoryFields"


const CategoryTemplate = ({ category = {}, error, isFetching, intl }) => {

  const fields = categoryFields({ intl })

  return (
    <DisplayItems
      fields={fields}
      error={error}
      isFetching={isFetching}
      object={category}
    />
  )
}

export default injectIntl(CategoryTemplate)
