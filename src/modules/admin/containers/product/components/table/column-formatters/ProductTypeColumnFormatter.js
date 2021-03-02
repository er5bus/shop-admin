/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"
import { isRLTLang } from "../../../../../../../i18n"

const ProductTypeFormatter = (
  cellContent,
  row,
  intl,
  rowIndex,
  formatExtraData
) => (
  <>
    { row.productType ?
    (isRLTLang() ? row.productType.labelAr : row.productType.labelFr)
    :
    <FormattedMessage id="GENERAL.EMPTY" />
    }
  </>
);


export default ProductTypeFormatter
