import React, {useEffect, useState, useMemo} from "react"
import {FormattedMessage} from "react-intl"
import _ from "lodash"
import ReactSelect from "react-select"
import { FieldError, useFieldCSSClasses } from "./FieldError"
import {Button} from "react-bootstrap"
import {FormModal} from "../.."

const Select = ({
  label,
  placeholder,
  onInputChange,
  options=[],
  multiple=false,
  loadOptions,
  saveOptions,
  required=false,
  field,
  form,
  hide=false,
  hideOn,
  condition=true,
  inputGroupClassName = "form-group mb-0 mx-2",
}) => {

  const fieldCSSClasses = useFieldCSSClasses(form.touched, form.errors, field.name)
  const [selectedOptions, setSelectedOptions] = useState([])
  const [show, setShow] = useState(hide)

  const onSelectChange =(option) => {
    let choices = ""
    if (!_.isArray(option) && _.has(option, "value")){
      choices = option.value
    }else if (_.isArray(option)) {
      choices = option.map((choice) => choice.value)
    }
    form.setFieldValue(field.name, choices)
  }

  useEffect(() =>  {
    let choices = []
    if (!_.isArray(field.value) && !_.isEmpty(field.value) && _.isArray(selectedOptions)){
      choices = [selectedOptions.find(option => option.value === field.value)]
    }
    if (_.isArray(field.value) && _.isArray(selectedOptions)){
      choices = selectedOptions.filter(option => field.value.includes(option.value))
    }

    if (!_.isEmpty(saveOptions) && !_.isEmpty(saveOptions.ref)){
      form.setFieldValue(
        saveOptions.ref,
        _.flatten(_.map(choices, saveOptions.attr))
      )
    }
  }, [field.value, selectedOptions, saveOptions, form])

  useEffect(() => {
    if (_.isPlainObject(field.value) && _.has(field.value, "id")){
      form.setFieldValue(field.name, _.get(field.value, "id", ""))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_.isPlainObject(field.value)])

  useEffect(() => {
    if (_.isFunction(loadOptions) && _.isEmpty(selectedOptions)){
      loadOptions(setSelectedOptions)
    }
    if (options && _.isEmpty(selectedOptions)){
      setSelectedOptions(options)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const selectedValues = useMemo(() => {
    if (!_.isArray(field.value) && _.isArray(selectedOptions)){
      return selectedOptions.find(option => option.value === field.value)
    }
    if (_.isArray(field.value) && _.isArray(selectedOptions)){
      return selectedOptions.filter(option => field.value.includes(option.value))
    }

    return field.value || (multiple ? [] : "")
  }, [field.value, selectedOptions, multiple])

  return (
    <div className="d-flex align-items-end mb-4">
      <FormModal show={show} title={label} onHide={() => setShow(false)}>
        { ({ saveRef }) => (
          <div /> 
        ) }
      </FormModal>
      <div className={inputGroupClassName}>
        { label && <label>{label} {required && "*"}</label> }
        <ReactSelect
          className={fieldCSSClasses}
          placeholder={placeholder}
          options={selectedOptions}
          name={field.name}
          value={selectedValues || ""}
          onChange={onSelectChange}
          onBlur={field.onBlur}
          onInputChange={onInputChange}
          isMulti={multiple}
          noOptionsMessage={() => <FormattedMessage id="GENERAL.SELECT.NO_OPTIONS" />}
          isSearchable
          isClearable
        />
        <FieldError fieldName={field.name} />
      </div>
      <div class="ml-auto">
        <Button onClick={ () => setShow(true) }><FormattedMessage id="GENERAL.ADD" /></Button>
      </div>
    </div>
  )
}


export default Select
