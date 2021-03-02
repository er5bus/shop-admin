import React, { useMemo } from "react"
import { isEqual } from "lodash"
import { useProductsUIContext } from "../../context/ProductsUIContext"
import {SearchFilter} from "../../../../../../components/partials"


const ProductsFilter = () => {
  // Products UI Context
  const productsUIContext = useProductsUIContext()
  const productsUIProps = useMemo(() => {
    return {
      ...productsUIContext
    }
  }, [productsUIContext])

  const applyFilter = (values) => {
    const newQueryParams = { ...productsUIProps.queryParams, ...values }
    if (!isEqual(newQueryParams, productsUIProps.queryParams)) {
      newQueryParams.pageNumber = 1
      productsUIProps.setQueryParams(newQueryParams)
    }
  }

  return (
    <SearchFilter applyFilter={applyFilter} />
  )
}


export default ProductsFilter
