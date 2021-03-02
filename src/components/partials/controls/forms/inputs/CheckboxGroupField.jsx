import React, {useEffect, useState} from "react"
import { injectIntl } from "react-intl"
import _ from "lodash"
import { useFormikContext } from "formik"
import { withStyles } from "@material-ui/core/styles"
import FormGroup from "@material-ui/core/FormGroup"
import MuiAccordion from "@material-ui/core/Accordion"
import MuiAccordionSummary from "@material-ui/core/AccordionSummary"
import MuiAccordionDetails from "@material-ui/core/AccordionDetails"
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { FieldError, useFieldCSSClasses } from "./FieldError"

const Accordion = withStyles({
  root: {
    width: "100%",
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none !important",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion)

const AccordionSummary = withStyles({
  root: {
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary)

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails)


const CheckboxGroup = ({
  label,
  loadOptions=f=>f,
  translateLabels=false,
  disabledOptionsRef,
  field,
  intl,
  form
}) => {

  const fieldCSSClasses = useFieldCSSClasses(form.touched, form.errors, field.name)
  const formik = useFormikContext()
  const [selectedOptions, setSelectedOptions] = useState([])
  const [disabledOptions, setDisabledOptions] = useState([])

  useEffect(() => {
    loadOptions(setSelectedOptions)
  }, [loadOptions])

  useEffect(() => {
    setDisabledOptions(_.get(formik.values, disabledOptionsRef, []))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ disabledOptionsRef && _.get(formik.values, disabledOptionsRef, false) ] )

  const onChange = _.memoize((value) => {
    if (_.isArray(value) && _.inRange(_.intersection(value, field.value).length, 1, value.length -1)){
      form.setFieldValue(field.name, _.union(field.value, value))
    }else {
      const options = _.isArray(value) ? value : [value]
      form.setFieldValue(field.name, _.xor( (field.value || []), options  ))
    }
  })

  const isChecked =_.memoize((option) => {
    return option.options.some((nestedOption) => (field.value||[]).includes(nestedOption.value)) || _.includes(disabledOptions, ..._.map(option.options, "value"))
  })

  const isDisabled = _.memoize((option) => {
    return _.includes(disabledOptions, ..._.map(option.options, "value")) 
  } )

  const isIndeterminate = _.memoize((permissionGroup) => {
    const disabledNestedOptions = permissionGroup.options.filter((nestedOption) => disabledOptions.includes(nestedOption.value) )
    const nestedOptions = permissionGroup.options.filter((nestedOption) => (field.value || []).includes(nestedOption.value) )
    return (nestedOptions.length > 0 && nestedOptions.length < permissionGroup.options.length) || 
      (disabledNestedOptions.length > 0 && permissionGroup.options.length > disabledNestedOptions.length)
  })

  const isDisabledOption = _.memoize((option) => {
    return _.includes(disabledOptions, option)
  })

  const isCheckedOption = _.memoize((option) => {
    return _.includes(field.value, option) || _.includes(disabledOptions, option)
  })

  return (
    <>
      { label && <label>{ label }</label> }
      <div className="pt-3">
        { selectedOptions.map( (option, i) => <Accordion key={i} className={fieldCSSClasses} >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-label="Expand"
            id={i}
          >
            <FormControlLabel
              onChange={() => onChange( option.options.map((nestedOption) => nestedOption.value ))}
              control={
                <Checkbox
                  disabled={isDisabled(option)}
                  indeterminate={isIndeterminate(option)}
                  checked={isChecked(option)}
                />
              }
              label={ !translateLabels ? option.label : intl.formatMessage({ id: option.label }) }
            />
          </AccordionSummary>
          <AccordionDetails>
            { option.options.map((nestedOption, i) =>
            <FormGroup key={i}>
              <FormControlLabel key={i} control={
                <Checkbox 
                  disabled={isDisabledOption(nestedOption.value)} 
                  checked={isCheckedOption(nestedOption.value)} 
                  onChange={() => onChange(nestedOption.value)}  
                  value={nestedOption.value}  
                />
                } label={ !translateLabels ? nestedOption.label : intl.formatMessage({ id: nestedOption.label }) } />
            </FormGroup>
            ) }
          </AccordionDetails>
        </Accordion>
        )}
      </div>
      <FieldError fieldName={field.name} />
    </>
  )
}


export default injectIntl(CheckboxGroup)
