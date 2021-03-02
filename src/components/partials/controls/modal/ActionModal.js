/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState } from "react"
import { FormattedMessage } from "react-intl"

import { ModalProgressBar } from "../../controls"

import {Button, Modal} from "react-bootstrap"

const ActionModal = ({ success, title, body, onClick, onRefresh, onHide, show, isLoading }) => {

  const [submitting, setSubmitting] = useState(false)

  // if !id we should close modal
  useEffect(() => {
    if (success && show && submitting) {
      setSubmitting(false)
      onRefresh()
      onHide()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success, show])

  const onClickAction = () => {
    setSubmitting(true)
    onClick()
  }

  return (
    <Modal
      show={show}
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
        { body }
      </Modal.Body>
      <Modal.Footer>
        <div>
          <Button
            type="button"
            onClick={onHide}
            className="btn btn-sm btn-light btn-elevate"
          >
            <FormattedMessage id="GENERAL.NO" />
          </Button>
          <Button
            type="button"
            disabled={isLoading}
            onClick={onClickAction}
            className="btn btn-sm btn-danger btn-elevate mx-2"
          >
            {isLoading && <span className="px-5 spinner spinner-white"></span>}
            <FormattedMessage id="GENERAL.YES" />
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}


export default ActionModal
