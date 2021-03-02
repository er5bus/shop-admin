import React, { createContext, useContext, useState } from "react"
import { isEqual } from "lodash"

export const DisplayUIContext = createContext()

export function useDisplayUIContext() {
  return useContext(DisplayUIContext)
}

export function DisplayUIProvider({ children }) {

  const [baseFields, setBaseFields] = useState({})
  const [fields, setAllFields] = useState([])
  const [object, setBaseObject] = useState()
  const [isFetching, setFetching] = useState(false)
  const [error, setError] = useState()

  const setFields = (newFields) => {
    if (!isEqual(fields, newFields)){
      newFields.forEach((field) => {
        baseFields[field.name] = field
      })
      setBaseFields(baseFields)
      setAllFields(Object.values(baseFields))
    }
  }

  const setObject = (newObj) => {
    if (!isEqual(object, newObj)){
      setBaseObject(newObj)
    }
  }

  const value = {
    fields,
    object,
    isFetching,
    error,
    setFields,
    setObject,
    setFetching,
    setError
  }

  return (
    <DisplayUIContext.Provider value={value}>
      {children}
    </DisplayUIContext.Provider>
  )
}
