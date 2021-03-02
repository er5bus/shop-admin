import React from "react"
import { FieldError, useFieldCSSClasses } from "./FieldError"
import { Editor } from "@tinymce/tinymce-react"

import {toAbsoluteUrl} from "../../../../../helpers"
import { getLang } from "./../../../../../i18n"
import {Card} from "react-bootstrap"

const EmailEditorField = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  inputGroupClassName = "form-group",
  inputClassName = "form-control",
  ...props
}) => {

  const fieldCSSClasses = useFieldCSSClasses(touched, errors, field.name)

  return (
    <div className={ inputGroupClassName }>
      {label && <label> {label}</label>}
      <Card style={{ zIndex: 0 }} className={fieldCSSClasses}>
        <Editor
          value={field.value}
          textareaName={field.name}
          tinymceScriptSrc={toAbsoluteUrl("/plugins/tinymce/tinymce.min.js")}
          init={{
            height: 400,
            menubar: true,
            language: getLang(),
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount"
            ],
            toolbar: "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help"
          }}
          {...props}
          onEditorChange={(value) => setFieldValue(field.name, value) }
        />
      </Card>
      <FieldError fieldName={field.name} />
    </div>
  )
}


export default EmailEditorField
