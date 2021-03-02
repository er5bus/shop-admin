import React from "react"
import ProductsLoadingDialog from "./components/loading/ProductsLoadingDialog"
import { ProductsUIProvider } from "./context/ProductsUIContext"
import ProductCard from "./components/card/ProductsCard"

import { dialogRoutes, basePath } from "./routes"
import pageRoutes from "./../../routes"

import { ProtectedDialogRoute } from "../../../../components/routes"


const ProductPage = ({ history }) => {

  const productsUIEvents = {
    newProductButtonClick: () => {
      history.push(pageRoutes.productCreate.path)
    },
    openProductImportDialog: () => {
      history.push(dialogRoutes.productImport.path)
    },
    newProductRule: pageRoutes.productCreate,
    openShowProductPage: (param) => {
      history.push(pageRoutes.productShow.path.replace(":param", param))
    },
    showProductRule: pageRoutes.productShow,
    openEditProductPage: (param) => {
      history.push(pageRoutes.productEdit.path.replace(":param", param))
    },
    editProductRule: pageRoutes.productEdit,

    openDeactivateProductDialog: (param) => {
      history.push(dialogRoutes.productDeactivate.path.replace(":param", param))
    },
    deactivateProductRule: dialogRoutes.productDeactivate,
    
    openActivateProductDialog: (param) => {
      history.push(dialogRoutes.productActivate.path.replace(":param", param))
    },
    activateProductRule: dialogRoutes.productActivate,
  }

  const renderRoute = ({ component, history, match })  => {
    const Component = component
    const params = (match && match.params) ? {...match.params} : {}
    return <Component params={params} show={match != null} onHide = {() => { history.push( basePath )} } />
  }

  return (
    <ProductsUIProvider productsUIEvents={productsUIEvents}>
      <ProductsLoadingDialog />
      { Object.keys(dialogRoutes).map(key => (
        <ProtectedDialogRoute key={key} path={dialogRoutes[key].path}>
          {({ history, match }) => renderRoute({ component: dialogRoutes[key].component, history, match })}
        </ProtectedDialogRoute>
      )) }
      <ProductCard />
    </ProductsUIProvider>
  )
}


export default ProductPage
