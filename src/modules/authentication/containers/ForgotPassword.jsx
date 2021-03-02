import React from "react"
import { connect } from "react-redux"
import { FormattedMessage } from "react-intl"

import ForgotPasswordFrom from "./components/ForgotPasswordForm"

import { FormattedError, FormattedSuccess } from "./../../../components/partials/controls"
import { forgotPassword, clearError } from "./../store/actions"


class ForgotPassword extends React.Component {

  componentDidMount() {
    this.props.clearError()
  }

  onSubmit = (values) => {
    this.props.forgotPassword(values)
  }

  render () {

    const { isLoading, error, success } = this.props

    return (
      <>
        <div className="login-form login-forgot" style={{ display: "block" }}>
          {/* begin:Header */}
          <div className="text-center mb-10 mb-lg-20">
            <h3 className="font-size-h1"> <FormattedMessage id="AUTH.FORGOT.TITLE" /></h3>
            <div className="text-muted font-weight-bold">
              <FormattedMessage id="AUTH.FORGOT.DESC" />
            </div>
          </div>
          {/* end:Header */}
          {/* begin:Alert */}
          { error && <FormattedError error={error} onClose={this.props.clearError} /> }
          {/* end:Alert */}
          {/* begin:Alert */}
          { success && <FormattedSuccess msg={"AUTH.FORGOT.SUCCESS"} onClose={this.props.clearError} /> }
          {/* end:Alert */}
          <ForgotPasswordFrom isLoading={isLoading} onSubmit={this.onSubmit}  />
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => state.common.auth


export default connect(mapStateToProps, { forgotPassword, clearError })(ForgotPassword)
