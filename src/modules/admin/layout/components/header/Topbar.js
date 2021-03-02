import React/*, { useMemo }*/ from "react"
//import objectPath from "object-path"
import SVG from "react-inlinesvg"
import { OverlayTrigger, Tooltip } from "react-bootstrap"
import { toAbsoluteUrl } from "../../../../../helpers"
import { /*useHtmlClassService,*/ LanguageSelectorDropdown } from "../../../../../components/layout"

//import SearchDropdown from "../extras/dropdowns/search/SearchDropdown"
//import QuickActionsDropdown from "../extras/dropdowns/QuickActionsDropdown"
import QuickUserToggler from "../extras/QuiclUserToggler"


const Topbar = () => {
  return (
    <div className="topbar">
      {/*       {layoutProps.viewSearchDisplay && <SearchDropdown />}
      
      <QuickActionsDropdown />
      */}
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip id="quick-panel-tooltip">Quick panel</Tooltip>}
      >
        <div
          className="topbar-item"
          data-toggle="tooltip"
          title="Quick panel"
          data-placement="right"
        >
          <div
            className="btn btn-icon btn-clean btn-lg mr-1"
            id="kt_quick_panel_toggle"
          >
            <span className="svg-icon svg-icon-xl svg-icon-primary">
              <SVG
                src={toAbsoluteUrl(
                  "/media/svg/icons/Layout/Layout-4-blocks.svg"
                )}
              />
            </span>
          </div>
        </div>
      </OverlayTrigger>
      <LanguageSelectorDropdown />
      <QuickUserToggler />
    </div>
  )
}


export default Topbar
