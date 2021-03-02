/* eslint-disable no-restricted-imports */
import React, { useEffect } from "react"
import { Modal } from "react-bootstrap"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ModalProgressBar } from "../../../../../../components/partials/controls"
import { useUsersUIContext } from "../../context/UsersUIContext"
import { regenerateUserPassword } from "../../store/actions"

const RegenratePasswordDialog = ({ params, show, onHide }) => {
  // Users UI Context
  const usersUIProps = useUsersUIContext()
  
  // Users Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.user.isLoading, success: state.admin.user.success }),
    shallowEqual
  )

  // if !id we should close modal
  useEffect(() => {
    if (success.isReseted && show) {
      onHide()
      usersUIProps.setIds([])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success, show])

  const onDeleteUser = () => {
    // server request for deleting smsSkeleton by id
    dispatch(regenerateUserPassword(params))
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
          <FormattedMessage id="USER.REGENERATE_PASSWORD.TITLE" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormattedMessage id="USER.REGENERATE_PASSWORD.MSG" />
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
          <> </>
          <button
            type="button"
            disabled={isLoading}
            onClick={onDeleteUser}
            className="btn btn-sm btn-warning btn-elevate"
          >
            {isLoading && <span className="px-5 spinner spinner-white"></span>}
            <FormattedMessage id="GENERAL.REGENERATE_PASSWORD" />
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}


export default RegenratePasswordDialog
