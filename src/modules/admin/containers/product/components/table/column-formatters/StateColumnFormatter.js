/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"

const StateColumnFormatter = (
  cellContent,
  row,
  rowIndex,
  formatExtraData
) => (
  <div className={`label label-lg label-light-${row.isActive ? 'success' : 'danger'} label-inline`}>
    {
    row.isActive
    ? <FormattedMessage id="PRODUCT.STATE.ACTIVE" />
    : <FormattedMessage id="PRODUCT.STATE.INACTIVE" />
    }
  </div>
);


export default StateColumnFormatter
