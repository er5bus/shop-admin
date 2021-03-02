import React, {useEffect, useState} from "react"
import _ from "lodash"
import * as Yup from "yup"
import { Formik, Form, FastField } from "formik"
import { Row, Col } from "react-bootstrap"

import { FORM_COMPONENT, DEFAULT_TYPE } from "./../types/inputTypes"
import { createYupSchema, getStorage, setStorage } from "../../../../../helpers"
import {useFormUIContext} from "../context/FormUIContext"


const DynamicForm = (props) => {

  const { 
    children, 
    fields = [], 
    className, 
    saveForm=false, 
    clearValuesAfterSubmit, 
    saveFormName="", 
    validationSchema, 
    reset = false, 
    onChange, 
    onSubmit, 
    initialValues = {} 
  } = props
  
  const [savedValues, setSavedValues] = useState({})
  const [formikForm, setFormikForm] = useState(null)

  const formUiProps = useFormUIContext()

  useEffect(() => {
    if (!_.isEmpty(fields) && formUiProps){
      formUiProps.setFields(fields, true)
    }
    // eslint-disable-next-line
  }, [fields])

  useEffect(() => {
    if (saveForm){
      setSavedValues(getStorage(saveFormName))
    }

    // eslint-disable-next-line
  }, [])

  const saveFormValues = (values) => {
    setStorage(saveFormName, values)
    setSavedValues(values)
  }

  const fieldsValidation = React.useMemo(() =>  {
    return createYupSchema(formUiProps.validationFields)
  }, [formUiProps.validationFields])

  const renderField = _.memoize(({ name, component, ...props }) => (
    <FastField
      name={name}
      component={FORM_COMPONENT[component] || DEFAULT_TYPE }
      { ...props }
    />
  ))

  const renderFields = React.useMemo(()=> !_.isEmpty(fields) && (<Row>
    {fields.map((input, i) => {
      const { size = "12", validation, ...field } = input
      return (
        <Col key={i} lg={size}>
          { renderField(field) }
        </Col>
      )
    })}
  </Row>), [fields, renderField])

  const initialSnapshot = React.useMemo(() => {
    const snapshot = {}
    formUiProps.allFields.forEach(field => {
      if (!field.name.includes("[]")) {
        _.set(snapshot, field.name, _.get(initialValues, field.name, _.get(field, "initialValue", "")) )
      }
    })

    return snapshot

    // eslint-disable-next-line
  }, [formUiProps.allFields, initialValues])

  const handleSubmit = (values) => {
    //const submitedValues = {}
    /*Object.keys(values).forEach((key) => {
      if (initialSnapshot.hasOwnProperty(key)){
        submitedValues[key] = values[key]
      }
    })*/
    onSubmit(values)
    formUiProps.setIsSubmitted(true)
  }

  useEffect(() => {
    if (formikForm && clearValuesAfterSubmit && !reset){
      if (saveForm){
        saveFormValues({})
      }
      formikForm.resetForm(initialSnapshot)
    }
    // eslint-disable-next-line
  }, [clearValuesAfterSubmit, reset, formikForm])

  return (
    <>
      <Formik
        enableReinitialize={true}
        onSubmit={handleSubmit}
        onChange={onChange}
        onReset={reset && handleSubmit}
        validationSchema={Yup.isSchema(validationSchema) ? validationSchema : fieldsValidation }
        initialValues={ Object.assign(initialSnapshot, _.isEmpty(initialValues) ? savedValues : initialValues) }
      >
        {(form) => {
          if (saveForm && _.isEmpty(initialValues) && form.dirty) {
            saveFormValues(form.values)
          }
          if (_.isEmpty(formikForm) && !form.dirty){
            setFormikForm(form)
          }
          return (
            <Form className={className} onSubmit={form.handleSubmit}>
              { renderFields }
              { children }
            </Form>
          )
        }}
      </Formik>
    </>
  )
}

export default React.memo(DynamicForm)
