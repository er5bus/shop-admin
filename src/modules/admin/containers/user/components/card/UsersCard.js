import React from "react"
import { FormattedMessage } from "react-intl"
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderTitle,
  CardHeaderToolbar,
  FlashMessages
} from "../../../../../../components/partials"
import UsersTable from "./../table/UsersTable"
import UsersGrouping from "./../grouping/UsersGrouping"
import { useUsersUIContext } from "./../../context/UsersUIContext"
import { useSelector, shallowEqual } from "react-redux"
import { clearStore } from "./../../store/actions"
import {ProtectedLink} from "../../../../../../components/wrappers"

const UsersCard = () => {
  const usersUIProps = useUsersUIContext()
  
  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.user.success,
      error: state.admin.user.error
    }),
    shallowEqual
  )

  return (
    <>
      <FlashMessages
        error={error}
        onClose={clearStore}
        successMsg={[
          { condition: success.isDeleted, label: <FormattedMessage id="USER.MSG.DELETE" /> },
          { condition: success.isUndeleted, label: <FormattedMessage id="USER.MSG.UN_DELETE" /> },
          { condition: success.isActivated, label: <FormattedMessage id="USER.MSG.ENABLE" /> },
          { condition: success.isDeactivated, label: <FormattedMessage id="USER.MSG.DISABLE" /> }
        ]}
      />
      <Card>
        <CardHeader>
          <div className="card-title">
            <CardHeaderTitle>
              <FormattedMessage id="USER.LIST.TITLE" />
            </CardHeaderTitle>
          </div>
          <CardHeaderToolbar>
            <ProtectedLink rule={usersUIProps.newUserRule}>
            <button
              type="button"
              className="btn btn-sm btn-primary"
              onClick={usersUIProps.newUserButtonClick}
            >
              <FormattedMessage id="USER.NEW.TITLE" />
            </button>
            </ProtectedLink>
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          {usersUIProps.ids.length > 0 && <UsersGrouping />}
          <UsersTable />
        </CardBody>
      </Card>
    </>
  )
}


export default UsersCard
