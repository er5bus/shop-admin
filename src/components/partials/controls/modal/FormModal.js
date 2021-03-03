/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useRef, useState } from "react"
import { FormattedMessage } from "react-intl"

import { ModalProgressBar } from "../../controls"

import {Button, Modal} from "react-bootstrap"
import {FormUIProvider} from "../forms/context/FormUIContext"

const FormModal = ({ children, error, size="md", success=false, title, onHide, show, isLoading }) => {

  const saveRef = useRef()
  const [submitting, setSubmitting] = useState(false)

  // if !id we should close modal
  useEffect(() => {
    if (success && show && submitting) {
      setSubmitting(false)
      onHide()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success, show])

  const onSave = () => {
    if (saveRef && saveRef.current){
      saveRef.current.click()
      setSubmitting(true)
    }
  }

  return (
    <FormUIProvider error={error}>
      <Modal
        size={size}
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
          { children({ saveRef }) }
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
            <Button
              type="button"
              disabled={isLoading}
              onClick={onSave}
              className="btn btn-sm btn-primary btn-elevate mx-2"
            >
              {isLoading && <span className="px-5 spinner spinner-white"></span>}
              <FormattedMessage id="GENERAL.SAVE" />
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </FormUIProvider>
  )
}


export default FormModal
