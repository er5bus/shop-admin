import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import userGroupColumn from "./fields/userGroupFields"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { fetchUserGroups }  from "../../store/actions"
import { DataTable } from "../../../../../../components/partials/controls"
import { useUserGroupsUIContext } from "../../context/UserGroupsUIContext"

const UserGroupTable = ({ intl }) => {
  // UserGroups UI Context
  const userGroupsUIProps = useUserGroupsUIContext()
  
  const columns = userGroupColumn({ intl, userGroupsUIProps })

  // Getting curret state of userGroups list from store (Redux)
  const { totalSize, userGroups: entities = [], isFetching } = useSelector(
    (state) => ({ ...state.admin.userGroup }),
    shallowEqual
  )
  // UserGroups Redux state
  const dispatch = useDispatch()

  useEffect(() => {
    // clear selections list
    userGroupsUIProps.setIds([])
    // server call by queryParams
    dispatch(fetchUserGroups({ ...(userGroupsUIProps.queryParams || {}) }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userGroupsUIProps.queryParams, dispatch])

  return (
    <>
      <DataTable 
        isFetching={isFetching}
        entities={entities}
        columns={columns}
        totalSize={totalSize}
        queryParams={userGroupsUIProps.queryParams}
        onQueryParamsChange={userGroupsUIProps.setQueryParams}
        ids={userGroupsUIProps.ids}
        setIds={userGroupsUIProps.setIds}
      />
    </>
  )
}


export default injectIntl(UserGroupTable)
