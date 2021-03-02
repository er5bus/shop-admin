import React from "react"
import OrdersLoadingDialog from "./components/loading/OrdersLoadingDialog"
import { OrdersUIProvider } from "./context/OrdersUIContext"
import OrderCard from "./components/card/OrdersCard"

import { dialogRoutes, basePath } from "./routes"
import pageRoutes from "./../../routes"

import { ProtectedDialogRoute } from "../../../../components/routes"


const OrderPage = ({ history }) => {

  const ordersUIEvents = {
    newOrderButtonClick: () => {
      history.push(pageRoutes.orderCreate.path)
    },
    openOrderImportDialog: () => {
      history.push(dialogRoutes.orderImport.path)
    },
    newOrderRule: pageRoutes.orderCreate,
    openShowOrderPage: (param) => {
      history.push(pageRoutes.orderShow.path.replace(":param", param))
    },
    showOrderRule: pageRoutes.orderShow,
    openEditOrderPage: (param) => {
      history.push(pageRoutes.orderEdit.path.replace(":param", param))
    },
    editOrderRule: pageRoutes.orderEdit,

    openUpdateOrderStatusPage: (param) => {
      history.push(dialogRoutes.orderStatusUpdate.path.replace(":param", param))
    },
    updateOrderStatusRule: dialogRoutes.orderStatusUpdate,

    openDeactivateOrderDialog: (param) => {
      history.push(dialogRoutes.orderDeactivate.path.replace(":param", param))
    },
    deactivateOrderRule: dialogRoutes.orderDeactivate,
    
    openActivateOrderDialog: (param) => {
      history.push(dialogRoutes.orderActivate.path.replace(":param", param))
    },
    activateOrderRule: dialogRoutes.orderActivate,
  }

  const renderRoute = ({ component, history, match })  => {
    const Component = component
    const params = (match && match.params) ? {...match.params} : {}
    return <Component params={params} show={match != null} onHide = {() => { history.push( basePath )} } />
  }

  return (
    <OrdersUIProvider ordersUIEvents={ordersUIEvents}>
      <OrdersLoadingDialog />
      { Object.keys(dialogRoutes).map(key => (
        <ProtectedDialogRoute key={key} path={dialogRoutes[key].path}>
          {({ history, match }) => renderRoute({ component: dialogRoutes[key].component, history, match })}
        </ProtectedDialogRoute>
      )) }
      <OrderCard />
    </OrdersUIProvider>
  )
}


export default OrderPage
