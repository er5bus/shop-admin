import * as Yup from "yup"
import { SELECT } from "../../../../../../../components/partials"
import { statusUIHelper } from "../../../../../UIHelpers"


export const orderStatusFields = ({ intl }) => [
  {
    name: "status",
    component: SELECT,
    options: statusUIHelper(intl),
    label: intl.formatMessage({ id: "ORDER.INPUT.STATUS" }),
    placeholder: intl.formatMessage({ id: "ORDER.INPUT.STATUS" }),
    size: 12,
    validation: Yup.number().required(),
    required: true,
  }
]
