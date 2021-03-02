import _ from "lodash"

import { HTTP_METHODS } from "./../../../../constants"
import { makeCall } from "./../../../../helpers"
import { store } from "./../../../../configureStore"


const FETCH_GROUPS_ENDPOINT = "/api/groups/all"

const formatGroups = (groups) => groups.map((group) => ({ label: group.name, permissions: _.map(group.displayPermissions, "codename"), value: group.id }) )


export const groupUIHelper = (callback=f=>f) => {

  const { token } = store.getState().common.auth || {}

  return new Promise((resolve, reject) =>
    makeCall(HTTP_METHODS.GET, FETCH_GROUPS_ENDPOINT, {}, {'Authorization': `Bearer  ${token.access}`}, {} )
    .then(resp => resolve(callback(formatGroups( resp.data ))))
    .catch(() => reject(callback([])))
  )
}
