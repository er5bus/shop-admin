import _ from "lodash"


export const isPermittedPermission = (can, permissions=[]) => {
  const userPermission = _.isArray(permissions) ? permissions.map((permission) => permission.codename) : []

  if (_.isEmpty(can)){
    return true
  }

  if (!_.isEmpty(can) && !_.isArray(can) && userPermission.includes(can)){
    return true
  }

  if (!_.isEmpty(can) && _.isArray(can) && can.every((permission) => userPermission.includes(permission))){
    return true
  }

  return false
}


export const isPermittedModule = (can, permissions=[]) => {

  const userPermission = _.isArray(permissions) ? permissions.map((permission) => permission.module): []
  if (!_.isEmpty(can) && !_.isArray(can) && userPermission.includes(can)){
    return true
  }

  if (!_.isEmpty(can) && _.isArray(can) && can.every((permission) => userPermission.includes(permission))){
    return true
  }

  return false
}
