import React from "react"
import { FormattedMessage } from "react-intl"
import SVG from "react-inlinesvg"
import { ENDPOINTS } from "./../../store/constants"
import { toAbsoluteUrl } from "./../../../../../../helpers"
import { useUsersUIContext } from "../../context/UsersUIContext"
import {DataTableGrouping} from "../../../../../../components/partials"
import useDownloader from "../../../../../../hooks/useDownloader"

const UsersGrouping = () => {
  // Users UI Context
  const usersUIProps = useUsersUIContext()

  const [ isDownloding, downloadTrigger ] = useDownloader({
    endpoint: ENDPOINTS.EXPORT_USERS,
    params: { ids: usersUIProps.ids },
    filename: "export.xlsx"
  })

  return (
    <DataTableGrouping rows={ usersUIProps.ids.length }>
      <button
        type="button"
        disabled={isDownloding}
        className="btn btn-sm btn-primary font-weight-bolder font-size-sm mx-2"
        onClick={ downloadTrigger }
      >
        <span className="svg-icon svg-icon-md svg-icon-light">
          <SVG src={toAbsoluteUrl("/media/svg/icons/Files/Export.svg")} />
        </span>
        <FormattedMessage id="GENERAL.EXPORT" />
      </button>
    </DataTableGrouping>
  )
}


export default UsersGrouping
