import React, { createContext, useContext, useEffect, useState } from 'react'
import { isEqual, isArray, isEmpty } from 'lodash'
import { VALIDATION_ERROR_CODES } from '../../../../../constants'
import { getAttr } from '../../../../../helpers'

export const FormUIContext = createContext()

export const useFormUIContext = () => {
  return useContext(FormUIContext)
}

export const FormUIProvider = ({ children, error }) => {
  const [baseFields, setBaseFields] = useState({})
  const [allFields, setAllFields] = useState([])
  const [validationFields, setValidationFields] = useState([])
  const [isSubmitted, setSubmitted] = useState(false)
  const [formError, setFormError] = useState({})

  useEffect(() => {
    if (!isEmpty(error)) {
      const { status, data = {} } = error
      const { code = undefined } = data

      if (status === 400 && !code) {
        const errors = {}
        Object.keys(data).forEach((fieldName) => {
          data[fieldName].forEach((obj) => {
            if (Object.keys(obj).every(key => !isArray(obj[key]))) {
              errors[fieldName] = VALIDATION_ERROR_CODES[obj.code] || 'ERROR.CODE.VALIDATION.INVALID'
            } else {
              errors[fieldName] = errors[fieldName] || []
              Object.keys(obj).forEach(nestedFieldName => {
                if (isArray(obj[nestedFieldName])) {
                  errors[fieldName].push({
                    [nestedFieldName]: obj[nestedFieldName].map((val) => VALIDATION_ERROR_CODES[val.code] || 'ERROR.CODE.VALIDATION.INVALID').join(',')
                  })
                }
              })
            }
          })
        })
        setFormError(errors)
      }
    }
    // eslint-disable-next-line
  }, [error])

  const getFieldError = (fieldName) => getAttr(formError, fieldName, undefined)

  const setIsSubmitted = (submit) => {
    if (submit){
      setFormError({})
    }
    setSubmitted(submit)
  }

  const setFields = (newFields, show) => {
    if (!isEqual(allFields, newFields)) {
      newFields.forEach((field) => {
        baseFields[field.name] = { field, show }
      })
      setBaseFields(baseFields)
      setAllFields(Object.values(baseFields).map(obj => obj.field))
      setValidationFields(Object.values(baseFields).filter(obj => obj.show).map(obj => obj.field))
    }
  }

  const value = {
    allFields,
    getFieldError,
    validationFields,
    isSubmitted,
    error,
    setIsSubmitted,
    setFields,
  }

  return (
    <FormUIContext.Provider value={value}>
      {children}
    </FormUIContext.Provider>
  )
}
