/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"
import { isRLTLang } from "../../../../../../../i18n"

const CategoryTypeFormatter = (
  cellContent,
  row,
  intl,
  rowIndex,
  formatExtraData
) => (
  <>
    { row.categoryType ?
    (isRLTLang() ? row.categoryType.labelAr : row.categoryType.labelFr)
    :
    <FormattedMessage id="GENERAL.EMPTY" />
    }
  </>
);


export default CategoryTypeFormatter
