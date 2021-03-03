/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"
import { useLocation } from "react-router"
import { NavLink } from "react-router-dom"
import SVG from "react-inlinesvg"
import { toAbsoluteUrl, checkIsActive } from "./../../../../../../helpers"
import routes from "../../../../routes"
import { ProtectedContent, ProtectedContents } from "../../../../../../components/wrappers"


const AsideMenuList = ({ layoutProps }) => {
  const location = useLocation()
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu && "menu-item-active"} menu-item-open `
      : ""
  }

  return (
    <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>

        {/*<li
          className={`menu-item ${getMenuItemActive(routes.dashboard.path, false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to={ routes.dashboard.path }>
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")}/>
            </span>
            <span className="menu-text">
              <FormattedMessage id="MENU.DASHBOARD" />
            </span>
          </NavLink>
        </li>*/}
        <ProtectedContent rule={routes.home}>
          <li
            className={`menu-item ${getMenuItemActive(routes.home.path, false)}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to={routes.home.path}>
              <span className="svg-icon menu-icon">
                <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Home.svg")} />
              </span>
              <span className="menu-text">
                <FormattedMessage id="MENU.HOME" />
              </span>
            </NavLink>
          </li>
        </ProtectedContent>
        <ProtectedContents rules={[routes.productList]}>
          {/* begin::section */}
          <li className="menu-section ">
            <h4 className="menu-text"><FormattedMessage id="MENU.PRODUCT_MANAGEMENT" /></h4>
            <i className="menu-icon flaticon-more-v2"></i>
          </li>
          {/* end:: section */}
          <ProtectedContent rule={routes.productList}>
            <li
              className={`menu-item ${getMenuItemActive(routes.productList.path, false)}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to={routes.productList.path}>
                <span className="svg-icon menu-icon">
                  <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Bag2.svg")} />
                </span>
                <span className="menu-text">
                  <FormattedMessage id="MENU.PRODUCT" />
                </span>
              </NavLink>
            </li>
          </ProtectedContent>
          <ProtectedContent rule={routes.categoryList}>
            <li
              className={`menu-item ${getMenuItemActive(routes.categoryList.path, false)}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to={routes.categoryList.path}>
                <span className="svg-icon menu-icon">
                  <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Box1.svg")} />
                </span>
                <span className="menu-text">
                  <FormattedMessage id="MENU.CATEGORY" />
                </span>
              </NavLink>
            </li>
          </ProtectedContent>
        </ProtectedContents>

        <ProtectedContents rules={[routes.orderList]}>
          {/* begin::section */}
          <li className="menu-section ">
            <h4 className="menu-text"><FormattedMessage id="MENU.ORDER_MANAGEMENT" /></h4>
            <i className="menu-icon flaticon-more-v2"></i>
          </li>
          {/* end:: section */}
          <ProtectedContent rule={routes.orderList}>
            <li
              className={`menu-item ${getMenuItemActive(routes.orderList.path, false)}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to={routes.orderList.path}>
                <span className="svg-icon menu-icon">
                  <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Cart2.svg")} />
                </span>
                <span className="menu-text">
                  <FormattedMessage id="MENU.ORDER" />
                </span>
              </NavLink>
            </li>
          </ProtectedContent>
        </ProtectedContents>

        <ProtectedContents rules={[routes.userList, routes.userGroupList]}>
          {/* begin::section */}
          <li className="menu-section ">
            <h4 className="menu-text"><FormattedMessage id="MENU.USER_MANAGEMENT" /></h4>
            <i className="menu-icon flaticon-more-v2"></i>
          </li>
          {/* end:: section */}
          <ProtectedContent rule={routes.userList}>
            <li
              className={`menu-item ${getMenuItemActive(routes.userList.path, false)}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to={routes.userList.path}>
                <span className="svg-icon menu-icon">
                  <SVG src={toAbsoluteUrl("/media/svg/icons/General/User.svg")} />
                </span>
                <span className="menu-text">
                  <FormattedMessage id="MENU.USER" />
                </span>
              </NavLink>
            </li>
          </ProtectedContent>
          <ProtectedContent rule={routes.userGroupList}>
            <li
              className={`menu-item ${getMenuItemActive(routes.userGroupList.path, false)}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to={routes.userGroupList.path}>
                <span className="svg-icon menu-icon">
                  <SVG src={toAbsoluteUrl("/media/svg/icons/Communication/Group.svg")} />
                </span>
                <span className="menu-text">
                  <FormattedMessage id="MENU.GROUP" />
                </span>
              </NavLink>
            </li>
          </ProtectedContent>
        </ProtectedContents>
      </ul>
      {/* end::Menu Nav */}
    </>
  )
}


export default AsideMenuList
