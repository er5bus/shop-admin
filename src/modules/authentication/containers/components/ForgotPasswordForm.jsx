import React from "react"
import { Link } from "react-router-dom"
import * as Yup from "yup"
import { FormattedMessage, injectIntl } from "react-intl"

import routes from "./../../routes"

import forgotPasswordFields from "./fields/forgotPasswordFields"
import { DynamicForm } from "./../../../../components/partials"
import { Button } from "react-bootstrap"
import {FormUIProvider} from "../../../../components/partials/controls/forms/context/FormUIContext"


const ForgotPasswordFrom = (props) => {

  const { onSubmit, error, isLoading, initialValues = null, isSubmitting, intl } = props

  const fields = forgotPasswordFields({ intl })

  const schema = Yup.object().shape({
    email: Yup.string().email().min(3).max(50).required(),
  })

  return (
    <FormUIProvider error={error}>
      <DynamicForm
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={schema}
        fields={fields}
        className="form fv-plugins-bootstrap fv-plugins-framework"
      >
        <div className="form-group d-flex flex-wrap justify-content-between align-items-center">
          <Link
            className="font-weight-bold px-9 py-4 my-3 btn btn-primary light-primary"
            to={routes.login.path}
            id="kt_login_forgot_cancel"
          >
            <FormattedMessage id="AUTH.GENERAL.BACK_BUTTON" />
          </Link>
          <Button
            id="kt_login_signin_submit"
            type="submit"
            color="primary"
            disabled={isSubmitting}
            className={`font-weight-bold px-9 py-4 my-3`}
          >
            {isLoading && <span className="px-5 spinner spinner-white"></span>}
            <span><FormattedMessage id="AUTH.FORGOT.BUTTON" /></span>
          </Button>
        </div>
      </DynamicForm>
    </FormUIProvider>
  )
}

export default injectIntl(ForgotPasswordFrom)
