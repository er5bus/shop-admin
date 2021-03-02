import React, { useEffect } from "react"
//import { useSnackbar } from "notistack"
import Snackbar from "@material-ui/core/Snackbar"
import SnackbarContentWrapper from "./SnackbarContentWrapper"

const Snackbars = ({ open, onClose=f=>f, authHide=8000, type = "success", message }) => {

  //const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  function handleClose(event, reason) {

    if (reason === "clickaway") {
      return
    }

    onClose()
  }

  useEffect(() => {
    return () => open && onClose()

    // eslint-disable-next-line
  }, [])

  //enqueueSnackbar('I love hooks');

  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        autoHideDuration={authHide}
        onClose={handleClose}
      >
        <SnackbarContentWrapper
          onClose={handleClose}
          variant={type}
          message={message}
        />
      </Snackbar>
    </>
  )
}


export default Snackbars
