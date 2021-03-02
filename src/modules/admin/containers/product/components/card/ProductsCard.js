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

import ProductsTable from "./../table/ProductsTable"
import ProductGrouping from "./../grouping/ProductGrouping"
import { useProductsUIContext } from "./../../context/ProductsUIContext"
import {Button} from "react-bootstrap"
import {ProtectedLink} from "../../../../../../components/wrappers"
import {shallowEqual, useSelector} from "react-redux"
import {clearStore} from "../../store/actions"


const ProductCard = () => {

  const productsUIProps = useProductsUIContext()
  
  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.product.success,
      error: state.admin.product.error
    }),
    shallowEqual
  )

  return (
    <>
      <FlashMessages
        error={error}
        onClose={clearStore}
        successMsg={[
          { condition: success.isActivated, label: <FormattedMessage id="PRODUCT.MSG.ACTIVATED" /> },
          { condition: success.isDeactivated, label: <FormattedMessage id="PRODUCT.MSG.DEACTIVATED" /> }
        ]}
      />
      <Card>
        <CardHeader>
          <div className="card-title">
            <CardHeaderTitle>
              <FormattedMessage id="PRODUCT.LIST.TITLE" />
            </CardHeaderTitle>
          </div>
          <CardHeaderToolbar>
            <ProtectedLink rule={productsUIProps.newProductRule}>
              <Button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={productsUIProps.newProductButtonClick}
              >
                <FormattedMessage id="PRODUCT.NEW.TITLE" />
              </Button>
            </ProtectedLink>
            {/*<ProtectedLink rule={productsUIProps.newProductRule}>
              <Button
                type="button"
                className="btn btn-sm btn-info mx-2"
                onClick={productsUIProps.openProductImportDialog}
              >
                <FormattedMessage id="PRODUCT.NEW.IMPORT" />
              </Button>
            </ProtectedLink>*/}
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          {productsUIProps.ids.length > 0 && <ProductGrouping />}
          <ProductsTable />
        </CardBody>
      </Card>
    </>
  )
}


export default ProductCard
