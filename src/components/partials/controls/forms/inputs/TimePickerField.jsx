import React, {useEffect} from "react"
import _ from "lodash"
import { FieldError, useFieldCSSClasses } from "./FieldError"
import {hoursUIHelper, minuteUIHelper} from "../../../../../modules/admin/UIHelpers"

const DatePickerField = ({
  field, // { name, value, onChange, onBlur }
  form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  inputGroupClassName = "form-group",
  inputClassName = "custom-select d-block w-100",
  format="HH:mm",
  required = false,
}) => {

  const { touched, errors } = form

  const fieldCSSClasses = useFieldCSSClasses(touched, errors, field.name)

  const hours = hoursUIHelper()
  const minutes = minuteUIHelper()

  useEffect(() => {
    if (_.isString(field.value) && field.value){
      const res = field.value.split(":")
      if (document.getElementById( "hour" + res[0] + field.name)) {
        document.getElementById( "hour" + res[0] + field.name).selected = true
      }
      if (document.getElementById( "minute" + res[1] + field.name)) {
        document.getElementById( "minute" + res[1] + field.name).selected = true
      }
    }else {
      form.setFieldValue(field.name, format.replace("HH", "00").replace("mm", "00"))
    }

    // eslint-disable-next-line
  }, [field.value, field.name])

  const onChangeHour = (e) => {
    const res = field.value.split(":")
    form.setFieldValue(field.name, format.replace("HH", e.currentTarget.value).replace("mm", res[1]))
  }

  const onChangeMinute = (e) => {
    const res = field.value.split(":")
    form.setFieldValue(field.name, format.replace("mm", e.currentTarget.value).replace("HH", res[0]))
  }

  //defaultValue={(currentDate && currentDate.isValid()) ? currentDate.toDate() : undefined}
  return (
    <div className={ inputGroupClassName }>
      {label && <label> { label} { (required && " *") }</label>}
      {/*value={moment(value, format)}*/}
      <div className="d-flex">
        <select onChange={onChangeHour} className={`${inputClassName} ${fieldCSSClasses}` }>
          {
            hours.map((hour) => (
              <option id={ "hour" + hour.value + field.name } value={hour.value}>{ hour.label }</option>
            ))
          }
        </select>
        <select onChange={onChangeMinute} className={`${inputClassName} ${fieldCSSClasses}` }>
          {
            minutes.map((minute) => (
              <option id={ "minute" + minute.value + field.name } value={minute.value}>{ minute.label }</option>
            ))
          }
        </select>
      </div>

      <FieldError fieldName={field.name} />
    </div>
  )
}

export default DatePickerField
