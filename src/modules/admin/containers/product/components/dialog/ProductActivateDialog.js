/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react"
import { Modal } from "react-bootstrap"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ModalProgressBar } from "../../../../../../components/partials/controls"
import { activateProduct, fetchProducts } from "../../store/actions"
import { useProductsUIContext } from "../../context/ProductsUIContext"

const ProductActivateDialog = ({ params, show, onHide }) => {
  // Products UI Context
  const productsUIContext = useProductsUIContext()
  const productsUIProps = useMemo(() => {
    return {
      setIds: productsUIContext.setIds,
      queryParams: productsUIContext.queryParams,
    }
  }, [productsUIContext])

  // Products Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.product.isLoading, success: state.admin.product.success }),
    shallowEqual
  )

  // if !id we should close modal
  useEffect(() => {
    if (success.isActivated && show) {
      onHide()
      dispatch(fetchProducts(productsUIProps.queryParams))
      productsUIProps.setIds([])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success, show, productsUIProps])

  const onActivateProduct = () => {
    // server request for deleting product by id
    dispatch(activateProduct(params))
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          <FormattedMessage id="PRODUCT.DELETE.TITLE" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormattedMessage id="PRODUCT.DELETE.MSG" />
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={onHide}
            className="btn btn-sm btn-light btn-elevate"
          >
            <FormattedMessage id="GENERAL.CANCEL" />
          </button>
          <> </>
          <button
            type="button"
            disabled={isLoading}
            onClick={onActivateProduct}
            className="btn btn-sm btn-danger btn-elevate"
          >
            {isLoading && <span className="px-5 spinner spinner-white"></span>}
            <FormattedMessage id="GENERAL.ACTIVATE" />
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}


export default ProductActivateDialog