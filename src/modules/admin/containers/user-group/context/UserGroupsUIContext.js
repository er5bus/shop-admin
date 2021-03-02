import React, { createContext, useContext, useState, useCallback } from "react"
import { isEqual, isFunction } from "lodash"

const UserGroupsUIContext = createContext()

export function useUserGroupsUIContext() {
  return useContext(UserGroupsUIContext)
}

export const UserGroupsUIConsumer = () => UserGroupsUIContext.Consumer

export function UserGroupsUIProvider({ userGroupsUIEvents, children }) {
  const [queryParams, setQueryParamsBase] = useState({})
  const [ids, setIds] = useState([])
  const setQueryParams = useCallback((nextQueryParams) => {
    setQueryParamsBase((prevQueryParams) => {
      if (isFunction(nextQueryParams)) {
        nextQueryParams = nextQueryParams(prevQueryParams)
      }

      if (isEqual(prevQueryParams, nextQueryParams)) {
        return prevQueryParams
      }

      return nextQueryParams
    })
  }, [])

  const value = {
    queryParams,
    setQueryParamsBase,
    ids,
    setIds,
    setQueryParams,
    ...userGroupsUIEvents
  }

  return (
    <UserGroupsUIContext.Provider value={value}>
      {children}
    </UserGroupsUIContext.Provider>
  )
}
