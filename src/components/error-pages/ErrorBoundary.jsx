import React from "react"
import { ForbiddenError } from "./../../helpers"

import ForbiddenPage from "./ForbiddenPage"
import InternalErrorPage from "./InternalErrorPage"


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { internalError: false, forbiddenError: false, error: null, errorInfo: null }
  }

  componentDidCatch(error, errorInfo) {
    if (error instanceof ForbiddenError){
      this.setState({ forbiddenError: true })
    }else {
      this.setState({ internalError: true })
    }
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
    console.group()
    console.log(error)
    console.log(errorInfo.componentStack)
    console.groupEnd()
  }

  render() {
    const { internalError, forbiddenError } = this.state
    if (internalError) {
      return <InternalErrorPage />
    }else if (forbiddenError){
      return <ForbiddenPage />
    }
    // Normally, just render children
    return this.props.children
  }
}


export default ErrorBoundary
