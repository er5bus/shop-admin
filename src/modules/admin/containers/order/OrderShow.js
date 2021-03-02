/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useLayoutEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"

import { ShowView } from "../../../../components/partials/controls"
import Order from "./components/display/Order"
import { useSubheader } from "../../../../components/layout"
import { fetchOrder, clearStore } from "./store/actions"
import routes from "./../../routes"

const OrderShow = ({ history, match: { params = null }, intl }) => {
  // Subheader
  const suhbeader = useSubheader()
  const _title = intl.formatMessage({ id: "ORDER.SHOW.TITLE" })

  // Tabs
  const dispatch = useDispatch()
  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isFetching, orderForShow = null, error } = useSelector(
    (state) => ({
      isFetching: state.admin.order.isFetching,
      orderForShow: state.admin.order.order,
      error: state.admin.order.error
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(fetchOrder(params))
  }, [params, dispatch])

  useLayoutEffect(() => {
    suhbeader.setTitle(_title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const goBackToOrdersList = () => {
    history.push(routes.orderList.path)
  }

  return (
    <ShowView 
      title={_title}
      goBackTo={goBackToOrdersList}
      onClose={clearStore}
      error={error}
    >
      <Order error={error} isFetching={isFetching} order={orderForShow} />
    </ShowView>
  )
}

export default injectIntl(OrderShow)
