import React from "react"
import CategorysLoadingDialog from "./components/loading/CategorysLoadingDialog"
import { CategorysUIProvider } from "./context/CategorysUIContext"
import CategoryCard from "./components/card/CategorysCard"

import { dialogRoutes, basePath } from "./routes"
import pageRoutes from "./../../routes"

import { ProtectedDialogRoute } from "../../../../components/routes"


const CategoryPage = ({ history }) => {

  const categorysUIEvents = {
    newCategoryButtonClick: () => {
      history.push(pageRoutes.categoryCreate.path)
    },
    openCategoryImportDialog: () => {
      history.push(dialogRoutes.categoryImport.path)
    },
    newCategoryRule: pageRoutes.categoryCreate,
    openShowCategoryPage: (param) => {
      history.push(pageRoutes.categoryShow.path.replace(":param", param))
    },
    showCategoryRule: pageRoutes.categoryShow,
    openEditCategoryPage: (param) => {
      history.push(pageRoutes.categoryEdit.path.replace(":param", param))
    },
    editCategoryRule: pageRoutes.categoryEdit,

    openDeactivateCategoryDialog: (param) => {
      history.push(dialogRoutes.categoryDeactivate.path.replace(":param", param))
    },
    deactivateCategoryRule: dialogRoutes.categoryDeactivate,
    
    openActivateCategoryDialog: (param) => {
      history.push(dialogRoutes.categoryActivate.path.replace(":param", param))
    },
    activateCategoryRule: dialogRoutes.categoryActivate,
  }

  const renderRoute = ({ component, history, match })  => {
    const Component = component
    const params = (match && match.params) ? {...match.params} : {}
    return <Component params={params} show={match != null} onHide = {() => { history.push( basePath )} } />
  }

  return (
    <CategorysUIProvider categorysUIEvents={categorysUIEvents}>
      <CategorysLoadingDialog />
      { Object.keys(dialogRoutes).map(key => (
        <ProtectedDialogRoute key={key} path={dialogRoutes[key].path}>
          {({ history, match }) => renderRoute({ component: dialogRoutes[key].component, history, match })}
        </ProtectedDialogRoute>
      )) }
      <CategoryCard />
    </CategorysUIProvider>
  )
}


export default CategoryPage
