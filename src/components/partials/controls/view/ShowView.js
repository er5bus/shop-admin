/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React from "react"
import { FormattedMessage } from "react-intl"

import { Card, CardBody, CardHeader, CardHeaderToolbar, FlashMessages, ModalProgressBar } from "../../controls"
import _ from "lodash"

import { isRLTLang } from "./../../../../i18n"

import {Button} from "react-bootstrap"
import DownloadItems from "../download-pdf/DownloadItems"
import {DisplayUIProvider} from "../display/context/DisplayUIContext"


const ShowView = ({ children, title, goBackTo, goToEdit, print = true, printURL, toolBar, isFetching, error, onClose }) => {

  return (
    <DisplayUIProvider>
      <Card>
        <FlashMessages error={error} onClose={onClose} />
        {isFetching && <ModalProgressBar />}
        <CardHeader title={title}>
          <CardHeaderToolbar>
            { goBackTo && <Button
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
            { _.isFunction(goToEdit) && <Button
              type="button"
              className="btn btn-sm btn-warning btn-hover-warning mx-3 my-1 "
              onClick={goToEdit}
            >
              <FormattedMessage id="GENERAL.EDIT" />
            </Button> }
            { print && <DownloadItems title={title} printURL={printURL} /> }
            { toolBar }
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          { children }
        </CardBody>
      </Card>
    </DisplayUIProvider>
  )
}


export default ShowView
