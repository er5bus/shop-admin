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

import CategorysTable from "./../table/CategorysTable"
import CategoryGrouping from "./../grouping/CategoryGrouping"
import { useCategorysUIContext } from "./../../context/CategorysUIContext"
import {Button} from "react-bootstrap"
import {ProtectedLink} from "../../../../../../components/wrappers"
import {shallowEqual, useSelector} from "react-redux"
import {clearStore} from "../../store/actions"


const CategoryCard = () => {

  const categorysUIProps = useCategorysUIContext()
  
  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.category.success,
      error: state.admin.category.error
    }),
    shallowEqual
  )

  return (
    <>
      <FlashMessages
        error={error}
        onClose={clearStore}
        successMsg={[
          { condition: success.isActivated, label: <FormattedMessage id="CATEGORY.MSG.ACTIVATED" /> },
          { condition: success.isDeactivated, label: <FormattedMessage id="CATEGORY.MSG.DEACTIVATED" /> }
        ]}
      />
      <Card>
        <CardHeader>
          <div className="card-title">
            <CardHeaderTitle>
              <FormattedMessage id="CATEGORY.LIST.TITLE" />
            </CardHeaderTitle>
          </div>
          <CardHeaderToolbar>
            <ProtectedLink rule={categorysUIProps.newCategoryRule}>
              <Button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={categorysUIProps.newCategoryButtonClick}
              >
                <FormattedMessage id="CATEGORY.NEW.TITLE" />
              </Button>
            </ProtectedLink>
            {/*<ProtectedLink rule={categorysUIProps.newCategoryRule}>
              <Button
                type="button"
                className="btn btn-sm btn-info mx-2"
                onClick={categorysUIProps.openCategoryImportDialog}
              >
                <FormattedMessage id="CATEGORY.NEW.IMPORT" />
              </Button>
            </ProtectedLink>*/}
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          {categorysUIProps.ids.length > 0 && <CategoryGrouping />}
          <CategorysTable />
        </CardBody>
      </Card>
    </>
  )
}


export default CategoryCard
