import React, { createContext, useContext, useState, useCallback } from "react"
import { isEqual, isFunction } from "lodash"

const ProductsUIContext = createContext()

export function useProductsUIContext() {
  return useContext(ProductsUIContext)
}

export const ProductsUIConsumer = () => ProductsUIContext.Consumer

export function ProductsUIProvider({ productsUIEvents, children }) {
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
    ...productsUIEvents
  }

  return (
    <ProductsUIContext.Provider value={value}>
      {children}
    </ProductsUIContext.Provider>
  )
}
