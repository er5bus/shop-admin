import React from "react"
import { FormattedMessage } from "react-intl"
import { toAbsoluteUrl } from "../../../../../../helpers"
import SVG from "react-inlinesvg"
import {OverlayTrigger, Tooltip} from "react-bootstrap"


const ListActionFormatter = ( cellContent, row, rowIndex, formatExtraData ) => {

  return (
    <div className="text-right">
      { !formatExtraData.items.includes(row.id) && <OverlayTrigger
        overlay={<Tooltip id="multiselect-table-edit-tooltip"><FormattedMessage id="GENERAL.ADD" /></Tooltip>}
      >
        <div
          className="btn btn-sm btn-icon btn-light btn-hover-primary btn-sm mx-1 my-1"
          onClick={() => formatExtraData.addItem(row)}
        >
          <span className="svg-icon svg-icon-md svg-icon-primary">
            <SVG
              src={toAbsoluteUrl("/media/svg/icons/Navigation/Plus.svg")}
            />
          </span>
        </div>
      </OverlayTrigger>}

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

export default ListActionFormatter
