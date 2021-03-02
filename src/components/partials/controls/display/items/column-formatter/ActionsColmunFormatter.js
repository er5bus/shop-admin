import React from "react"
import { FormattedMessage } from "react-intl"
import { toAbsoluteUrl } from "../../../../../../helpers"
import SVG from "react-inlinesvg"
import {OverlayTrigger, Tooltip} from "react-bootstrap"

const ActionsColumnFormatter = ( cellContent, row, rowIndex, formatExtraData ) => {

  return (
    <div className="text-right">
      <OverlayTrigger
        overlay={<Tooltip id="multiselect-table-edit-tooltip"><FormattedMessage id="GENERAL.SHOW" /></Tooltip>}
      >
        <div
          className="btn btn-sm btn-icon btn-light btn-hover-primary btn-sm mx-1 my-1"
          onClick={() => formatExtraData.openShowPage(row, formatExtraData.history)}
        >
          <span className="svg-icon svg-icon-md svg-icon-primary">
            <SVG src={toAbsoluteUrl("/media/svg/icons/General/Visible.svg")} />
          </span>
        </div>
      </OverlayTrigger>
      {
        formatExtraData.addAnotherActions && formatExtraData.addAnotherActions.map((extraAction) => {
          if (extraAction.onShowCondition && extraAction.onShowCondition(row, formatExtraData.currentObj)) {
            return (
              <OverlayTrigger
                overlay={<Tooltip id="multiselect-table-edit-tooltip">{ extraAction.label }</Tooltip>}
              >
                <div
                  className="btn btn-sm btn-icon btn-light btn-hover-primary btn-sm mx-1 my-1"
                  onClick={() => extraAction.onClick(row, formatExtraData.history, formatExtraData.currentObj)}
                >
                  <span className="svg-icon svg-icon-md svg-icon-primary">
                    <SVG src={toAbsoluteUrl( extraAction.iconPath )} />
                  </span>
                </div>
              </OverlayTrigger>
            )
          }
          return <></>
        })
      }
    </div>
  )
}


export default ActionsColumnFormatter
