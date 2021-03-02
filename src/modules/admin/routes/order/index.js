import { lazy } from "react"
import {UPDATE, MODULES_PERMISSIONS, VIEW, CREATE} from "../../../../constants"

const Order = lazy(() => import("../../containers/order/OrderNewEdit"))
const OrderEdit = lazy(() => import("../../containers/order/OrderNewEdit"))
const OrderShow = lazy(() => import("../../containers/order/OrderShow"))
const OrderPage = lazy(() => import("../../containers/order/OrderPage"))

const { ORDER } = MODULES_PERMISSIONS

export const orderCreate = {
  path: "/orders/new",
  component: Order,
  can: ORDER.permissions[CREATE],
  exact: true,
}

export const orderEdit = {
  path: "/orders/:param/edit",
  component: OrderEdit,
  can: ORDER.permissions[UPDATE]
}

export const orderShow = {
  path: "/orders/:param/show",
  component: OrderShow,
  can: ORDER.permissions[VIEW]
}

export const orderList = {
  path: "/orders",
  component: OrderPage,
  can: ORDER.permissions[VIEW]
}
