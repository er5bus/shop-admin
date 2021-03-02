import React, { createContext, useContext, useState, useCallback } from "react"
import { isEqual, isFunction } from "lodash"
import {IS_DELETED, IS_DELETED_INIT_VALUE} from "./../store/constants"

const UsersUIContext = createContext()

export function useUsersUIContext() {
  return useContext(UsersUIContext)
}


export const UsersUIConsumer = () => UsersUIContext.Consumer

export function UsersUIProvider({ usersUIEvents, children }) {

  const [queryParams, setQueryParamsBase] = useState({[IS_DELETED]: IS_DELETED_INIT_VALUE})
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
    ...usersUIEvents
  }

  return (
    <UsersUIContext.Provider value={value}>
      {children}
    </UsersUIContext.Provider>
  )
}
