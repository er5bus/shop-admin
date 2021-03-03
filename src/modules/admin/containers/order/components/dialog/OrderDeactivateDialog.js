/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react"
import { Modal } from "react-bootstrap"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ModalProgressBar } from "../../../../../../components/partials/controls"
import { deactivateOrder, fetchOrders } from "../../store/actions"
import { useOrdersUIContext } from "../../context/OrdersUIContext"


const OrderDedeactivateDialog = ({ params, show, onHide }) => {
  // Orders UI Context
  const ordersUIContext = useOrdersUIContext()
  const ordersUIProps = useMemo(() => {
    return {
      setIds: ordersUIContext.setIds,
      queryParams: ordersUIContext.queryParams,
    }
  }, [ordersUIContext])

  // Orders Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.order.isLoading, success: state.admin.order.success }),
    shallowEqual
  )

  // if !id we should close modal
  useEffect(() => {
    if (success.isDeactivated && show) {
      onHide()
      dispatch(fetchOrders(ordersUIProps.queryParams))
      ordersUIProps.setIds([])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success, show, ordersUIProps])

  const onDedeactivateOrder = () => {
    // server request for deleting order by id
    dispatch(deactivateOrder(params))
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
          <FormattedMessage id="ORDER.DISABLE.TITLE" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormattedMessage id="ORDER.DISABLE.MSG" />
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
            onClick={onDedeactivateOrder}
            className="btn btn-sm btn-danger btn-elevate"
          >
            {isLoading && <span className="px-5 spinner spinner-white"></span>}
            <FormattedMessage id="GENERAL.DEACTIVATE" />
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}


export default OrderDedeactivateDialog
