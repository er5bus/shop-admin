/* eslint-disable no-restricted-imports */
import React, { useEffect } from "react"
import { Modal } from "react-bootstrap"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ModalProgressBar } from "../../../../../../components/partials/controls"
//import * as actions from "../../../_redux/users/usersActions"
import { useUsersUIContext } from "../../context/UsersUIContext"
import {disableUsers, fetchUsers} from "../../store/actions"


const UsersDisableDialog = ({ show, onHide }) => {
  // Users UI Context
  const usersUIProps = useUsersUIContext()
  
  // Users Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.user.isLoading, success: state.admin.user.success }),
    shallowEqual
  )

  // if there weren't selected smsSkeletons we should close modal
  useEffect(() => {
    // !smsSkeletonsUIProps.ids || smsSkeletonsUIProps.ids.length === 0 ||
    if ( success.isDeactivated &&  show ) {
      onHide()
      usersUIProps.setIds([])
      dispatch(fetchUsers(usersUIProps.queryParams))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usersUIProps.ids, success, show])

  const onDisableUsers = () => {
    // server request for deleting smsSkeleton by seleted ids
    dispatch(disableUsers(usersUIProps.ids))
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          <FormattedMessage id="USER.MULTIPLE_DISABLE.TITLE" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormattedMessage id="USER.MULTIPLE_DISABLE.MSG" />
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
            onClick={onDisableUsers}
            className="btn btn-sm btn-danger btn-elevate"
          >
            {isLoading && <span className="px-5 spinner spinner-white"></span>}
            <FormattedMessage id="GENERAL.DISABLE" />
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}


export default UsersDisableDialog
