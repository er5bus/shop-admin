import React, { useEffect } from "react"
import { useSnackbar } from "notistack"
import { injectIntl } from "react-intl"
import { isEmpty } from "lodash"
import { useDispatch } from "react-redux"
import {formatErrorMessage} from "../../../../helpers"

const FlashMessages = ({ successMsg = [], error, onClose, intl }) => {

  const { enqueueSnackbar } = useSnackbar()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!isEmpty(error)) {
      dispatch(onClose())
      enqueueSnackbar(intl.formatMessage({ id: formatErrorMessage(error) }), {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right"
        }
      })
    }

    // eslint-disable-next-line
  }, [error])

  useEffect(() => {
    successMsg.forEach((obj) => {
      if (obj.condition && obj.label) {
        enqueueSnackbar(obj.label, {
          variant: "success",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right"
          }
        })
        dispatch(onClose())
      }
    })

    // eslint-disable-next-line
  }, [successMsg])

  return <></>
}

export default React.memo(injectIntl(FlashMessages))
