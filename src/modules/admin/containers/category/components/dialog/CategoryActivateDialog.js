/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react"
import { Modal } from "react-bootstrap"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ModalProgressBar } from "../../../../../../components/partials/controls"
import { activateCategory, fetchCategorys } from "../../store/actions"
import { useCategorysUIContext } from "../../context/CategorysUIContext"

const CategoryActivateDialog = ({ params, show, onHide }) => {
  // Categorys UI Context
  const categorysUIContext = useCategorysUIContext()
  const categorysUIProps = useMemo(() => {
    return {
      setIds: categorysUIContext.setIds,
      queryParams: categorysUIContext.queryParams,
    }
  }, [categorysUIContext])

  // Categorys Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.category.isLoading, success: state.admin.category.success }),
    shallowEqual
  )

  // if !id we should close modal
  useEffect(() => {
    if (success.isActivated && show) {
      onHide()
      dispatch(fetchCategorys(categorysUIProps.queryParams))
      categorysUIProps.setIds([])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success, show, categorysUIProps])

  const onActivateCategory = () => {
    // server request for deleting category by id
    dispatch(activateCategory(params))
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
          <FormattedMessage id="CATEGORY.DELETE.TITLE" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormattedMessage id="CATEGORY.DELETE.MSG" />
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
            onClick={onActivateCategory}
            className="btn btn-sm btn-danger btn-elevate"
          >
            {isLoading && <span className="px-5 spinner spinner-white"></span>}
            <FormattedMessage id="GENERAL.ACTIVATE" />
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}


export default CategoryActivateDialog
