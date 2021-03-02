import React, {useEffect, useState, useMemo} from "react"
import {FormattedMessage} from "react-intl"
import _ from "lodash"
import Select from "react-select/creatable"
import { FieldError, useFieldCSSClasses } from "./FieldError"


const CreatableSelect = ({
  label,
  placeholder,
  options=[],
  multiple=false,
  loadOptions,
  saveOptions,
  field,
  form
}) => {

  const fieldCSSClasses = useFieldCSSClasses(form.touched, form.errors, field.name)
  const [selectedOptions, setSelectedOptions] = useState([])

  const onSelectChange =(option, actionMeta) => {
    let choices = ""
    const newOptions = _.isArray(option) ? option.filter((choice) => choice.__isNew__) : []
    if (!_.isArray(option) && _.has(option, "value")){
      choices = option.value
    }else if (_.isArray(option)) {
      choices = option.map((choice) => choice.value)
    } 
    if (!_.isEmpty(newOptions)){
      setSelectedOptions(_.uniqBy([ ...selectedOptions, ...newOptions ], "value"))
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
    
    if (!_.isEmpty(field.value)){
      setSelectedOptions([{ value: field.value, label: field.value }])
    }

    if (!_.isEmpty(field.value) && _.isArray(field.value)){
      setSelectedOptions(field.value.map((value) => ({ value, label: value })))
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
    return multiple ? [] : ""
  }, [field.value, selectedOptions, multiple])

  return (
    <div className="form-group">
      { label && <label>{label}</label> }
      <Select
        className={fieldCSSClasses}
        placeholder={placeholder}
        options={selectedOptions}
        name={field.name}
        value={selectedValues}
        onChange={onSelectChange}
        onBlur={field.onBlur}
        isMulti={multiple}
        noOptionsMessage={() => <FormattedMessage id="GENERAL.SELECT.NO_OPTIONS" />}
        formatCreateLabel={(inputValue) => <><FormattedMessage id="GENERAL.SELECT.CREATE" /> "{ inputValue }"</>}
      />
      <FieldError fieldName={field.name} />
    </div>
  )
}


export default CreatableSelect
