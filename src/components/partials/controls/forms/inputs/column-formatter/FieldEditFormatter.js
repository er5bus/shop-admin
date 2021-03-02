import React from "react"
import _ from "lodash"
import { FormattedMessage } from "react-intl"
import { Button, OverlayTrigger, Popover } from "react-bootstrap"
import {NestedDynamicForm, INPUT} from "../../.."

const EditPopover = React.forwardRef(({ initialValue, formProps: { component, onUpdate, ...formProps }, ...props }, ref) => {

  const saveRef = React.useRef()

  const onUpdateField = ({ editable }) => {
    onUpdate(editable)
    onClose()
  }

  const onClose = () => {
    document.body.click()
    //ref.handleHide()
  }

  const onSave = () => {
    if (saveRef && saveRef.current) {
      saveRef.current.click()
    }
  }

  console.log(initialValue)

  return (
    <Popover ref={ref} {...props}>
      <Popover.Title as="h3"><FormattedMessage id="GENERAL.EDIT" /></Popover.Title>
      <Popover.Content>
        <NestedDynamicForm
          className="p-0"
          initialValues={({ editable: initialValue })}
          fields={[{ name: "editable", component, initialValue, ...formProps }]}
          onSubmit={onUpdateField}
          saveRef={saveRef}
        />
      </Popover.Content>
      <div className="border-top py-3 text-right">
        <Button onClick={onSave} type="button" className="btn btn-sm btn-icon btn-light-primary pulse pulse-primary">
          <i className="flaticon2-checkmark" />
          <span className="pulse-ring" />
        </Button>

        <Button onClick={onClose} type="button" className="btn btn-sm btn-icon btn-light-danger pulse pulse-danger mx-5">
          <i className="flaticon-cancel" />
        </Button>
      </div>
    </Popover>
  )
})

const FieldActionFormatter = (cellContent, row, rowIndex, formatExtraData) => {

  let value = cellContent
  if (formatExtraData.options && _.isArray(formatExtraData.options)) {
    const choice = formatExtraData.options.find((choice) => choice.value === cellContent)
    value = choice && choice.label
  }

  return (
    <OverlayTrigger 
      rootClose={true} 
      placement="top"
      trigger="click"
      overlay={
        <EditPopover
          formProps={{
            onUpdate: formatExtraData.updateValue(rowIndex),
            component: formatExtraData.fieldType || INPUT,
            ...formatExtraData
          }}
          initialValue={cellContent}
        />
      }
    >
      <button className="editable-field" type="button">
        { value || <FormattedMessage id="GENERAL.EMPTY" />} 
      </button>
    </OverlayTrigger>
  )
}

export default FieldActionFormatter
