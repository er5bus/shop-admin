import React from "react"
import { FormattedMessage } from "react-intl"

import ChangePasswordForm from "./../form/ChangePasswordForm"
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../../components/partials/controls"
import {Button} from "react-bootstrap"
import {changeAccountPassword} from "../../store/actions"
import {useDispatch, useSelector, shallowEqual} from "react-redux"
import { useHistory } from "react-router-dom"

import routes from "./../../../../../../routes"


const ChangePassword = () => {

  const dispatch = useDispatch()
  const saveRef = React.useRef()
  const onSubmit = (values) => {
    dispatch(changeAccountPassword(values))
  }

  const { isLoading } = useSelector(
    (state) => ({
      isLoading: state.admin.profile.isLoading
    }),
    shallowEqual
  )

  const onClick = () => {
    if (saveRef && saveRef.current){
      saveRef.current.click()
    }
  }
  const history = useHistory()

  const handleCancel = () => {
    history.push(routes.admin.path)
  }

  return (
    <>
      <Card className="card-stretch">
        <CardHeader>
          <div className="card-title">
            <div className="card-label ">
              <h3 className="card-label font-weight-bold text-dark"><FormattedMessage id="USER.CHANGE_PASSWORD.TITLE" /></h3>
              <span className="text-muted font-weight-bold font-size-sm mt-1"><FormattedMessage id="USER.CHANGE_PASSWORD.DESC" /></span>
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
          <ChangePasswordForm onSubmit={onSubmit} saveRef={saveRef} />
        </CardBody>
      </Card>
    </>
  )
}

export default ChangePassword
