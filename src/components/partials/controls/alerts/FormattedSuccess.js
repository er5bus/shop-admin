import React from "react"

import Alert from "react-bootstrap/Alert"
import { FormattedMessage } from "react-intl"

export const FormattedSuccess = ({ msg, onClose=f=>f }) => {

  return (
    <Alert variant="success" onClose={onClose} dismissible>
      <div className="alert-text font-weight-bold">
        <i className="fa fa-check text-white" /> { " " }
        <FormattedMessage id={ msg || "GENERAL.SUCCESS" } />
      </div>
    </Alert>
  )
}
