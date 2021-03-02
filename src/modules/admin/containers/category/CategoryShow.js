/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useLayoutEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"

import { ShowView } from "../../../../components/partials/controls"
import Category from "./components/display/Category"
import { useSubheader } from "../../../../components/layout"
import { fetchCategory, clearStore } from "./store/actions"
import routes from "./../../routes"

const CategoryShow = ({ history, match: { params = null }, intl }) => {
  // Subheader
  const suhbeader = useSubheader()
  const _title = intl.formatMessage({ id: "CATEGORY.SHOW.TITLE" })

  // Tabs
  const dispatch = useDispatch()
  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isFetching, categoryForShow = null, error } = useSelector(
    (state) => ({
      isFetching: state.admin.category.isFetching,
      categoryForShow: state.admin.category.category,
      error: state.admin.category.error
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(fetchCategory(params))
  }, [params, dispatch])

  useLayoutEffect(() => {
    suhbeader.setTitle(_title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const goBackToCategorysList = () => {
    history.push(routes.categoryList.path)
  }

  return (
    <ShowView 
      title={_title}
      goBackTo={goBackToCategorysList}
      onClose={clearStore}
      error={error}
    >
      <Category error={error} isFetching={isFetching} category={categoryForShow} />
    </ShowView>
  )
}

export default injectIntl(CategoryShow)
