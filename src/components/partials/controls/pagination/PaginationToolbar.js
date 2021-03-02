/* eslint-disable no-unused-vars */
import React from "react"
import _ from "lodash"
import {FormattedMessage, injectIntl} from "react-intl"
import {PaginationTotalStandalone} from "react-bootstrap-table2-paginator"

const PaginationToolbar = (props) => {
  const { isLoading, intl, paginationProps } = props
  let {
    sizePerPage,
    totalSize,
    onSizePerPageChange,
  } = paginationProps

  paginationProps.paginationTotalRenderer=(from, to, size) => (
    <span className="react-bootstrap-table-pagination-total pr-3">
      { intl.formatMessage({ id: "GENERAL.PAGINATION_TOTAL" }, { from, to, size }) }
    </span>
  )

  const style = {
    width: "75px"
  }

  const sizePerPageList =  [
    { text: "10", value: 10 },
    { text: "25", value: 25 },
    { text: "30", value: 30 },
    { text: "50", value: 50 }
  ]

  const onSizeChange = event => {
    const newSize =+ event.target.value
    onSizePerPageChange(newSize, 1)
  }

  return (
    <div className="d-flex align-items-center py-3">
      {isLoading && (
        <div className="d-flex align-items-center">
          <div className="mr-2 text-muted"><FormattedMessage id="GENERAL.LOADING" /></div>
          <div className="spinner spinner-primary mr-10"></div>
        </div>
      )}
      <select
        className={`form-control form-control-sm font-weight-bold mr-4 border-0 bg-light ${totalSize === 0 && "disabled"}`}
        onChange={onSizeChange}
        value={sizePerPage}
        style={style}
      >
        {sizePerPageList.map(option => {
          const isSelect = sizePerPage === `${option.page}`
          return (
            <option
              key={option.text}
              value={option.page}
              className={`btn ${isSelect ? "active" : ""}`}
            >
              {option.text}
            </option>
          )
        })}
      </select>
      <PaginationTotalStandalone className="text-muted" {...paginationProps} />
    </div>
  )
}


export default injectIntl(PaginationToolbar)
