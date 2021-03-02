import React from "react"
import { connect } from "react-redux"

import { isPermittedPermission } from "./../../helpers"


const ProtectedContent = ({ rule : { anonymous = true, can }, isAuthenticated = false, isSuperuser, permissions, children }) => {

  if ((!isAuthenticated && !anonymous) || (!isSuperuser && !isPermittedPermission(can, permissions)) ){
    return <></>
  }

  return (<>{ children }</>)
}


const mapStateToProps = (state) => state.common.auth

export default connect(mapStateToProps)(React.memo(ProtectedContent))
