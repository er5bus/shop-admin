/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React from "react"
import { FormattedMessage } from "react-intl"
import { ModalProgressBar } from "../../controls"

import {Button, Modal} from "react-bootstrap"
import DownloadItems from "../download-pdf/DownloadItems"
import {DisplayUIProvider} from "../display/context/DisplayUIContext"

const ShowModal = ({ children, size="md", isLoading, print = true, printURL, title, onHide, show }) => {

  return (
    <DisplayUIProvider>
      <Modal
        show={show}
        size={size}
        onHide={onHide}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        {isLoading && <ModalProgressBar variant="query" />}
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            { title }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          { children }
        </Modal.Body>
        <Modal.Footer>
          <div>
            <Button
              type="button"
              onClick={onHide}
              className="btn btn-sm btn-light btn-elevate"
            >
              <FormattedMessage id="GENERAL.CLOSE" />
            </Button>
            { print && <DownloadItems title={title} printURL={printURL} /> }
          </div>
        </Modal.Footer>
      </Modal>
    </DisplayUIProvider>
  )
}


export default ShowModal
