import React from "react"
import { Link } from "react-router-dom"
import * as Yup from "yup"
import { FormattedMessage, injectIntl } from "react-intl"

import routes from "./../../routes"

import loginFields from "./fields/loginFields"
import { DynamicForm } from "./../../../../components/partials"

import { Button } from "react-bootstrap"
import {FormUIProvider} from "../../../../components/partials/controls/forms/context/FormUIContext"

const LoginForm = (props) => {
  const {
    onSubmit,
    isLoading,
    initialValues = null,
    isSubmitting,
    intl,
    error
  } = props

  const schema = Yup.object().shape({
    email: Yup.string().email().min(3).max(50).required(),
    password: Yup.string().min(3).max(50).required(),
  })

  const fields = loginFields({ intl })

  return (
    <FormUIProvider error={error}>
      <DynamicForm
        initialValues={initialValues}
        onSubmit={onSubmit}
        fields={fields}
        validationSchema={schema}
        className="form fv-plugins-bootstrap fv-plugins-framework"
      >
        <div className="form-group d-flex flex-wrap justify-content-between align-items-center">
          <Link
            to={routes.forgotPassword.path}
            className="text-dark-50 text-hover-primary my-3 mr-2"
            id="kt_login_forgot"
          >
            <FormattedMessage id="AUTH.GENERAL.FORGOT" />
          </Link>
          <Button
            id="kt_login_signin_submit"
            type="submit"
            color="primary"
            disabled={isSubmitting}
            className={`font-weight-bold px-9 py-4 my-3`}
          >
            {isLoading && <span className="spinner spinner-white px-5"></span>}
            <span>
              <FormattedMessage id="AUTH.LOGIN.BUTTON" />
            </span>
          </Button>
          {/*<div className="d-flex">
            <LanguageSelectorDropdown />
          </div>*/}
        </div>
      </DynamicForm>
    </FormUIProvider>
  )
}

export default injectIntl(LoginForm)
