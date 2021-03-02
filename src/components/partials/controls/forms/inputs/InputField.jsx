import React, {useEffect, useState} from "react"
import _ from "lodash"
import { useFormikContext } from "formik"
import { FieldError, useFieldCSSClasses } from "./FieldError"

const Input = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  inputGroupClassName = "form-group",
  inputClassName = "form-control",
  type = "text",
  required = false,
  maxLength=256,
  hide = false, 
  hideOn, 
  form,
  condition = true,
  ...props
}) => {

  const formik = useFormikContext()
  const [show, setShow] = useState(hide)
  const fieldCSSClasses = useFieldCSSClasses(touched, errors, field.name)

  useEffect(() => {
    const field = _.get(formik.values, hideOn, false)
    setShow(hide && field !== condition)

    // eslint-disable-next-line
  }, [formik])

  useEffect(() => {
    if (!show && formik.dirty) {
      form.setFieldValue(field.name, "")
    }

    // eslint-disable-next-line
  }, [show])

  return (
    <div className={inputGroupClassName + (show ? ' d-none' : ' ')}>
      {label && <label> { label} { (required && " *") }</label>}
      <input
        type={type}
        className={`${inputClassName} ${fieldCSSClasses}` }
        autoComplete="off"
        maxLength={maxLength}
        {...field}
        {...props}
      />
      <FieldError fieldName={field.name} />
    </div>
  )
}


export default Input
