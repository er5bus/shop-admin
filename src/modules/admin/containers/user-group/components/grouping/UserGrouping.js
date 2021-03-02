import React from "react"
import { FormattedMessage } from "react-intl"
import SVG from "react-inlinesvg"
import { toAbsoluteUrl } from "./../../../../../../helpers"
import { useUserGroupsUIContext } from "../../context/UserGroupsUIContext"
import {ProtectedLink} from "../../../../../../components/wrappers"
import {DataTableGrouping} from "../../../../../../components/partials"

const UserGrouping = () => {
  // UserGroups UI Context
  const userGroupsUIProps = useUserGroupsUIContext()

  return (
    <DataTableGrouping rows={ userGroupsUIProps.ids.length }>
      <ProtectedLink rule={userGroupsUIProps.deleteUserGroupsRule}>
        <button
          type="button"
          className="btn btn-sm btn-danger font-weight-bolder font-size-sm mx-2"
          onClick={userGroupsUIProps.openDeleteUserGroupsDialog}
        >
          <span className="svg-icon svg-icon-md svg-icon-light">
            <SVG src={toAbsoluteUrl("/media/svg/icons/General/Trash.svg")} />
          </span>
          <FormattedMessage id="GENERAL.DELETE" />
        </button>
      </ProtectedLink>
    </DataTableGrouping>
  )
}


export default UserGrouping
