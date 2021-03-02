import React from "react"
import { FormattedMessage } from "react-intl"

import PersonalInformationForm from "./../form/PersonalInformationForm"
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
  ModalProgressBar,
} from "../../../../../../components/partials/controls"
import {Button} from "react-bootstrap"
import {updatePersonalInformation} from "../../store/actions"
import {useDispatch, useSelector, shallowEqual} from "react-redux"
import { useHistory } from "react-router-dom"

import routes from "./../../../../../../routes"

const PersonalInformation = () => {

  const dispatch = useDispatch()

  const saveRef = React.useRef()
  const onSubmit = (values) => {
    dispatch(updatePersonalInformation(values))
  }
  const onClick = () => {
    if (saveRef && saveRef.current){
      saveRef.current.click()
    }
  }

  const { account, isLoading } = useSelector(
    (state) => ({
      account: state.admin.profile.account,
      isLoading: state.admin.profile.isLoading
    }),
    shallowEqual
  )

  const history = useHistory()

  const handleCancel = () => {
    history.push(routes.admin.path)
  }

  return (
    <>
      <Card>
        { isLoading && <ModalProgressBar />}
        <CardHeader>
          <div className="card-title">
            <div className="card-label ">
              <h3 className="d-block font-weight-bold text-dark"><FormattedMessage id="USER.PERSONAL_INFORMATION.TITLE" /></h3>
              <span className="text-muted d-block  font-weight-bold font-size-sm mt-1"><FormattedMessage id="USER.PERSONAL_INFORMATION.DESC" /></span>
            </div>
          </div>
          <CardHeaderToolbar>
          <Button
              onClick={handleCancel}
              type="button"
              className="btn btn-sm btn-secondary mx-3 my-1"
            >
              <FormattedMessage id="GENERAL.CANCEL" />
            </Button>
            <Button
              onClick={onClick}
              type="button"
              className="btn btn-sm btn-primary"
            >
              {isLoading && <span className="px-5 spinner spinner-white"></span>}
              <FormattedMessage id="GENERAL.SAVE" />
            </Button>
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          <PersonalInformationForm onSubmit={onSubmit} initialValues={account} saveRef={saveRef}/>
        </CardBody>
      </Card>
    </>
  )
}

export default PersonalInformation
