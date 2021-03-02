/* eslint-disable no-restricted-imports */
import React, { useEffect } from 'react'
import { injectIntl } from 'react-intl'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { FormModal } from '../../../../../../components/partials/controls'
import {useOrdersUIContext} from '../../context/OrdersUIContext'
import { editOrder, fetchOrder, fetchOrders } from '../../store/actions'

import OrderStatusForm from './../form/OrderStatusForm'

const OrderStatusDialog = ({ initialValues, params, show, onHide, intl }) => {

  const ordersUIProps = useOrdersUIContext()

  const dispatch = useDispatch()
  const { isLoading, orderForEdit, success, error } = useSelector(
    (state) => ({
      isLoading: state.admin.order.isLoading,
      orderForEdit: state.admin.order.order,
      success: state.admin.order.success,
      error: state.admin.order.error
    }),
    shallowEqual
  )

  const saveOrder = ({ status }) => {
    dispatch(editOrder(params, { status }))
  }

  const onClose = () => {
    onHide()
    dispatch(fetchOrders(ordersUIProps.queryParams))
    ordersUIProps.setIds([])
  }

  useEffect(() => {
    if (params && params.param){
      dispatch(fetchOrder(params))
    }
  }, [params, dispatch])

  return (
    <FormModal
      size='md'
      title={intl.formatMessage({ id: 'ORDER.UPDATE.STATUS' })}
      show={show}
      success={success.isCreated || success.isUpdated}
      error={error}
      onHide={onClose}
      isLoading={isLoading}
    >
      {({ saveRef }) => (
        <OrderStatusForm onSubmit={saveOrder} order={orderForEdit} saveRef={saveRef} initialValues={initialValues} />
      )}
    </FormModal>
  )
}

export default injectIntl(OrderStatusDialog)
