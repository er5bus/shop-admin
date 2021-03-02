/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useLayoutEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"

import { ShowView } from "../../../../components/partials/controls"
import Product from "./components/display/Product"
import { useSubheader } from "../../../../components/layout"
import { fetchProduct, clearStore } from "./store/actions"
import routes from "./../../routes"

const ProductShow = ({ history, match: { params = null }, intl }) => {
  // Subheader
  const suhbeader = useSubheader()
  const _title = intl.formatMessage({ id: "PRODUCT.SHOW.TITLE" })

  // Tabs
  const dispatch = useDispatch()
  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isFetching, productForShow = null, error } = useSelector(
    (state) => ({
      isFetching: state.admin.product.isFetching,
      productForShow: state.admin.product.product,
      error: state.admin.product.error
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(fetchProduct(params))
  }, [params, dispatch])

  useLayoutEffect(() => {
    suhbeader.setTitle(_title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const goBackToProductsList = () => {
    history.push(routes.productList.path)
  }

  return (
    <ShowView 
      title={_title}
      goBackTo={goBackToProductsList}
      onClose={clearStore}
      error={error}
    >
      <Product error={error} isFetching={isFetching} product={productForShow} />
    </ShowView>
  )
}

export default injectIntl(ProductShow)
