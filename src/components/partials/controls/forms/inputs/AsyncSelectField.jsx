import React, {useEffect, useMemo, useState} from "react"
import {FormattedMessage} from "react-intl"
import _ from "lodash"
import ReactSelect from "react-select/async"
import { FieldError, useFieldCSSClasses } from "./FieldError"

const Select = ({
  label,
  placeholder,
  onInputChange,
  loadOptions=f=>f,
  field,
  multiple=false,
  required = false,
  form
}) => {

  const [selectedOptions, setSelectedOptions] = useState([])
  const [defaultOptions, setDefaultOptions] = useState([])
  const fieldCSSClasses = useFieldCSSClasses(form.touched, form.errors, field.name)

  const onSelectChange =(option) => {
    if (_.has(option, 'value')){
      form.setFieldValue(field.name, option.value)
      setSelectedOptions(_.uniqWith([...selectedOptions, option], _.isEqual))
    }
  }

  useEffect(() => {
    if (field.value && !selectedOptions.some((option) => option.value === field.value)){
      loadOptions(field.value, setSelectedOptions, field.value)
    }
  }, [field.value, loadOptions, setSelectedOptions, selectedOptions])

  useEffect(() => {
    if (_.isFunction(loadOptions) && _.isEmpty(defaultOptions)){
      loadOptions(field.value, setDefaultOptions)
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
    <div className="form-group">
      { label && <label>{label} { (required && " *") }</label> }
      <ReactSelect
        className={fieldCSSClasses}
        placeholder={placeholder}
        options={selectedOptions}
        name={field.name}
        value={selectedValues || ''}
        onChange={onSelectChange}
        onBlur={field.onBlur}
        loadOptions={loadOptions}
        onInputChange={onInputChange}
        noOptionsMessage={() => <FormattedMessage id="GENERAL.SELECT.NO_OPTIONS" />}
        defaultOptions={defaultOptions}
        isSearchable
        cacheOptions
      />
      <FieldError fieldName={field.name} />
    </div>
  )
}


export default Select
