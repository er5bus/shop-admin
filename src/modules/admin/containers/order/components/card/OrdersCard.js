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

import OrdersTable from "./../table/OrdersTable"
import OrderGrouping from "./../grouping/OrderGrouping"
import { useOrdersUIContext } from "./../../context/OrdersUIContext"
import {Button} from "react-bootstrap"
import {ProtectedLink} from "../../../../../../components/wrappers"
import {shallowEqual, useSelector} from "react-redux"
import {clearStore} from "../../store/actions"


const OrderCard = () => {

  const ordersUIProps = useOrdersUIContext()
  
  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.order.success,
      error: state.admin.order.error
    }),
    shallowEqual
  )

  return (
    <>
      <FlashMessages
        error={error}
        onClose={clearStore}
        successMsg={[
          { condition: success.isActivated, label: <FormattedMessage id="ORDER.MSG.ACTIVATED" /> },
          { condition: success.isDeactivated, label: <FormattedMessage id="ORDER.MSG.DEACTIVATED" /> }
        ]}
      />
      <Card>
        <CardHeader>
          <div className="card-title">
            <CardHeaderTitle>
              <FormattedMessage id="ORDER.LIST.TITLE" />
            </CardHeaderTitle>
          </div>
          <CardHeaderToolbar>
            <ProtectedLink rule={ordersUIProps.newOrderRule}>
              <Button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={ordersUIProps.newOrderButtonClick}
              >
                <FormattedMessage id="ORDER.NEW.TITLE" />
              </Button>
            </ProtectedLink>
            {/*<ProtectedLink rule={ordersUIProps.newOrderRule}>
              <Button
                type="button"
                className="btn btn-sm btn-info mx-2"
                onClick={ordersUIProps.openOrderImportDialog}
              >
                <FormattedMessage id="ORDER.NEW.IMPORT" />
              </Button>
            </ProtectedLink>*/}
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          {ordersUIProps.ids.length > 0 && <OrderGrouping />}
          <OrdersTable />
        </CardBody>
      </Card>
    </>
  )
}


export default OrderCard
