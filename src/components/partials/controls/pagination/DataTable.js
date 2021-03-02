import React from "react"
import { isEqual } from "lodash"
import BootstrapTable from "react-bootstrap-table-next"
import { injectIntl } from "react-intl"
import paginationFactory, { PaginationProvider } from "react-bootstrap-table2-paginator"
import { getSelectRow, getHandlerTableChange } from "../../../../helpers"
import Pagination from "./Pagination"
import {SearchFilter} from ".."


const DataTable = ({
  intl,
  entities,
  columns,
  isFetching,
  totalSize,
  queryParams,
  onQueryParamsChange,
  ids,
  setIds
}) => {

  const applyFilter = (values) => {
    const newQueryParams = { ...queryParams, ...values }
    if (!isEqual(newQueryParams, queryParams)) {
      newQueryParams.pageNumber = 1
      onQueryParamsChange(newQueryParams)
    }
  }

  // Table pagination properties
  const paginationOptions = {
    custom: true,
    totalSize,
    ...queryParams
  }

  let selectRow = {}
  if (ids && setIds) {
    selectRow = ({ selectRow : getSelectRow({entities,ids,setIds}) })
  }

  return (
    <>
      <SearchFilter applyFilter={applyFilter} />
      <PaginationProvider pagination={paginationFactory(paginationOptions)}>
        {({ paginationProps, paginationTableProps }) => {
          return (
            <Pagination
              isLoading={isFetching}
              paginationProps={paginationProps}
            >
              <BootstrapTable
                pagination={paginationFactory(paginationOptions)}
                wrapperClasses="table-responsive"
                classes="table table-head-custom table-vertical-center overflow-hidden"
                bootstrap4
                bordered={false}
                remote
                noDataIndication={ () => <div className="p-4 text-center text-muted font-weight-bolder">{intl.formatMessage({ id: "GENERAL.NO_DATA" }) } </div> }
                keyField="id"
                data={entities}
                columns={columns}
                onTableChange={getHandlerTableChange(
                  onQueryParamsChange
                )}
                { ...selectRow }
                {...paginationTableProps}
              >
              </BootstrapTable>
            </Pagination>
          )
        }}
      </PaginationProvider>
    </>
  )
}


export default injectIntl(DataTable)
