/* eslint-disable no-restricted-imports */
import React, { useEffect } from "react"
import { Modal } from "react-bootstrap"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ModalProgressBar } from "../../../../../../components/partials/controls"
import { useUsersUIContext } from "../../context/UsersUIContext"
import {undeleteUsers, fetchUsers} from "../../store/actions"

const UsersUndeleteDialog = ({ params, show, onHide }) => {
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
    if (success.isUndeleted && show) {
      onHide()
      dispatch(fetchUsers(usersUIProps.queryParams))
      usersUIProps.setIds([])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success, show])

  const onUndeleteuser = () => {
    // server request for deleting Users by id
    dispatch(undeleteUsers(params))
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
          <FormattedMessage id="USER.MULTIPLE_UNDELETE.TITLE" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && <FormattedMessage id="USER.MULTIPLE_UNDELETE.MSG" /> }
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
            onClick={onUndeleteuser}
            className="btn btn-sm btn-success btn-elevate"
          >
            {isLoading && <span className="px-5 spinner spinner-white"></span>}
            <FormattedMessage id="GENERAL.UNDELETE" />
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}


export default UsersUndeleteDialog
