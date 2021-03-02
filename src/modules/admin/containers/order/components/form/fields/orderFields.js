import * as Yup from "yup"
import { INPUT, SELECT, TEXTAREA } from "../../../../../../../components/partials"
import {productUIHelper, statusUIHelper, userUIHelper} from "../../../../../UIHelpers"


export const orderItemFields = ({ intl }) => [
  {
    name: "items[].product",
    component: SELECT,
    loadOptions: productUIHelper,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.PRODUCT" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.PRODUCT" }),
    size: 6,
    validation: Yup.number().required()
  },
  {
    name: "items[].quantity",
    component: INPUT,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.QUANTITY" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.QUANTITY" }),
    size: 6,
    validation: Yup.string().max(8)
  }
]


export const orderFields = ({ intl }) => [
  {
    name: "firstName",
    component: INPUT,
    label: intl.formatMessage({ id: "ORDER.INPUT.FIRST_NAME" }),
    placeholder: intl.formatMessage({ id: "ORDER.INPUT.FIRST_NAME" }),
    size: 4,
    validation: Yup.string().max(50).required(),
    required: true,
  },
  {
    name: "lastName",
    component: INPUT,
    label: intl.formatMessage({ id: "ORDER.INPUT.LAST_NAME" }),
    placeholder: intl.formatMessage({ id: "ORDER.INPUT.LAST_NAME" }),
    size: 4,
    validation: Yup.string().max(50).required(),
    required: true,
  },
  {
    name: "email",
    component: INPUT,
    label: intl.formatMessage({ id: "ORDER.INPUT.EMAIL" }),
    placeholder: intl.formatMessage({ id: "ORDER.INPUT.EMAIL" }),
    size: 4,
    validation: Yup.string().email().required(),
    required: true,
  },
  {
    name: "address",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "ORDER.INPUT.ADDRESS" }),
    placeholder: intl.formatMessage({ id: "ORDER.INPUT.ADDRESS" }),
    size: 12,
    validation: Yup.string().max(250).required(),
    required: true,
  },
  {
    name: "user",
    component: SELECT,
    loadOptions: userUIHelper,
    label: intl.formatMessage({ id: "ORDER.INPUT.USER" }),
    placeholder: intl.formatMessage({ id: "ORDER.INPUT.USER" }),
    size: 6,
    validation: Yup.number().required(),
    required: true,
  },
  {
    name: "status",
    component: SELECT,
    options: statusUIHelper(intl),
    label: intl.formatMessage({ id: "ORDER.INPUT.STATUS" }),
    placeholder: intl.formatMessage({ id: "ORDER.INPUT.STATUS" }),
    size: 6,
    validation: Yup.number().required(),
    required: true,
  },

]
