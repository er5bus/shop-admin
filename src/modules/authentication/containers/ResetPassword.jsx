import React from "react"
import { connect } from "react-redux"
import { FormattedMessage } from "react-intl"

import { resetPassword, fetchToken, clearError } from "./../store/actions"
import ResetPasswordForm from "./components/ResetPasswordForm"
import { FormattedError } from "./../../../components/partials/controls"


class ResetPassword extends React.Component {

  componentDidMount() {
    this.props.clearError()
    //this.props.fetchToken(this.props.match.params)
  }

  onSubmit = (values) => {
    const { param } = this.props.match.params
    this.props.resetPassword({ ...values, token: param })
  }

  render () {
    const { error, isLoading } = this.props

    console.log(error, isLoading)

    return (
      <div className="login-form login-signin" style={{ display: "block" }}>
        <div className="text-center mb-10 mb-lg-20">
          <h3 className="font-size-h1">
            <FormattedMessage id="AUTH.RESET_PASSWORD.TITLE" />
          </h3>
          <p className="text-muted font-weight-bold">
            <FormattedMessage id="AUTH.RESET_PASSWORD.DESC" />
          </p>
        </div>

        {/* begin:Alert */}
        { error && <FormattedError error={error} onClose={this.props.clearError} /> }
        {/* end:Alert */}

        <ResetPasswordForm onSubmit={this.onSubmit} isLoading={isLoading} />
      </div>
    )
  }
}

const mapStateToProps = (state) => state.common.auth

export default connect(mapStateToProps, { resetPassword, fetchToken, clearError })(ResetPassword)
