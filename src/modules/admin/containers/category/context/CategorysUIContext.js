import React, { createContext, useContext, useState, useCallback } from "react"
import { isEqual, isFunction } from "lodash"

const CategorysUIContext = createContext()

export function useCategorysUIContext() {
  return useContext(CategorysUIContext)
}

export const CategorysUIConsumer = () => CategorysUIContext.Consumer

export function CategorysUIProvider({ categorysUIEvents, children }) {
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
    ...categorysUIEvents
  }

  return (
    <CategorysUIContext.Provider value={value}>
      {children}
    </CategorysUIContext.Provider>
  )
}
