/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"
import { isRLTLang } from "../../../../../../../i18n"

const OrderTypeFormatter = (
  cellContent,
  row,
  intl,
  rowIndex,
  formatExtraData
) => (
  <>
    { row.orderType ?
    (isRLTLang() ? row.orderType.labelAr : row.orderType.labelFr)
    :
    <FormattedMessage id="GENERAL.EMPTY" />
    }
  </>
);


export default OrderTypeFormatter
