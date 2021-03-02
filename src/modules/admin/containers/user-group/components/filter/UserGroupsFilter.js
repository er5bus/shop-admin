import React, { useMemo } from "react"
import { isEqual } from "lodash"
import { useUserGroupsUIContext } from "../../context/UserGroupsUIContext"
import {SearchFilter} from "../../../../../../components/partials"


const UserGroupsFilter = () => {
  // UserGroups UI Context
  const userGroupsUIContext = useUserGroupsUIContext()
  const userGroupsUIProps = useMemo(() => {
    return {
      ...userGroupsUIContext
    }
  }, [userGroupsUIContext])

  const applyFilter = (values) => {
    const newQueryParams = { ...userGroupsUIProps.queryParams, ...values }
    if (!isEqual(newQueryParams, userGroupsUIProps.queryParams)) {
      newQueryParams.pageNumber = 1
      userGroupsUIProps.setQueryParams(newQueryParams)
    }
  }

  return (
    <SearchFilter applyFilter={applyFilter} />
  )
}


export default UserGroupsFilter
