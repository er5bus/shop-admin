import React from "react"
import { FormattedMessage } from "react-intl"
import { toAbsoluteUrl } from "../../../../../../helpers"
import SVG from "react-inlinesvg"
import {OverlayTrigger, Tooltip} from "react-bootstrap"


const FieldActionFormatter = ( cellContent, row, rowIndex, formatExtraData ) => {

  return (
    <div className="text-right">
      <OverlayTrigger
        overlay={<Tooltip id="multiselect-table-edit-tooltip"><FormattedMessage id="GENERAL.REMOVE" /></Tooltip>}
      >
        <div
          className="btn btn-sm btn-icon btn-light btn-hover-danger btn-sm mx-1 my-1"
          onClick={() => formatExtraData.removeItem(row)}
        >
          <span className="svg-icon svg-icon-md svg-icon-danger">
            <SVG
              src={toAbsoluteUrl("/media/svg/icons/General/Trash.svg")}
            />
          </span>
        </div>
      </OverlayTrigger>

      <OverlayTrigger
        overlay={<Tooltip id="multiselect-table-show-tooltip"><FormattedMessage id="GENERAL.SHOW" /></Tooltip>}
      >
        <div
          className="btn btn-sm btn-icon btn-light btn-hover-info btn-sm mx-1 my-1"
          onClick={() => formatExtraData.openShowPage(row, formatExtraData.history)}
        >
          <span className="svg-icon svg-icon-md svg-icon-info">
            <SVG src={toAbsoluteUrl("/media/svg/icons/General/Visible.svg")} />
          </span>
        </div>
      </OverlayTrigger>
    </div>
  )
}

export default FieldActionFormatter
