import React, { createContext, useContext, useState, useCallback } from "react"
import { isEqual, isFunction } from "lodash"

const OrdersUIContext = createContext()

export function useOrdersUIContext() {
  return useContext(OrdersUIContext)
}

export const OrdersUIConsumer = () => OrdersUIContext.Consumer

export function OrdersUIProvider({ ordersUIEvents, children }) {
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
    ...ordersUIEvents
  }

  return (
    <OrdersUIContext.Provider value={value}>
      {children}
    </OrdersUIContext.Provider>
  )
}
