import React, { createContext, useContext, useState } from "react"

export const RouteUIContext = createContext()

export function useRouteUIContext() {
  return useContext(RouteUIContext)
}

export function RouteUIProvider({ children }) {

  const [showComponentWhen, setShowComponentWhen] = useState(false)

  const value = {
    showComponentWhen,
    setShowComponentWhen
  }

  return (
    <RouteUIContext.Provider value={value}>
      {children}
    </RouteUIContext.Provider>
  )
}
