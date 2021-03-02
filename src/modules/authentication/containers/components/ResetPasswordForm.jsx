import React from "react"
import { Link } from "react-router-dom"
import * as Yup from "yup"
import { FormattedMessage, injectIntl } from "react-intl"

import routes from "./../../routes"

import resetPasswordFields from "./fields/resetPasswordFields"

import { DynamicForm } from "./../../../../components/partials"
import {Button} from "react-bootstrap"
import {FormUIProvider} from "../../../../components/partials/controls/forms/context/FormUIContext"

const ResetPasswordForm = (props) => {

  const { onSubmit, error, isLoading, initialValues = null, isSubmitting, intl } = props

  const fields = resetPasswordFields({ intl })

  const schema = Yup.object().shape({
    password: Yup.string().min(3).max(50).required(),
    confirmPassword: Yup.string().equalTo(Yup.ref('password')).required()
  })

  return (
    <FormUIProvider error={error}>
      <DynamicForm
        initialValues={initialValues}
        onSubmit={onSubmit}
        fields={fields}
        validationSchema={schema}
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
            <span><FormattedMessage id="AUTH.REGISTER.BUTTON" /></span>
          </Button>
        </div>
      </DynamicForm>
    </FormUIProvider>
  )
}

export default injectIntl(ResetPasswordForm)
