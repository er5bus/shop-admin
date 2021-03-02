import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import orderColumn from "./fields/orderFields"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { fetchOrders }  from "../../store/actions"
import { DataTable } from "../../../../../../components/partials/controls"
import { useOrdersUIContext } from "../../context/OrdersUIContext"

const OrderTable = ({ intl }) => {
  // Orders UI Context
  const ordersUIProps = useOrdersUIContext()
  
  const columns = orderColumn({ intl, ordersUIProps })

  // Getting curret state of orders list from store (Redux)
  const { totalSize, orders: entities = [], isFetching } = useSelector(
    (state) => ({ ...state.admin.order }),
    shallowEqual
  )
  // Orders Redux state
  const dispatch = useDispatch()

  useEffect(() => {
    // clear selections list
    ordersUIProps.setIds([])
    // server call by queryParams
    dispatch(fetchOrders({ ...(ordersUIProps.queryParams || {}) }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ordersUIProps.queryParams, dispatch])

  return (
    <>
      <DataTable 
        isFetching={isFetching}
        entities={entities}
        columns={columns}
        totalSize={totalSize}
        queryParams={ordersUIProps.queryParams}
        onQueryParamsChange={ordersUIProps.setQueryParams}
        ids={ordersUIProps.ids}
        setIds={ordersUIProps.setIds}
      />
    </>
  )
}


export default injectIntl(OrderTable)
