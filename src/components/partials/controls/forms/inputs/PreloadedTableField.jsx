import React, { useEffect, useState } from "react"
import { useFormikContext } from "formik"
import { withRouter } from "react-router-dom"
import { FormattedMessage } from "react-intl"
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory, { PaginationProvider } from "react-bootstrap-table2-paginator"
import Pagination from "./../../pagination/Pagination"
import * as columnFormatters from "./column-formatter"
import _ from "lodash"
import { FieldError } from "./FieldError"
import SearchFilter from "../search-filter/SearchFilter"


const PreloadedTable = ({
  field, // { name, value, onChange, onBlur }
  form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  inputGroupClassName = "form-group",
  columns = [],
  loadAttrName,
  required = false
}) => {
  const formik = useFormikContext()

  const [currentValue, setCurrentValue] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const options = _.get(formik.values, loadAttrName, undefined)
    if (_.isArray(options) && !_.isEqual(field.value, options)) {
      setCurrentValue(options)
      form.setFieldValue(field.name, options)
    }

    // eslint-disable-next-line
  }, [_.get(formik.values, loadAttrName, undefined)])

  useEffect(() => {
    console.log(field.value)
    if (!_.isEqual(field.value, currentValue) && !_.isEmpty(field.value)) {
      setCurrentValue(_.isArray(field.value) ? field.value: [])
    }

    // eslint-disable-next-line
  }, [field.value])

  const searchInTable = (currentValue, searchTerm) => {
    const values = JSON.parse(JSON.stringify(currentValue))
    if (searchTerm) {
      return values.filter((fields) => Object.keys(fields).some((key) => {
        return fields[key] === searchTerm
      }))
    }
    return values
  }

  const updateItem = (fieldName) => (rowIndex) => (value) => {
    form.setFieldValue(field.name, field.value.map((fieldValue, index) => {
      return index === rowIndex
        ? { ...fieldValue, [fieldName]: value }
        : fieldValue
    }))
  }

  const fieldPaginationOptions = {
    custom: true,
    totalSize: currentValue.length
  }

  return (
    <>
      <div className={inputGroupClassName}>
        {label && <label> {label} {(required && " *")}</label>}
        <SearchFilter applyFilter={({ search }) => setSearchTerm(search)} />
        <PaginationProvider pagination={paginationFactory(fieldPaginationOptions)}>
          {({ paginationProps, paginationTableProps }) => (
            <Pagination
              paginationProps={paginationProps}
            >
              <BootstrapTable
                pagination={paginationFactory(fieldPaginationOptions)}
                keyField="id"
                wrapperClasses="table-responsive"
                classes="table table-head-custom table-vertical-center overflow-hidden"
                bootstrap4
                bordered={false}
                data={searchInTable(currentValue, searchTerm)}
                noDataIndication={() => <div className="p-4 text-center text-muted font-weight-bolder"><FormattedMessage id="GENERAL.NO_DATA" /> </div>}
                columns={columns.map((col) => (col.editable ? ({
                      ...col,
                      formatter: columnFormatters.FieldEditFormatter,
                      formatExtraData: {
                        updateValue: updateItem(col.dataField),
                        options: _.isFunction(col.loadOptionsFromFormik) ? col.loadOptionsFromFormik(formik.values) : undefined,
                        ...col
                      }
                    }) : col))}
                {...paginationTableProps}
              />
            </Pagination>
          )}
        </PaginationProvider>
        <FieldError fieldName={field.name} />
      </div>
    </>
  )
}

export default withRouter(PreloadedTable)
