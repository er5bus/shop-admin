import React from "react"
import _ from "lodash"
import { useFormikContext } from "formik"
import Datetime from "react-datetime";
import moment from "moment";
import { FieldError, useFieldCSSClasses } from "./FieldError"

import "moment/locale/ar-tn";
import "moment/locale/fr";

import { getLang } from "./../../../../../i18n"
import { FR, AR } from "./../../../../../constants"

import "react-datetime/css/react-datetime.css";


const locale = {
  [FR]: "fr",
  [AR]: "ar-tn"
}

const DatePickerField = ({
  field, // { name, value, onChange, onBlur }
  form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  inputGroupClassName = "form-group",
  inputClassName = "form-control-date-picker form-control",
  type = "date",
  format="DD/MM/YYYY",
  placeholder,
  dateFormat=true,
  timeFormat=false,
  required = false,
  maxLength=256,
  hide=false, 
  initialValue=null,
  hideOn, 
  condition=true,
  ...props
}) => {
  
  const { touched, errors } = form
  const { value } = field
  const [currentDate, setCurrentDate] = React.useState(undefined)
  const fieldCSSClasses = useFieldCSSClasses(touched, errors, field.name)

  const formik = useFormikContext()
  const [show, setShow] = React.useState(hide)

  React.useEffect(() => {
    const field = _.get(formik.values, hideOn, false)
    setShow( field !== condition )

    // eslint-disable-next-line
  }, [formik])

  React.useEffect(() => {
    if (!show){
      form.setFieldValue(field.name, initialValue)
    }

    // eslint-disable-next-line
  }, [show])

  React.useEffect(() => {
    let date
    if (_.isString(value) && !_.isEmpty(value)){
      date = moment(value, format)
    }
    if (_.isDate(value)){
      date = moment(value)
    }

    if (date){
      setCurrentDate(date)
      form.setFieldValue(field.name, moment(date).format(format))
    }else {
      setCurrentDate(undefined)
      form.setFieldValue(field.name, initialValue)
    }

    // eslint-disable-next-line
  }, [value, format])

  return (
    <div className={inputGroupClassName + (!show ? " d-none" : " ") }>
      {label && <label> { label} { (required && " *") }</label>}
      <Datetime 
        initialValue={(currentDate && currentDate.isValid()) ? currentDate.toDate() : undefined}
        dateFormat={ dateFormat && format }
        timeFormat={timeFormat}
        closeOnSelect={true}
        inputProps={{
          placeholder,
          readOnly: true,
          autocomplete: "off",
          className: `${inputClassName} ${fieldCSSClasses}`,
          name: field.name,
          value: (currentDate && currentDate.isValid()) ? currentDate.format(format) : ""
        }}
        locale={locale[getLang()]}
        input={true}
        onChange={(date) => {
          setCurrentDate(date)
          form.setFieldValue(field.name, moment(date).format(format)) 
        }}
        { ...props }
      />
      <FieldError fieldName={field.name} />
    </div>
  )
}

export default DatePickerField
