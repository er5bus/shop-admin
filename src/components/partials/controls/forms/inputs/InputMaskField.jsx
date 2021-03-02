import React from "react"
import InputMaskBase from 'react-input-mask'
import MaterialInput from '@material-ui/core/Input';
import { FieldError, useFieldCSSClasses } from "./FieldError"


const InputMask = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  inputGroupClassName = "form-group",
  inputClassName = "form-control",
  mask,
  type = "text",
  required = false,
  ...props
}) => {

  const fieldCSSClasses = useFieldCSSClasses(touched, errors, field.name)

  return (
    <div className={ inputGroupClassName }>
      {label && <label> { label} { (required && " *") }</label>}
      <InputMaskBase mask={mask} {...field}>
        {(inputProps) => <MaterialInput
          {...inputProps}
          className={`${inputClassName} ${fieldCSSClasses}` }
          autoComplete="off"
          disableUnderline
          {...props}
        />
        }
      </InputMaskBase>
      <FieldError fieldName={field.name} />
    </div>
  )
}


export default InputMask
