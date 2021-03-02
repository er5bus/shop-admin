import React from "react"
import { connect } from "react-redux"
import { FormattedMessage } from "react-intl"

import { login, clearError } from "./../store/actions"

import LoginForm from "./components/LoginForm"
import { FormattedError } from "./../../../components/partials/controls"

class Login extends React.Component {

  componentDidMount() {
    this.props.clearError()
  }

  onSubmit = (values) => {
    this.props.login(values)
  }

  render () {
    const { isLoading = false, error } = this.props

    return (
      <div className="login-form login-signin" id="kt_login_signin_form">
        {/* begin::Head */}
        <div className="text-center mb-10 mb-lg-20">
          <h3 className="font-size-h1">
            <FormattedMessage id="AUTH.LOGIN.TITLE" />
          </h3>
          <p className="text-muted font-weight-bold">
            <FormattedMessage id="AUTH.LOGIN.DESC" />
          </p>
        </div>
        {/* end::Head */}
        {/* begin:Alert */}
        { error && <FormattedError error={error} onClose={this.props.clearError} /> }
        {/* end:Alert */}
        {/*begin::Form*/}
        <LoginForm isLoading={isLoading} onSubmit={this.onSubmit} />
        {/*end::Form*/}
      </div>
    )
  }
}

const mapStateToProps = (state) => state.common.auth

export default connect(mapStateToProps, { login, clearError })(Login)
