import React, { useEffect } from "react"
import { FormattedMessage } from "react-intl"
import Snackbar from "@material-ui/core/Snackbar"
import SnackbarContentWrapper from "./SnackbarContentWrapper"
import {ERROR_CODES} from "../../../../constants"


const SnackbarError = ({ open, onClose=f=>f, autoHide=2000, error }) => {

  const { data: {code} = {} } = error

  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return
    }
    onClose()
  }

  useEffect(() => {

    return () => onClose()
    
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        autoHideDuration={autoHide}
        onClose={handleClose}
      >
        <SnackbarContentWrapper
          onClose={handleClose}
          variant="error"
          message={<FormattedMessage id={ ERROR_CODES[code] || "ERROR.CODE.INTERNAL_ERROR" } />}
        />
      </Snackbar>
    </div>
  )
}


export default SnackbarError
