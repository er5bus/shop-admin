import React from "react"
import { Col, Row } from "react-bootstrap"
import { FormattedMessage, injectIntl } from "react-intl"
import { Switch, Redirect, NavLink } from "react-router-dom"

import { ContentRoute } from "../../../../components/router"
import { useSubheader } from "../../../../components/layout"

import PersonIcon from "@material-ui/icons/Person"
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd"
import VpnKeyIcon from "@material-ui/icons/VpnKey"
import { isEmpty } from "lodash"
import routes from "./routes"
import {useSelector, shallowEqual, useDispatch} from "react-redux"
import {fetchUser, clearError} from "./store/actions"
import {ItemNotFound, Snackbars, SnackbarError} from "../../../../components/partials"

import {isRLTLang} from "../../../../i18n"
import {FormUIProvider} from "../../../../components/partials/controls/forms/context/FormUIContext"


const UpdateProfile = ({ intl }) => {

  // Subheader
  const subheader = useSubheader()
  const dispatch = useDispatch()

  React.useLayoutEffect(() => {
    subheader.setTitle(intl.formatMessage({ id: "GENERAL.EDIT_PROFILE" }))
  }, [subheader, intl])

  React.useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  const { account, isFetching, success, error } = useSelector(
    (state) => ({
      account: state.admin.profile.account,
      isFetching: state.admin.profile.isFetching,
      success: state.admin.profile.success,
      error: state.admin.profile.error
    }),
    shallowEqual
  )

  const clear = () => {
    dispatch(clearError())
  }
  return (
    <>
      { success && <Snackbars open={success} message={ intl.formatMessage({ id: "PROFILE.EDIT.MSG" }) } onClose={clear} /> }
      { !isEmpty(error) && <SnackbarError open={!isEmpty(error)} error={error || {}} onClose={ clear } /> }
      { account && <Row>
        <Col xl="4" lg="5">
          {/*<!--begin::Aside-->*/}
          <div className="flex-row-auto offcanvas-mobile" id="kt_profile_aside">
            {/*<!--begin::Profile Card-->*/}
            <div className="card card-custom card-stretch">
              {/*<!--begin::Body-->*/}
              <div className="card-body">
                {/*<!--begin::User-->*/}
                <div className="d-flex align-items-center">
                  <div className={"symbol symbol-60 symbol-xl-50 m" + (isRLTLang() ? "l" : "r" ) + "-3 align-self-start align-self-xl-center"}>
                    <span className="symbol-label text-primary font-weight-bold font-size-h4">
                      { (account.user.firstName[0] || "-") + (account.user.lastName[0] || "-") }
                    </span>
                    <i className="symbol-badge bg-success"></i>
                  </div>
                  <div>
                    <span className="font-weight-bolder mx-5 font-size-h5 text-dark-75 text-hover-primary">
                      <div className="text-dark m-0 flex-grow-1 mr-3 font-size-h5">
                        { isRLTLang() ?
                          <>{account.user.firstNameAr || "----"} {account.user.lastNameAr || "----"}</> :
                          <>{account.user.firstName || "----"} {account.user.lastName || "----"}</>
                        }
                      </div>

                    </span>
                    <div className="text-muted"></div>
                  </div>
                </div>
                {/*<!--end::User-->*/}
                {/*<!--begin::Contact-->*/}
                <div className="py-9">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="font-weight-bold mr-2"><FormattedMessage id="USER.INPUT.EMAIL" /></span>
                    <span className="text-muted text-hover-primary">{ account.user.email }</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="font-weight-bold mr-2"><FormattedMessage id="USER.INPUT.USERNAME" /></span>
                    <span className="text-muted">{ !isRLTLang() ? account.user.firstName : account.user.firstNameAr }</span>
                  </div>
                </div>
                {/*<!--end::Contact-->*/}
                <div className="navi navi-bold navi-hover navi-active navi-link-rounded">
                  <div className="navi-item mb-2">
                    <NavLink to={routes.personalInformation.path} className="navi-link py-4">
                      <span className="navi-icon mr-2">
                        <span className="svg-icon">
                          <PersonIcon />
                        </span>
                      </span>
                      <span className="navi-text font-size-lg"><FormattedMessage id="MENU.PERSONAL_INFORMATION" /></span>
                    </NavLink>
                  </div>
                  <div className="navi-item mb-2">
                    <NavLink to={routes.accountInformation.path} className="navi-link py-4">
                      <span className="navi-icon mr-2">
                        <span className="svg-icon">
                          <AssignmentIndIcon />
                        </span>
                      </span>
                      <span className="navi-text font-size-lg"><FormattedMessage id="MENU.ACCOUNT_INFORMATION" /></span>
                    </NavLink>
                  </div>
                  <div className="navi-item mb-2">
                    <NavLink to={routes.changePassword.path} className="navi-link py-4">
                      <span className="navi-icon mr-2">
                        <span className="svg-icon">
                          <VpnKeyIcon />
                        </span>
                      </span>
                      <span className="navi-text font-size-lg"><FormattedMessage id="MENU.CHANGE_PASSWORD" /></span>
                    </NavLink>
                  </div>
                </div>
              </div>
              {/*<!--end::Body-->*/}
            </div>
            {/*<!--end::Profile Card-->*/}
          </div>
          {/*<!--end::Aside-->*/}
        </Col>
        <Col xl="8"  lg="7">
          <FormUIProvider>
            <Switch>
              { Object.keys(routes).map((key, i) => <ContentRoute key={i} { ...routes[key] }  />) }
              <Redirect from="*" to={ routes.personalInformation.path }/>
            </Switch>
          </FormUIProvider>
        </Col>
      </Row>}
      { (!isFetching && !account) && <ItemNotFound /> }
    </>)
}


export default injectIntl(UpdateProfile)
