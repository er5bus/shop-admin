import React from "react"
import { connect } from "react-redux"
import { Switch, Redirect } from "react-router-dom"

import { ProtectedRoute } from "./../../../components/routes"

import BaseLayout from "./components/BaseLayout"

import routes from "./../../../routes"

import adminRoutes from "./../routes"

const AdminLayout = ({ isAuthenticated }) => {

  return (
    <>
      { !isAuthenticated && <Redirect to={routes.auth.path} /> }
      { isAuthenticated &&
        <BaseLayout routesMenu={adminRoutes} homeURL={adminRoutes.home.path}>
          <Switch>
            { Object.keys(adminRoutes).map((key, i) => <ProtectedRoute key={i} { ...adminRoutes[key] }  />) }
            <Redirect from="*" to={ adminRoutes.home.path }/>
          </Switch>
        </BaseLayout>
      }
    </>
  )
}


const mapStateToProps = state => state.common.auth

export default connect(mapStateToProps)(AdminLayout)
