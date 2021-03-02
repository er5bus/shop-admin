import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import InputBase from "@material-ui/core/InputBase"
import IconButton from "@material-ui/core/IconButton"
import SearchIcon from "@material-ui/icons/Search"
import ClearIcon from "@material-ui/icons/Clear"
import { FieldError } from "./FieldError"

const useStyles = makeStyles({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    backgroundClip: "border-box",
    border: "1px solid #EBEDF3",
    borderRadius: "0.42rem",
    boxShadow: "0px 0px 30px 0px rgba(82, 63, 105, 0.05) !important"
  },
  input: {
    padding: "5px",
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
})

const InputAddons = ({
  field, // { name, value, onChange, onBlur }
  label,
  inputGroupClassName = "form-group",
  inputClassName = "form-control",
  withFeedbackLabel = true,
  customFeedbackLabel,
  buttonText,
  isLoading,
  form,
  type = "text",
  ...props
}) =>  {
  const classes = useStyles()

  const onClearForm = () => {
    form.resetForm()
    form.submitForm()
  }

  return (
    <>
      <Paper className={classes.root}>
        <InputBase
          className={classes.input}
          autoComplete="off"
          inputProps={ { ...props, ...field  } }
          type={type}
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="Search">
          <SearchIcon className="text-primary" />
        </IconButton>
        <IconButton type="button" onClick={onClearForm} className={classes.iconButton} aria-label="Search">
          <ClearIcon className="text-danger" />
        </IconButton>
      </Paper>
      <FieldError fieldName={field.name} />
    </>
  )
}


export default InputAddons
