import React from "react"
import { isEqual } from "lodash"
import { useUsersUIContext } from "../../context/UsersUIContext"
import { SearchFilter } from "./../../../../../../components/partials/controls"


const UsersFilter = () => {
  // Users UI Context
  const usersUIProps = useUsersUIContext()
  
  const applyFilter = (values) => {
    const newQueryParams = { ...usersUIProps.queryParams, ...values }
    if (!isEqual(newQueryParams, usersUIProps.queryParams)) {
      newQueryParams.pageNumber = 1
      usersUIProps.setQueryParams(newQueryParams)
    }
  }

  return (
    <SearchFilter applyFilter={applyFilter} />
  )
}


export default UsersFilter
