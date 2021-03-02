/* eslint-disable no-restricted-imports */
import React from "react"
import { Modal } from "react-bootstrap"
import { FormattedMessage } from "react-intl"
import {ImportFrom} from ".."


const ImportModal = ({ show, title, onHide, url, endpoint, onImportFinish }) => {

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          { title }
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ImportFrom onSubmit={onImportFinish} url={endpoint || url} />
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={onHide}
            className="btn btn-sm btn-light btn-elevate"
          >
            <FormattedMessage id="GENERAL.CANCEL" />
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}


export default ImportModal
