/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"
import { useLocation } from "react-router"
//import { NavLink } from "react-router-dom"
import { PA_VERSION } from "./../../../../../../constants"
import { checkIsActive } from "../../../../../../helpers"

const HeaderMenu = ({ layoutProps }) => {
  const location = useLocation()
  const getMenuItemActive = (url) => {
    return checkIsActive(location, url) ? "menu-item-active" : ""
  }

  return <div
    id="kt_header_menu"
    className={`header-menu header-menu-mobile ${layoutProps.ktMenuClasses}`}
    {...layoutProps.headerMenuAttributes}
  >
    {/*begin::Header Nav*/}
    <ul className={`menu-nav ${layoutProps.ulClasses}`}>

      {/*begin::1 Level*/}
      <li className={`menu-item menu-item-rel ${getMenuItemActive('/')}`}>
        <span className="">
          <span className="menu-text"><FormattedMessage id="GENERAL.VERSION" values={{ version: PA_VERSION }} /> </span>
        </span>
      </li>
      {/*end::1 Level*/}
    </ul>
    {/*end::Header Nav*/}
  </div>
}


export default HeaderMenu
