import React from "react"

import Alert from "react-bootstrap/Alert"
import { FormattedMessage } from "react-intl"

import { ERROR_CODES } from "./../../../../constants"

export const FormattedError = ({ error, onClose=f=>f }) => {

  const { data: { code } = {}, status } = error

  return (
    <Alert variant="danger" onClose={onClose} dismissible>
      <div className="alert-text font-weight-bold">
        <i className="fa fa-exclamation-triangle text-white" /> { " " }
        <FormattedMessage id={ ERROR_CODES[(code || status)] || "ERROR.CODE.INTERNAL_ERROR"} />
      </div>
    </Alert>
  )
}
