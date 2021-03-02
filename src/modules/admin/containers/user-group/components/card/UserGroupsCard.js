import React from "react"
import { FormattedMessage } from "react-intl"
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderTitle,
  CardHeaderToolbar,
  FlashMessages,
} from "../../../../../../components/partials/controls"

import UserGroupsTable from "./../table/UserGroupsTable"
import UserGrouping from "./../grouping/UserGrouping"
import { useUserGroupsUIContext } from "./../../context/UserGroupsUIContext"
import {Button} from "react-bootstrap"
import {ProtectedLink} from "../../../../../../components/wrappers"
import {clearStore} from "../../store/actions"
import {shallowEqual, useSelector} from "react-redux"


const UserGroupCard = () => {

  const userGroupsUIProps = useUserGroupsUIContext()

  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.userGroup.success,
      error: state.admin.userGroup.error
    }),
    shallowEqual
  )

  return (
    <>
      <FlashMessages
        error={error}
        onClose={clearStore}
        successMsg={[
          { condition: success.isDeleted, label: <FormattedMessage id="USER_GROUP.MSG.DELETE" /> },
        ]}
      />
      <Card>
        <CardHeader>
          <div className="card-title">
            <CardHeaderTitle>
              <FormattedMessage id="USER_GROUP.LIST.TITLE" />
            </CardHeaderTitle>
          </div>
          <CardHeaderToolbar>
            <ProtectedLink rule={userGroupsUIProps.newUserGroupRule}>
              <Button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={userGroupsUIProps.newUserGroupButtonClick}
              >
                <FormattedMessage id="USER_GROUP.NEW.TITLE" />
              </Button>
            </ProtectedLink>
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          {userGroupsUIProps.ids.length > 0 && <UserGrouping />}
          <UserGroupsTable />
        </CardBody>
      </Card>
    </>
  )
}


export default UserGroupCard
