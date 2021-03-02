import React, { useState, useEffect } from 'react'
import { useFormikContext } from 'formik'
import { FieldError } from "./FieldError"
import _ from 'lodash'

const Checkbox = ({ initialValue = false, field, form, hide = false, hideOn, condition = true, options, checkboxSize = 'lg', inputGroupClassName = 'form-group' }) => {
  const formik = useFormikContext()
  const [show, setShow] = useState(hide)

  useEffect(() => {
    const field = _.get(formik.values, hideOn, false)
    setShow(hide && field !== condition)

    // eslint-disable-next-line
  }, [formik])

  useEffect(() => {
    if (!show && formik.dirty) {
      form.setFieldValue(field.name, initialValue)
    }

    // eslint-disable-next-line
  }, [show, initialValue])

  useEffect(() => {
    if (field.value && document.getElementById(field.value + field.name)) {
      document.getElementById(field.value + field.name).checked = true
    }

    if (field.value === initialValue) {
      const ele = document.getElementsByName(field.name)
      for (let i = 0; i < ele.length; i++) {
        ele[i].checked = false
      }
    }
  }, [field.value, field.name, initialValue])

  const convertToThePerfectType = (value) => {
    if (!isNaN(value)) {
      return parseInt(value, 10)
    }
    if (value === "true" || value === "false") {
      return Boolean(value)
    }
    return value
  }

  const onChange = () => {
    const ele = document.getElementsByName(field.name)
    let hasCheckedValue = true
    for (let i = 0; i < ele.length; i++) {
      const currentValue =  convertToThePerfectType(ele[i].value)
      if (ele[i].checked) {
        hasCheckedValue = false
        form.setFieldValue(field.name, options.length > 1 ? [currentValue, ...(field.value || [])] : currentValue)
      }
    }

    if (hasCheckedValue) {
      form.setFieldValue(field.name, initialValue)
    }
  }

  return (
    <div className={inputGroupClassName + (show ? ' d-none' : ' ')}>
      {
        options.map((option) => (
          <label key={option.value} className={`checkbox checkbox-${checkboxSize} checkbox-single`}>
            <input
              name={field.name}
              onChange={onChange}
              id={option.value + field.name}
              type='checkbox'
              className={`${field.name}`}
              defaultChecked={field.value === option.value}
              value={option.value}
            />
            <span className='mx-1' />
            {option.label}
          </label>
        ))
      }
      <FieldError fieldName={field.name} />
    </div>
  )
}

export default Checkbox
