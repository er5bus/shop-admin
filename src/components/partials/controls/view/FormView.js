/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useRef, useState } from "react"
import { FormattedMessage } from "react-intl"

import { Card, CardBody, CardHeader, CardHeaderToolbar, ModalProgressBar, FlashMessages } from "../../controls"
import _ from "lodash"

import { isRLTLang } from "./../../../../i18n"

import {Button} from "react-bootstrap"
import {FormUIProvider} from "../forms/context/FormUIContext"

const SAVE = 1
const SAVE_AND_BACK = 2

const FormView = ({ children, title, goBackTo, goToDisplay, successMsg = [], toolBar, isLoading, error, onClose }) => {

  const saveRef = useRef()
  const [clickedButton, setClickedButton] = useState(undefined)

  const onSave = (str) => () => {
    if (saveRef && saveRef.current){
      setClickedButton(str)
      saveRef.current.click()
    }
  }

  useEffect(() => {
    if (successMsg.some((obj) => obj.condition) && _.isFunction(goBackTo) && clickedButton === SAVE_AND_BACK ) {
      goBackTo()
    }
    // eslint-disable-next-line
  }, [successMsg])

  return (
    <FormUIProvider error={error}>
      <Card>
        <FlashMessages successMsg={successMsg} error={error} onClose={onClose} />
        {isLoading && <ModalProgressBar />}
        <CardHeader title={title}>
          <CardHeaderToolbar>
            { _.isFunction(goBackTo) && <Button
              type="button"
              onClick={goBackTo}
              className="btn btn-sm btn-light mx-2"
            >
              { isRLTLang() ?
                <>
                  <FormattedMessage id="GENERAL.BACK" />
                  <i className="fa fa-arrow-left" />
                </>
                : <>
                  <i className="fa fa-arrow-left" />
                  <FormattedMessage id="GENERAL.BACK" />
                </>
              }
            </Button>
            }
            { _.isFunction(goToDisplay) && <Button
              type="button"
              className="btn btn-sm btn-warning btn-hover-warning mx-2"
              onClick={goToDisplay}
            >
              <FormattedMessage id="GENERAL.SHOW" />
            </Button>
            }
            <Button
              disabled={clickedButton === SAVE && isLoading}
              onClick={onSave(SAVE)}
              type="button"
              className="btn btn-sm btn-primary  mx-2"
            >
              { clickedButton === SAVE && isLoading && <span className="px-5 spinner spinner-white"></span>}
              <FormattedMessage id="GENERAL.SAVE" />
            </Button>
            { _.isFunction(goBackTo) && !_.isFunction(goToDisplay) && successMsg.length > 0 && <Button
              disabled={clickedButton === SAVE_AND_BACK && isLoading}
              onClick={onSave(SAVE_AND_BACK)}
              type="button"
              className="btn btn-sm btn-success"
            >
              { clickedButton === SAVE_AND_BACK && isLoading && <span className="px-5 spinner spinner-white"></span>}
              <FormattedMessage id="GENERAL.SAVE_AND_BACK_TO_LIST" />
            </Button> }
            { toolBar }
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          { children({ saveRef }) }
        </CardBody>
      </Card>
    </FormUIProvider>
  )
}


export default FormView
