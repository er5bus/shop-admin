/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState, useCallback } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { FormView } from "../../../../components/partials/controls"
import _ from "lodash"

import ProductForm from "./components/form/ProductForm"

import { createProduct, clearStore, editProduct, fetchProduct } from "./store/actions"

import { useSubheader } from "../../../../components/layout"

import routes from "./../../routes"


const Product = ({ history, match: { params = null }, intl }) => {
  // Subheader
  const suhbeader = useSubheader()

  const [title, setTitle] = useState("")
  const dispatch = useDispatch()

  //const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isLoading, productForEdit, success, error } = useSelector(
    (state) => ({
      isLoading: state.admin.product.isLoading,
      productForEdit: state.admin.product.product,
      success: state.admin.product.success,
      error: state.admin.product.error
    }),
    shallowEqual
  )

  const saveProduct = (values) => {
    if (_.isEmpty(params)) {
      dispatch(createProduct(values))
    } else {
      dispatch(editProduct(params, values))
    }
  }

  const goBackToProductsList = useCallback(() => {
    history.push(routes.productList.path)
  }, [history])

  useEffect(() => {
    if (!_.isEmpty(params)){
      dispatch(fetchProduct(params))
    }
    dispatch(clearStore())
  }, [params, dispatch])

  useEffect(() => {
    let _title = !_.isEmpty(params) 
      ? intl.formatMessage({ id: "PRODUCT.EDIT.TITLE" }) 
      : intl.formatMessage({ id: "PRODUCT.NEW.TITLE" })
    setTitle(_title)
    suhbeader.setTitle(_title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productForEdit, params])

  return (
    <FormView
      goBackTo={goBackToProductsList}
      title={title}
      onClose={clearStore}
      error={error}
      isLoading={isLoading}
      successMsg={[
        { condition: success.isCreated, label: intl.formatMessage({ id: "PRODUCT.NEW.MSG" }) },
        { condition: success.isUpdated, label: intl.formatMessage({ id: "PRODUCT.EDIT.MSG" }) }
      ]}
    >
      { ({ saveRef }) => (<ProductForm
        isLoading={isLoading}
        success={success.isCreated}
        product={ !_.isEmpty(params) && productForEdit}
        onSubmit={saveProduct}
        saveRef={saveRef}
      />)
      }
    </FormView>
  )
}


export default injectIntl(Product)
