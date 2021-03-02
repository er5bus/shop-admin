import { lazy } from "react"
import {UPDATE, MODULES_PERMISSIONS, VIEW, CREATE} from "../../../../constants"

const Product = lazy(() => import("../../containers/product/ProductNewEdit"))
const ProductEdit = lazy(() => import("../../containers/product/ProductNewEdit"))
const ProductShow = lazy(() => import("../../containers/product/ProductShow"))
const ProductPage = lazy(() => import("../../containers/product/ProductPage"))

const { PRODUCT } = MODULES_PERMISSIONS

export const productCreate = {
  path: "/products/new",
  component: Product,
  can: PRODUCT.permissions[CREATE],
  exact: true,
}

export const productEdit = {
  path: "/products/:param/edit",
  component: ProductEdit,
  can: PRODUCT.permissions[UPDATE]
}

export const productShow = {
  path: "/products/:param/show",
  component: ProductShow,
  can: PRODUCT.permissions[VIEW]
}

export const productList = {
  path: "/products",
  component: ProductPage,
  can: PRODUCT.permissions[VIEW]
}
