import React, { useMemo } from "react"
import { isEqual } from "lodash"
import { useCategorysUIContext } from "../../context/CategorysUIContext"
import {SearchFilter} from "../../../../../../components/partials"


const CategorysFilter = () => {
  // Categorys UI Context
  const categorysUIContext = useCategorysUIContext()
  const categorysUIProps = useMemo(() => {
    return {
      ...categorysUIContext
    }
  }, [categorysUIContext])

  const applyFilter = (values) => {
    const newQueryParams = { ...categorysUIProps.queryParams, ...values }
    if (!isEqual(newQueryParams, categorysUIProps.queryParams)) {
      newQueryParams.pageNumber = 1
      categorysUIProps.setQueryParams(newQueryParams)
    }
  }

  return (
    <SearchFilter applyFilter={applyFilter} />
  )
}


export default CategorysFilter
