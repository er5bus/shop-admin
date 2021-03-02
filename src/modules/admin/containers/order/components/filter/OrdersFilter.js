import React, { useMemo } from "react"
import { isEqual } from "lodash"
import { useOrdersUIContext } from "../../context/OrdersUIContext"
import {SearchFilter} from "../../../../../../components/partials"


const OrdersFilter = () => {
  // Orders UI Context
  const ordersUIContext = useOrdersUIContext()
  const ordersUIProps = useMemo(() => {
    return {
      ...ordersUIContext
    }
  }, [ordersUIContext])

  const applyFilter = (values) => {
    const newQueryParams = { ...ordersUIProps.queryParams, ...values }
    if (!isEqual(newQueryParams, ordersUIProps.queryParams)) {
      newQueryParams.pageNumber = 1
      ordersUIProps.setQueryParams(newQueryParams)
    }
  }

  return (
    <SearchFilter applyFilter={applyFilter} />
  )
}


export default OrdersFilter
