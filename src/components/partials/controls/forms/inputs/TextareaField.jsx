import React from "react"
import { FieldError, useFieldCSSClasses } from "./FieldError"

const Textarea = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  inputGroupClassName = "form-group",
  inputClassName = "form-control",
  withFeedbackLabel = true,
  customFeedbackLabel,
  required = false,
  ...props
}) => {

  const fieldCSSClasses = useFieldCSSClasses(touched, errors, field.name)

  return (
    <div className={ inputGroupClassName }>
      {label && <label>{label} { (required && " *") }</label>}
      <textarea
        className={`${inputClassName} ${fieldCSSClasses}` }
        {...field}
        {...props}
      />
      <FieldError fieldName={field.name} />
    </div>
  )
}


export default Textarea
