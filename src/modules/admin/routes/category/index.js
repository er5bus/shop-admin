import { lazy } from "react"
import {UPDATE, MODULES_PERMISSIONS, VIEW, CREATE} from "../../../../constants"

const Category = lazy(() => import("../../containers/category/CategoryNewEdit"))
const CategoryEdit = lazy(() => import("../../containers/category/CategoryNewEdit"))
const CategoryShow = lazy(() => import("../../containers/category/CategoryShow"))
const CategoryPage = lazy(() => import("../../containers/category/CategoryPage"))

const { CATEGORY } = MODULES_PERMISSIONS

export const categoryCreate = {
  path: "/categories/new",
  component: Category,
  can: CATEGORY.permissions[CREATE],
  exact: true,
}

export const categoryEdit = {
  path: "/categories/:param/edit",
  component: CategoryEdit,
  can: CATEGORY.permissions[UPDATE]
}

export const categoryShow = {
  path: "/categories/:param/show",
  component: CategoryShow,
  can: CATEGORY.permissions[VIEW]
}

export const categoryList = {
  path: "/categories",
  component: CategoryPage,
  can: CATEGORY.permissions[VIEW]
}
