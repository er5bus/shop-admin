/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import {connect} from "react-redux"
import { Switch, Redirect, withRouter, useHistory} from "react-router-dom"

import routes from "./../../../routes"
import authenticationRoutes from "./../routes"

import { ProtectedRoute } from "./../../../components/routes"

import AuthenticationLayout from "./components/AuthenticationLayout"

const Layout = ({ isAuthenticated }) => {

  const history = useHistory()

  React.useEffect( () => {
    if (isAuthenticated){
      history.push(routes.admin.path)
    }
  }, [isAuthenticated, history] )

  return (
    <AuthenticationLayout>
      <Switch>
        { Object.keys(authenticationRoutes).map((key, i) => 
          <ProtectedRoute
            key={i} 
            { ...authenticationRoutes[key] } 
          />
        ) }
        <Redirect from="*" to={ authenticationRoutes.login.path } />
      </Switch>
    </AuthenticationLayout>
  )
}

const mapStateToProps = (state) => state.common.auth

export default connect(mapStateToProps)(withRouter(Layout))
