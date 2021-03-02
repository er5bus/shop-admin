import _ from "lodash"
import * as Yup from "yup"
import { INPUT, CHECKBOX_GROUP } from "./../../../../../../../components/partials"
import { permissionUIHelper } from "./../../../../../UIHelpers"


const userGroupFields = ({ intl }) => [
  {
    name: "name",
    label: intl.formatMessage({ id: "USER_GROUP.INPUT.NAME" })  ,
    placeholder: intl.formatMessage({ id: "USER_GROUP.INPUT.NAME" }),
    component: INPUT,
    size: 12,
    required: true,

    validation: Yup.string().required(),
  },
  {
    name: "permissions",
    label: intl.formatMessage({ id: "USER_GROUP.INPUT.PERMISSIONS" }),
    placeholder: intl.formatMessage({ id: "USER_GROUP.INPUT.PERMISSIONS" }),
    component: CHECKBOX_GROUP,
    translateLabels: true,
    loadOptions: permissionUIHelper,
    size: 12,
    validation: Yup.mixed().array().required(),
  },
]


export default _.memoize(userGroupFields)
