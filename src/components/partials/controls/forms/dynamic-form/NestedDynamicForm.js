import React from "react"
import _ from "lodash"
import * as Yup from "yup"
import { Formik, Form, FastField } from "formik"
import { Row, Col } from "react-bootstrap"

import { FORM_COMPONENT, DEFAULT_TYPE } from "./../types/inputTypes"
import { createYupSchema } from "../../../../../helpers"


const NestedDynamicForm = (props) => {

  const { 
    children, 
    fields = [], 
    className, 
    validationSchema, 
    onChange, 
    onSubmit, 
    saveRef,
    initialValues = {} 
  } = props
  
  const nestedFields = React.useMemo(() => {
    const formChildrens = [ React.Children.toArray(children) ]
    let fields = []

    while (formChildrens.length > 0){
      const formChildren = formChildrens.pop()
      for (let child of formChildren) {
        if (!_.isEmpty(child) && _.isArray(_.get(child, "props.fields", false))){
          fields = [ ...fields, ..._.get(child, "props.fields", []) ]
        }
        if (!_.isEmpty(child) && _.isArray(_.get(child, "props.children", false))){
          formChildrens.push(_.get(child, "props.children", []))
        }
      }
    }
    return fields
  }, [children])

  
  const fieldConstraints = React.useMemo(() => {
    const formChildrens = [ React.Children.toArray(children) ]
    let fields = []

    while (formChildrens.length > 0){
      const formChildren = formChildrens.pop()
      for (let child of formChildren) {
        if (!_.isEmpty(child) && _.isArray(_.get(child, "props.fields", false)) && _.get(child, "props.show", false) ){
          fields = [ ...fields, ..._.get(child, "props.fields", []) ]
        }
        if (!_.isEmpty(child) && _.isArray(_.get(child, "props.children", false))){
          formChildrens.push(_.get(child, "props.children", []))
        }
      }
    }
    return fields
  }, [children])

  const renderField = _.memoize(({ name, component, ...props }) => (
    <FastField
      name={name}
      component={FORM_COMPONENT[component] || DEFAULT_TYPE }
      { ...props }
    />
  ))

  const fieldsValidation = React.useMemo(() =>  {
    const allFields = [...fields, ...fieldConstraints]
    return createYupSchema(allFields)
  }, [fields, fieldConstraints])

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
    const allFields = [...fields, ...nestedFields]
    //let arrayIndex = 0
    allFields.forEach(field => {
      if (!field.name.includes("[]")) {
        _.set(snapshot, field.name, _.get(initialValues, field.name, _.get(field, "initialValue", "")) )
      }/*else {
        //const snapshotArray = _.get(initialValues, field.name.substr(0, field.name.indexOf([])), [])
        const fieldName = field.name.replace("[]", `[${arrayIndex}]`)
        _.set(snapshot, fieldName, _.get(initialValues, fieldName, _.get(field, "initialValue", "")) )
        //arrayIndex++
      }*/
    })

    return { ...snapshot, ...initialValues }

    // eslint-disable-next-line
  }, [fields, initialValues, nestedFields])

  const handleSubmit = (values) => {
    onSubmit(values)
  }

  return (
    <>
      <Formik
        enableReinitialize={true}
        onSubmit={handleSubmit}
        onChange={onChange}
        validationSchema={Yup.isSchema(validationSchema) ? validationSchema : fieldsValidation }
        initialValues={ initialSnapshot }
      >
        {(form) => (
            <Form className={className} onSubmit={form.handleSubmit}>
              { renderFields }
              { children }
              { saveRef && <input ref={saveRef} type="submit" className="d-none" />}
            </Form>
          )
        }
      </Formik>
    </>
  )
}

export default React.memo(NestedDynamicForm)

