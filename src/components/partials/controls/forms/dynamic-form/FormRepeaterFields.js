import React, {useEffect} from "react"
import _ from 'lodash'
import { FastField } from "formik"
import { Col } from "react-bootstrap"

import { FORM_COMPONENT, DEFAULT_TYPE } from "./../types/inputTypes"
import {useFormUIContext} from "../context/FormUIContext"


const FormRepeaterFields = (props) => {

  const { fields, index, show = true } = props

  const formUiProps = useFormUIContext()

  useEffect(() => {
    if (!_.isEmpty(fields) && formUiProps){
      formUiProps.setFields(fields, show)
    }
    // eslint-disable-next-line
  }, [fields, show])

  const renderField = _.memoize(({ name, index, component, ...props }) => (
    <FastField
      name={name.replace("[]", `[${index}]`)}
      component={FORM_COMPONENT[component] || DEFAULT_TYPE }
      { ...props }
    />
  ))

  const renderFields = React.useMemo(()=> (<>
    {fields.map((input, i) => {
      const { size = "12", validation, ...field } = input
      return (
        <Col className={!show ? "d-none" : "" } key={i} lg={size}>
          { renderField({
            ...field,
            index
          }) }
        </Col>
      )
    })}
  </>), [fields, index, show, renderField])

  return <>{ renderFields }</>
}

//<div >
export default FormRepeaterFields
