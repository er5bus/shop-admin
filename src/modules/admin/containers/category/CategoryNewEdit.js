/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState, useCallback } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { FormView } from "../../../../components/partials/controls"
import _ from "lodash"

import CategoryForm from "./components/form/CategoryForm"

import { createCategory, clearStore, editCategory, fetchCategory } from "./store/actions"

import { useSubheader } from "../../../../components/layout"

import routes from "./../../routes"


const Category = ({ history, match: { params = null }, intl }) => {
  // Subheader
  const suhbeader = useSubheader()

  const [title, setTitle] = useState("")
  const dispatch = useDispatch()

  //const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isLoading, categoryForEdit, success, error } = useSelector(
    (state) => ({
      isLoading: state.admin.category.isLoading,
      categoryForEdit: state.admin.category.category,
      success: state.admin.category.success,
      error: state.admin.category.error
    }),
    shallowEqual
  )

  const saveCategory = (values) => {
    if (_.isEmpty(params)) {
      dispatch(createCategory(values))
    } else {
      dispatch(editCategory(params, values))
    }
  }

  const goBackToCategorysList = useCallback(() => {
    history.push(routes.categoryList.path)
  }, [history])

  useEffect(() => {
    if (!_.isEmpty(params)){
      dispatch(fetchCategory(params))
    }
    dispatch(clearStore())
  }, [params, dispatch])

  useEffect(() => {
    let _title = !_.isEmpty(params) 
      ? intl.formatMessage({ id: "CATEGORY.EDIT.TITLE" }) 
      : intl.formatMessage({ id: "CATEGORY.NEW.TITLE" })
    setTitle(_title)
    suhbeader.setTitle(_title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryForEdit, params])

  return (
    <FormView
      goBackTo={goBackToCategorysList}
      title={title}
      onClose={clearStore}
      error={error}
      isLoading={isLoading}
      successMsg={[
        { condition: success.isCreated, label: intl.formatMessage({ id: "CATEGORY.NEW.MSG" }) },
        { condition: success.isUpdated, label: intl.formatMessage({ id: "CATEGORY.EDIT.MSG" }) }
      ]}
    >
      { ({ saveRef }) => (<CategoryForm
        isLoading={isLoading}
        success={success.isCreated}
        category={ !_.isEmpty(params) && categoryForEdit}
        onSubmit={saveCategory}
        saveRef={saveRef}
      />)
      }
    </FormView>
  )
}


export default injectIntl(Category)
