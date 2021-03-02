import React, {useEffect, useState} from "react"
import { FieldError, useFieldCSSClasses } from "./FieldError"
import { useFormikContext } from "formik"
import _ from "lodash"

const Radio = ({ 
  label, 
  field, 
  form, 
  options, 
  hide=false, 
  hideOn, 
  condition=true, 
  required=false, 
  inputGroupClassName = "form-group", 
  inputClassName = "custom-control-input" 
}) => {

  const formik = useFormikContext()
  const [show, setShow] = useState(hide)
  const fieldCSSClasses = useFieldCSSClasses(form.touched, form.errors, field.name)

  useEffect(() => {
    if (hide) {
      const fieldValue = _.get(formik.values, hideOn, false)
      setShow( fieldValue !== condition )
    }

    //  eslint-disable-next-line
  }, [formik, show])

  useEffect(() => {
    if (!show){
      //form.setFieldValue(field.name, undefined)
    }

    //  eslint-disable-next-line
  }, [show])

  const onChange = (event) => {
    form.setFieldValue(field.name, event.target.value)
  }

  useEffect(() => {
    if (field.value){
      document.getElementById(field.value + field.name).checked = true
    }else if (!hide && _.isEmpty(field.value)){
      const ele = document.getElementsByName(field.name)
      for(let i=0; i<ele.length; i++){
        ele[i].checked = false
      }
    }
  }, [field.value, hide, field.name])

  return (
    <div className={inputGroupClassName + (show ? " d-none" : " ") }>
      { label && <label>{ label } { (required && " *") }</label> }
      {
        options.map((option, i) => (
          <div key={i}>
            <div className={`custom-control custom-radio ${fieldCSSClasses}`}>
              <input 
                onChange={onChange} 
                name={field.name} 
                type="radio" 
                id={option.value + field.name} 
                className={inputClassName + ` ${field.name}`}
                value={option.value} 
              />
              <label htmlFor={option.value + field.name} className="custom-control-label">{option.label}</label>
            </div>
          </div>
        ))
      }
      <FieldError fieldName={field.name} />
    </div>
  )
}

export default Radio
