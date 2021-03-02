import React, {Component} from "react"
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"

import routes from "./../routes"
import {LayoutSplashScreen} from "../../../components/layout"

import { logout } from "./../store/actions"

class Logout extends Component {
  
  componentDidMount() {
    this.props.logout()
  }

  render() {
    const { isAuthenticated } = this.props
    return isAuthenticated ? <LayoutSplashScreen /> : <Redirect to={routes.login.path} />
  }
}

const mapStateToProps = (state) => state.common

export default connect(mapStateToProps, { logout })(Logout)
