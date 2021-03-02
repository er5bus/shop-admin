import React, {useEffect, useState} from "react"
import { useFormikContext } from "formik"
import { withRouter } from "react-router-dom"
import { FormattedMessage } from "react-intl"
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory, { PaginationProvider } from "react-bootstrap-table2-paginator"
import { getHandlerTableChange } from "../../../../../helpers"
import Pagination from "./../../pagination/Pagination"
import * as columnFormatters from "./column-formatter"
import _ from "lodash"
import { FieldError } from "./FieldError"
import SearchFilter from "../search-filter/SearchFilter"


const MultiSelectTable = ({
  field, // { name, value, onChange, onBlur }
  form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  tableLabel,
  inputGroupClassName = "form-group",
  columns = [],
  loadAttrName,
  loadData,
  openShowPage,
  required = false,
  history
}) => {

  const formik = useFormikContext()

  const [ entities, setEntities ] = useState([])
  const [ totalSize, setTotalSize ] = useState(0)
  const [ queryParams, setQueryParams ] = useState([])
  const [ isFetching, setFetching ] = useState([])

  const [ currentValue, setCurrentValue ] = useState([])
  const [ searchTerm, setSearchTerm ] = useState("") 

  useEffect(() => {
    loadData(queryParams, setFetching, setEntities, setTotalSize)
     // eslint-disable-next-line
  }, [queryParams])

  useEffect(() => {
    const options = _.get(formik.values, loadAttrName, [])
    if (!_.isEmpty(options)){
      setCurrentValue(options)
      form.setFieldValue(field.name, _.uniq(options.map((val) => val.id)))
    }

    if (!_.isEmpty(currentValue) && _.isEmpty(field.value)){
      setCurrentValue([])
    }
     // eslint-disable-next-line
  }, [_.get(formik.values, loadAttrName, [])])

  useEffect(() => {
    //setQueryParams({ ...queryParams, ids: field.value })
    
    // eslint-disable-next-line
  }, [field.value])

  const addItem = (item) => {
    if (!(field.value || []).includes(item.id)) {
      const values = [...currentValue, item]
      setCurrentValue(values)
      form.setFieldValue(field.name, values.map((val) => val.id))
      form.setFieldValue(loadAttrName, values)
    }
  }

  const searchInTable = (currentValue, searchTerm) => {
    const values = JSON.parse(JSON.stringify(currentValue))
    if (searchTerm){
      return values.filter((fields) => Object.keys(fields).some((key) => {
        return fields[key] === searchTerm
      }))
    }
    return values
  }

  const removeItem = (item) => {
    const values = (currentValue || []).filter((val) => val.id !== item.id)
    setCurrentValue(values)
    form.setFieldValue(field.name, values.map((val) => val.id))
    form.setFieldValue(loadAttrName, values)
  }

  const fieldPaginationOptions = {
    custom: true,
    totalSize: currentValue.length
  }

  const paginationOptions = {
    custom: true,
    totalSize,
  }

  return (
    <>
      <div className={ inputGroupClassName }>
        {label && <label> { label} { (required && " *") }</label>}
        <SearchFilter applyFilter={({ search }) => setSearchTerm(search) } />
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
                data={ searchInTable(currentValue, searchTerm) }
                noDataIndication={ () => <div className="p-4 text-center text-muted font-weight-bolder"><FormattedMessage id="GENERAL.NO_DATA" /> </div> }
                columns={[
                  ...columns,
                  {
                    dataField: "action",
                    text: <FormattedMessage id="GENERAL.ACTIONS" />,
                    formatter: columnFormatters.FieldActionFormatter,
                    formatExtraData: {
                      removeItem,
                      history,
                      openShowPage
                    },
                    classes: "text-right pr-0",
                    headerClasses: "text-right pr-3",
                    style: {
                      minWidth: "200px",
                    },
                  },
                ]}
                {...paginationTableProps}
              />
            </Pagination>
          ) }
        </PaginationProvider>
        <FieldError fieldName={field.name} />
      </div>

      <div className={ inputGroupClassName }>
        {tableLabel && <label> { tableLabel } </label>}
        <SearchFilter applyFilter={ (value) => setQueryParams(value) } />
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
                  noDataIndication={ () => <div className="p-4 text-center text-muted font-weight-bolder"><FormattedMessage id="GENERAL.NO_DATA" /> </div> }
                  keyField="id"
                  data={entities}
                  columns={[
                    ...columns,
                    {
                      dataField: "action",
                      text: <FormattedMessage id="GENERAL.ACTIONS" />,
                      formatter: columnFormatters.ListActionFormatter,
                      formatExtraData: {
                        addItem,
                        items: field.value,
                        history,
                        openShowPage
                      },
                      classes: "text-right pr-0",
                      headerClasses: "text-right pr-3",
                      style: {
                        minWidth: "200px",
                      },
                    },
                  ]}
                  onTableChange={getHandlerTableChange(
                    setQueryParams,
                  )}
                  {...paginationTableProps}
                >
                </BootstrapTable>
              </Pagination>
            )
          }}
        </PaginationProvider>
      </div>
    </>
  )
}


export default withRouter(MultiSelectTable)
