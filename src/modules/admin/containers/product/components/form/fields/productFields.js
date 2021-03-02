import * as Yup from "yup"
import { INPUT, SELECT, TEXTAREA, UPLOAD } from "../../../../../../../components/partials"
import {categoryUIHelper} from "../../../../../UIHelpers"


export const productFields = ({ intl }) => [
  {
    name: "productImage",
    component: UPLOAD,
    label: intl.formatMessage({ id: "PRODUCT.INPUT.PRODUCT_IMAGE" }),
    placeholder: intl.formatMessage({ id: "PRODUCT.INPUT.PRODUCT_IMAGE" }),
    size: 12,
    required: true,
  },
  {
    name: "category",
    component: SELECT,
    loadOptions: categoryUIHelper,
    label: intl.formatMessage({ id: "PRODUCT.INPUT.CATEGORY" }),
    placeholder: intl.formatMessage({ id: "PRODUCT.INPUT.CATEGORY" }),
    size: 6,
    validation: Yup.number().required(),
    required: true,
  },
  {
    name: "productName",
    component: INPUT,
    label: intl.formatMessage({ id: "PRODUCT.INPUT.PRODUCT_NAME" }),
    placeholder: intl.formatMessage({ id: "PRODUCT.INPUT.PRODUCT_NAME" }),
    size: 6,
    validation: Yup.string().required(),
    required: true,
  },
  {
    name: "description",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "PRODUCT.INPUT.DESCRIPTION" }),
    placeholder: intl.formatMessage({ id: "PRODUCT.INPUT.DESCRIPTION" }),
    size: 12,
    validation: Yup.string().required(),
    required: true,
  },
  {
    name: "price",
    component: INPUT,
    label: intl.formatMessage({ id: "PRODUCT.INPUT.PRICE" }),
    placeholder: intl.formatMessage({ id: "PRODUCT.INPUT.PRICE" }),
    size: 6,
    validation: Yup.number().moreThan(0).required(),
    required: true,
  },
  {
    name: "stock",
    component: INPUT,
    label: intl.formatMessage({ id: "PRODUCT.INPUT.STOCK" }),
    placeholder: intl.formatMessage({ id: "PRODUCT.INPUT.STOCK" }),
    size: 6,
    validation: Yup.number().moreThan(0).required(),
    required: true,
  },
]
