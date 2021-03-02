import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import productColumn from "./fields/productFields"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { fetchProducts }  from "../../store/actions"
import { DataTable } from "../../../../../../components/partials/controls"
import { useProductsUIContext } from "../../context/ProductsUIContext"

const ProductTable = ({ intl }) => {
  // Products UI Context
  const productsUIProps = useProductsUIContext()
  
  const columns = productColumn({ intl, productsUIProps })

  // Getting curret state of products list from store (Redux)
  const { totalSize, products: entities = [], isFetching } = useSelector(
    (state) => ({ ...state.admin.product }),
    shallowEqual
  )
  // Products Redux state
  const dispatch = useDispatch()

  useEffect(() => {
    // clear selections list
    productsUIProps.setIds([])
    // server call by queryParams
    dispatch(fetchProducts({ ...(productsUIProps.queryParams || {}) }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsUIProps.queryParams, dispatch])

  return (
    <>
      <DataTable 
        isFetching={isFetching}
        entities={entities}
        columns={columns}
        totalSize={totalSize}
        queryParams={productsUIProps.queryParams}
        onQueryParamsChange={productsUIProps.setQueryParams}
        ids={productsUIProps.ids}
        setIds={productsUIProps.setIds}
      />
    </>
  )
}


export default injectIntl(ProductTable)
