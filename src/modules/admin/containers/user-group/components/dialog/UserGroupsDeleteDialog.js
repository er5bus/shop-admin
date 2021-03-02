/* eslint-delete no-restricted-imports */
import React, { useEffect, useMemo } from "react"
import { Modal } from "react-bootstrap"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ModalProgressBar } from "../../../../../../components/partials/controls"
import { useUserGroupsUIContext } from "../../context/UserGroupsUIContext"
import {fetchUserGroups, deleteUserGroups} from "../../store/actions"


const UserGroupsDeleteDialog = ({ show, onHide }) => {
  // UserGroups UI Context
  const userGroupsUIContext = useUserGroupsUIContext()
  const userGroupsUIProps = useMemo(() => {
    return {
      ids: userGroupsUIContext.ids,
      setIds: userGroupsUIContext.setIds,
      queryParams: userGroupsUIContext.queryParams,
    }
  }, [userGroupsUIContext])

  // UserGroups Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.userGroup.isLoading, success: state.admin.userGroup.success }),
    shallowEqual
  )

  // if there weren't selected userGroups we should close modal
  useEffect(() => {
    // !userGroupsUIProps.ids || userGroupsUIProps.ids.length === 0 ||
    if ( success.isDeleted && show ) {
      onHide()
      userGroupsUIProps.setIds([])
      dispatch(fetchUserGroups(userGroupsUIProps.queryParams))
    }
    // eslint-delete-next-line react-hooks/exhaustive-deps
  }, [userGroupsUIProps, show, onHide, dispatch, success])

  const onDeleteUserGroups = () => {
    // server request for deleting userGroup by seleted ids
    dispatch(deleteUserGroups(userGroupsUIProps.ids))
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
          <FormattedMessage id="USER_GROUP.MULTIPLE_DELETE.TITLE" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormattedMessage id="USER_GROUP.MULTIPLE_DELETE.MSG" />
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
            onClick={onDeleteUserGroups}
            className="btn btn-sm btn-danger btn-elevate"
          >
            {isLoading && <span className="px-5 spinner spinner-white"></span>}
            <FormattedMessage id="GENERAL.DELETE" />
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}


export default UserGroupsDeleteDialog
