/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useRef } from "react"
import { FormattedMessage } from "react-intl"
import { Card, CardBody, CardHeader, CardHeaderToolbar, ModalProgressBar } from "../../controls"
import _ from "lodash"
import VisibilityIcon from "@material-ui/icons/Visibility"
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff"
import { isRLTLang } from "./../../../../i18n"
import {Button} from "react-bootstrap"
import {CardFooter} from "../card/Card"
import {FormUIProvider} from "../forms/context/FormUIContext"

const AccordionFormView = ({ children, error, title, hide=true, goBackTo, goToDisplay, toolBar, isLoading }) => {

  const saveRef = useRef()
  const [show, setShow] = React.useState(!hide)

  const onSave = () => {
    if (saveRef && saveRef.current){
      saveRef.current.click()
    }
  }

  return (
    <FormUIProvider error={error}>
      <Card className="mb-5">
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
            <button
              type="button"
              className="btn btn-sm btn-icon mx-3 my-1 "
              onClick={() => { setShow(!show) }}
            >
              { show ? <VisibilityIcon /> : <VisibilityOffIcon /> }
            </button>
            { toolBar }
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody className={ !show ? "collapse" : "collapse show" }>
          { children({ saveRef }) }
        </CardBody>
        <CardFooter className={ !show ? "collapse text-right" : "collapse show text-right" }>
          <Button
            disabled={isLoading}
            onClick={onSave}
            type="button"
            className="btn btn-sm btn-primary"
          >
            { isLoading && <span className="px-5 spinner spinner-white"></span>}
            <FormattedMessage id="GENERAL.SAVE" />
          </Button>
        </CardFooter>
      </Card>
    </FormUIProvider>
  )
}


export default AccordionFormView
