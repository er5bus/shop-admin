import React from "react"
import { connect } from "react-redux"

import { isPermittedPermission } from "./../../helpers"


const ProtectedContents = ({ rules = [], anonymous=false, isAuthenticated, isSuperuser, permissions, children }) => {

  const checkPermission = rules.some((rule) => (isAuthenticated && !anonymous && (isSuperuser || isPermittedPermission(rule.can, permissions))))

  if (!checkPermission){
    return <></>
  }

  return (<>{ children }</>)
}


const mapStateToProps = (state) => state.common.auth

export default connect(mapStateToProps)(React.memo(ProtectedContents))

