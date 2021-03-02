import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import categoryColumn from "./fields/categoryFields"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { fetchCategorys }  from "../../store/actions"
import { DataTable } from "../../../../../../components/partials/controls"
import { useCategorysUIContext } from "../../context/CategorysUIContext"

const CategoryTable = ({ intl }) => {
  // Categorys UI Context
  const categorysUIProps = useCategorysUIContext()
  
  const columns = categoryColumn({ intl, categorysUIProps })

  // Getting curret state of categorys list from store (Redux)
  const { totalSize, categorys: entities = [], isFetching } = useSelector(
    (state) => ({ ...state.admin.category }),
    shallowEqual
  )
  // Categorys Redux state
  const dispatch = useDispatch()

  useEffect(() => {
    // clear selections list
    categorysUIProps.setIds([])
    // server call by queryParams
    dispatch(fetchCategorys({ ...(categorysUIProps.queryParams || {}) }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categorysUIProps.queryParams, dispatch])

  return (
    <>
      <DataTable 
        isFetching={isFetching}
        entities={entities}
        columns={columns}
        totalSize={totalSize}
        queryParams={categorysUIProps.queryParams}
        onQueryParamsChange={categorysUIProps.setQueryParams}
        ids={categorysUIProps.ids}
        setIds={categorysUIProps.setIds}
      />
    </>
  )
}


export default injectIntl(CategoryTable)
