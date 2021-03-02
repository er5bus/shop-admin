import React from "react"
import { injectIntl } from "react-intl"

import { useSubheader } from "../../../../components/layout"
import { Card, CardBody, ModalProgressBar, ItemNotFound, DisplayItem } from "../../../../components/partials/controls"

import AssignmentIndIcon from "@material-ui/icons/AssignmentInd"
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone"

import { Row, Col } from "react-bootstrap"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { fetchUser } from "./store/actions"

import { isRLTLang } from "../../../../i18n"


const AccountInformation = ({ intl }) => {
  // Subheader
  const subheader = useSubheader()
  const dispatch = useDispatch()

  React.useLayoutEffect(() => {
    subheader.setTitle(intl.formatMessage({ id: "GENERAL.MY_PROFILE" }))
  }, [subheader, intl])

  React.useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  const { account, isFetching } = useSelector(
    (state) => ({
      isFetching: state.admin.profile.isFetching,
      account: state.admin.profile.account
    }),
    shallowEqual
  )

  return (
    <>
      {account && (
        <Card>
          {isFetching && <ModalProgressBar />}
          <CardBody>
            <>
              <div className="d-flex mb-9">
                <div className="flex-shrink-0 mr-0 mt-lg-0 mt-3">
                  <div className={"symbol bg-white-o-15 m" + (isRLTLang() ? "l" : "r" ) + "-3"}>
                    <span className="symbol-label text-primary font-weight-bold font-size-h4">
                      { (account.user && account.user.firstName[0]+account.user.lastName[0]) || "-"}
                    </span>
                  </div>
                </div>
                {
                  // Cheking the language
                  isRLTLang() ? (
                  // If Arabic
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between flex-wrap mt-1">
                      <div className="d-flex mr-3">
                        <div>
                          <i className="flaticon2-correct text-primary font-size-h5"></i>
                        </div>
                        <div className="text-dark-75 text-hover-primary font-size-h5 font-weight-bold mr-3">{account.user.firstNameAr + " " + account.user.lastNameAr}</div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between flex-wrap mt-1">
                      <div className="d-flex mr-3">
                        <div>
                          <i className="flaticon2-new-email mr-1 font-size-lg"></i>
                        </div>
                        <div className=" text-hover-primary font-weight-bold mr-lg-3 mr-5 mb-lg-0 mb-2">
                          {account.user.email}
                        </div>
                      </div>
                    </div>
                  </div>
                  ) : (
                  // If Frensh
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between flex-wrap mt-1">
                      <div className="d-flex mr-3">
                        <div className="text-dark-75 text-hover-primary font-size-h5 font-weight-bold mr-3">{account.user.firstName + " "  + account.user.lastName}</div>
                        <div>
                          <i className="flaticon2-correct text-primary font-size-h5"></i>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between mt-1">
                      <div className="d-flex flex-column flex-grow-1 pr-8">
                        <div className="d-flex flex-wrap mb-4">
                          <div className=" text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                            <i className="flaticon2-new-email mr-2 font-size-lg"></i>
                            {account.user.email}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  )
                }
              </div>
              <div className="separator separator-solid mb-2"></div>
              <Row>
                <Col lg="6">
                  <DisplayItem
                    icon={AssignmentIndIcon}
                    primary={intl.formatMessage({
                      id: "USER.INPUT.FIRST_NAME_FR",
                    })}
                    secondary={account.user.firstName}
                  />
                </Col>
                <Col lg="6">
                  <DisplayItem
                    icon={AssignmentIndIcon}
                    primary={intl.formatMessage({
                      id: "USER.INPUT.LAST_NAME_FR",
                    })}
                    secondary={account.user.lastName}
                  />
                </Col>
              </Row>
              <Row>
                <Col lg="6">

                  <DisplayItem
                    icon={PhoneIphoneIcon}
                    primary={intl.formatMessage({
                      id: "USER.INPUT.MOBILE",
                    })}
                    secondary={account.phone}
                  />
                </Col>
                <Col lg="6">

                  <DisplayItem
                    icon={AssignmentIndIcon}
                    primary={intl.formatMessage({
                      id: "USER.INPUT.ADDRESS",
                    })}
                    secondary={account.address}
                  />
                </Col>
              </Row>
            </>
          </CardBody>
        </Card>
      )}
      { (!isFetching && !account) && <ItemNotFound />}
    </>
  )
}


export default injectIntl(AccountInformation)
