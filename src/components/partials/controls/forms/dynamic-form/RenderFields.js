import React, {useEffect} from "react"
import _ from 'lodash'
import { FastField } from "formik"
import { Row, Col } from "react-bootstrap"

import { FORM_COMPONENT, DEFAULT_TYPE } from "./../types/inputTypes"
import {useFormUIContext} from "../context/FormUIContext"


const RenderFields = (props) => {

  const { fields, show = true } = props

  const formUiProps = useFormUIContext()

  useEffect(() => {
    if (!_.isEmpty(fields) && formUiProps){
      formUiProps.setFields(fields, show)
    }
    // eslint-disable-next-line
  }, [fields, show])

  const renderField = _.memoize(({ name, component, ...props }) => (
    <FastField
      name={name}
      component={FORM_COMPONENT[component] || DEFAULT_TYPE }
      { ...props }
    />
  ))

  const renderFields = React.useMemo(()=> (<Row>
    {fields.map((input, i) => {
      const { size = "12", validation, ...field } = input
      return (
        <Col key={i} lg={size}>
          { renderField(field) }
        </Col>
      )
    })}
  </Row>), [fields, renderField])

  return <div className={!show ? "d-none" : "" }>{ renderFields }</div>
}

export default RenderFields
