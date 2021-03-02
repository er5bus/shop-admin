/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState, useCallback } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { FormView } from "../../../../components/partials/controls"
import _ from "lodash"

import OrderForm from "./components/form/OrderForm"

import { createOrder, clearStore, editOrder, fetchOrder } from "./store/actions"

import { useSubheader } from "../../../../components/layout"

import routes from "./../../routes"


const Order = ({ history, match: { params = null }, intl }) => {
  // Subheader
  const suhbeader = useSubheader()

  const [title, setTitle] = useState("")
  const dispatch = useDispatch()

  //const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isLoading, orderForEdit, success, error } = useSelector(
    (state) => ({
      isLoading: state.admin.order.isLoading,
      orderForEdit: state.admin.order.order,
      success: state.admin.order.success,
      error: state.admin.order.error
    }),
    shallowEqual
  )

  const saveOrder = (values) => {
    if (_.isEmpty(params)) {
      dispatch(createOrder(values))
    } else {
      dispatch(editOrder(params, values))
    }
  }

  const goBackToOrdersList = useCallback(() => {
    history.push(routes.orderList.path)
  }, [history])

  useEffect(() => {
    if (!_.isEmpty(params)){
      dispatch(fetchOrder(params))
    }
    dispatch(clearStore())
  }, [params, dispatch])

  useEffect(() => {
    let _title = !_.isEmpty(params) 
      ? intl.formatMessage({ id: "ORDER.EDIT.TITLE" }) 
      : intl.formatMessage({ id: "ORDER.NEW.TITLE" })
    setTitle(_title)
    suhbeader.setTitle(_title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderForEdit, params])

  return (
    <FormView
      goBackTo={goBackToOrdersList}
      title={title}
      onClose={clearStore}
      error={error}
      isLoading={isLoading}
      successMsg={[
        { condition: success.isCreated, label: intl.formatMessage({ id: "ORDER.NEW.MSG" }) },
        { condition: success.isUpdated, label: intl.formatMessage({ id: "ORDER.EDIT.MSG" }) }
      ]}
    >
      { ({ saveRef }) => (<OrderForm
        isLoading={isLoading}
        success={success.isCreated}
        order={ !_.isEmpty(params) && orderForEdit}
        onSubmit={saveOrder}
        saveRef={saveRef}
      />)
      }
    </FormView>
  )
}


export default injectIntl(Order)
