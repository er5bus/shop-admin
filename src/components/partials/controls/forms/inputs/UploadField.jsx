import React, {useState, useEffect} from "react"
import _ from "lodash"
import { FormattedMessage } from "react-intl"
import Dropzone from "react-dropzone-uploader"
import { FieldError, useFieldCSSClasses } from "./FieldError"
import {isValidURL} from "../../../../../helpers"
import Preview from "./dropzone/Preview"

const Uploader = ({
  field, // { name, value, onChange, onBlur }
  form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  maxFiles = 1,
  multiple = false,
  accept,
  required=false,
  autoUpload=true,
  ...props
}) => {

  const [initialFiles, setInitialFiles] = useState([])
  const fieldCSSClasses = useFieldCSSClasses(form.touched, form.errors, field.name)

  useEffect(() =>  {
    const value = _.clone(field.value)
    if (_.isString(value) && !_.isEmpty(value)){
      setInitialFiles([new File([], !isValidURL(value) ? value : value.substring(value.lastIndexOf('/')+1))])
    }
    else if (field.value instanceof File){
      setInitialFiles([field.value])
    }else {
      //form.setFieldValue(field.name, undefined)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!_.isEmpty(field.value) && _.isEmpty(initialFiles), _.isString(field.value)])

  const handleChangeStatus = ({ file, remove }, status) => {
    if (status === "done" &&  !initialFiles.some((initFile) => initFile.lastModified === file.lastModified) && file.size > 0 ){
      form.setFieldValue(field.name, file)
    }
  }

  return (
    <div className={`form-group ${fieldCSSClasses}` }>
      <label>{ label } {required && "*"}</label>
      <Dropzone
        key={field.value || 2}
        onChangeStatus={handleChangeStatus}
        maxFiles={maxFiles}
        multiple={multiple}
        initialFiles={initialFiles || []}
        onSubmit={(files, allFiles) => console.log(files, allFiles) }
        accept={accept}
        PreviewComponent={Preview}
        inputContent={<FormattedMessage key={1} id="GENERAL.UPLOAD_FILE_CONTENT" />}
        inputWithFilesContent={<FormattedMessage key={1} id="GENERAL.UPLOAD_FILE_INPUT" />}
        autoUpload={autoUpload}
        { ...props }
      />
      <FieldError fieldName={field.name} />
    </div>
  )
}


export default Uploader
