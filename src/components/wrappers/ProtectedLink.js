import React from "react"
import {connect} from "react-redux"

import {isPermittedPermission} from "./../../helpers"


const ProtectedLink = ({ rule: { can } = {}, isSuperuser, permissions, children, dispatch, ...props }) => {

  if (!isSuperuser && !isPermittedPermission(can, permissions)){
    return React.cloneElement(
      children, 
      { ...props, onClick: () => console.log("Permission Denied"), style: { opacity: 0.4, cursor: "not-allowed" } }
    )
  }
  return React.cloneElement(children, props)
}


const mapStateToProps = (state) => {
  const { isSuperuser, permissions } = state.common.auth
  return { isSuperuser, permissions }
}

export default connect(mapStateToProps)(React.memo(ProtectedLink))
