/* eslint-disable no-restricted-imports */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, {useMemo} from "react"
import {Link} from "react-router-dom"
import Dropdown from "react-bootstrap/Dropdown"
import {useSelector} from "react-redux"
import objectPath from "object-path"
import { FormattedMessage } from "react-intl"

import {useHtmlClassService} from "../../../../../../components/layout"
import {toAbsoluteUrl} from "../../../../../../helpers"

import rootRoutes from "../../../../../../routes"
import routes from "./../../../../routes"

import {DropdownTopbarItemToggler} from "../../../../../../components/partials"
import {isRLTLang} from "../../../../../../i18n"
/*import Avatar from "@material-ui/core/Avatar"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  purpleAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: "#002884",
  },
})
*/

const UserProfileDropdown = () => {
  const { firstName = "", lastName = "", firstNameAr = "", lastNameAr = "" } = useSelector(state => state.common.auth.currentUser.user || {})

  const uiService = useHtmlClassService()
  const layoutProps = useMemo(() => {
    return {
      light: objectPath.get(uiService.config, "extras.user.dropdown.style") === "light",
    }
  }, [uiService])
  //const classes = useStyles()

  return (
    <Dropdown drop="down" alignRight>
      <Dropdown.Toggle
        as={DropdownTopbarItemToggler}
        id="dropdown-toggle-user-profile"
      >
        <div className={"btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2"}>
          <span className={"text-dark-50 font-weight-bolder font-size-base d-none d-md-inline m" + (isRLTLang() ? "l" : "r") +"-3"}>
            { isRLTLang() ? <>{firstNameAr || "----"} {lastNameAr || "----"}</> : <>{firstName || "----"} {lastName || "----"}</> }
          </span>
          {/*<Avatar className={classes.purpleAvatar}>{firstName[0]+lastName[0] || "-"}</Avatar>*/}
          <span className="symbol symbol-35 symbol-light-primary">
            <span className="symbol-label font-size-h5 font-weight-bold">
              { firstName[0]+lastName[0] || "-" }
            </span>
          </span>
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu
        className="p-0 m-0 dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl">
        <>
          {/** ClassName should be "dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl" */}
          {!layoutProps.light && (<>
            <div className="d-flex align-items-center p-8 rounded-top">

              <div className="symbol symbol-md bg-light-primary mr-3 flex-shrink-0">
                <img src={toAbsoluteUrl("/media/users/300_21.jpg")} alt=""/>
              </div>
              <div className="text-dark m-0 flex-grow-1 mr-3 font-size-h5">
                { isRLTLang() ? <>{firstNameAr || "----"} {lastNameAr || "----"}</> : <>{firstName || "----"} {lastName || "----"}</> }
              </div>
            </div>
            <div className="separator separator-solid"></div>
          </>)}

          {layoutProps.light && (
            <>
              <div
                className="d-flex align-items-center justify-content-between flex-wrap p-8 bgi-size-cover bgi-no-repeat rounded-top"
                style={{
                  backgroundImage: `url(${toAbsoluteUrl("/media/misc/bg-1.jpg")})`
                }}
              >
                <div className={"symbol bg-white-o-15 m" + (isRLTLang() ? "l" : "r") +"-3"}>
                  {/*<Avatar className={classes.purpleAvatar}>{firstName[0]+lastName[0] || "-"}</Avatar>*/}
                  <span className="symbol-label text-primary font-weight-bold font-size-h4">{firstName[0]+lastName[0] || "-"}</span>
                  {/*<img alt="Pic" className="hidden" src={user.pic} />*/}
                </div>
                <div className="text-dark-50 m-0 flex-grow-1 mr-3 font-size-h5">
                  { isRLTLang() ? <>{firstNameAr || "----"} {lastNameAr || "----"}</> : <>{firstName || "----"} {lastName || "----"}</> }
                </div>
              </div>
              <div className="separator separator-solid"></div>
            </>
          )}
        </>

        <div className="navi navi-spacer-x-0 pt-5">
          <Link to={routes.profile.path} className="navi-item px-8">
            <div className="navi-link">
              <div className="navi-icon mr-2">
                <i className="flaticon2-calendar-3 text-success"/>
              </div>
              <div className="navi-text">
                <div className="font-weight-bold menu-text">
                  <FormattedMessage id="GENERAL.MY_PROFILE" />
                </div>
                <div className="text-muted">
                  <FormattedMessage id="GENERAL.MY_PROFILE.DESC" />
                </div>
              </div>
            </div>
          </Link>

          <Link to={routes.updateProfile.path} className="navi-item px-8">
            <div className="navi-link">
              <div className="navi-icon mr-2">
                <i className="flaticon2-settings text-info"/>
              </div>
              <div className="navi-text">
                <div className="font-weight-bold">
                  <FormattedMessage id="GENERAL.EDIT_PROFILE" />
                </div>
                <div className="text-muted">
                  <FormattedMessage id="GENERAL.EDIT_PROFILE.DESC" />
                </div>
              </div>
            </div>
          </Link>

          <div className="navi-separator mt-3"></div>

          <div className="navi-footer px-8 py-5 text-right">
            <Link to={rootRoutes.logout.path} className="btn btn-light-primary font-weight-bold">
              <FormattedMessage id="GENERAL.LOGOUT" />
            </Link>
          </div>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  )
}


export default UserProfileDropdown
