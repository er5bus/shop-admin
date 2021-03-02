import * as Yup from "yup"
import { INPUT, TEXTAREA } from "../../../../../../../components/partials"


export const categoryFields = ({ intl }) => [
  {
    name: "categoryName",
    component: INPUT,
    label: intl.formatMessage({ id: "CATEGORY.INPUT.CATEGORY_NAME" }),
    placeholder: intl.formatMessage({ id: "CATEGORY.INPUT.CATEGORY_NAME" }),
    size: 12,
    validation: Yup.string().required(),
    required: true,
  },
  {
    name: "description",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "CATEGORY.INPUT.DESCRIPTION" }),
    placeholder: intl.formatMessage({ id: "CATEGORY.INPUT.DESCRIPTION" }),
    size: 12,
    validation: Yup.string().required(),
    required: true,
  },
]
