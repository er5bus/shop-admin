/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react"
import { Modal } from "react-bootstrap"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ModalProgressBar } from "../../../../../../components/partials/controls"
import { deleteUserGroup, fetchUserGroups } from "../../store/actions"
import { useUserGroupsUIContext } from "../../context/UserGroupsUIContext"

const UserGroupDeleteDialog = ({ params, show, onHide }) => {
  // UserGroups UI Context
  const userGroupsUIContext = useUserGroupsUIContext()
  const userGroupsUIProps = useMemo(() => {
    return {
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

  // if !id we should close modal
  useEffect(() => {
    if (success.isDeleted && show) {
      onHide()
      dispatch(fetchUserGroups(userGroupsUIProps.queryParams))
      userGroupsUIProps.setIds([])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success, show, userGroupsUIProps])

  const onDeleteUserGroup = () => {
    // server request for deleting userGroup by id
    dispatch(deleteUserGroup(params))
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
          <FormattedMessage id="USER_GROUP.DELETE.TITLE" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormattedMessage id="USER_GROUP.DELETE.MSG" />
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
            onClick={onDeleteUserGroup}
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


export default UserGroupDeleteDialog
