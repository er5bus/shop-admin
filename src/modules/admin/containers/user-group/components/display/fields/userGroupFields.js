import _ from "lodash"
import {NESTED_LIST_OF_ITEMS} from "../../../../../../../components/partials"
import { permissionUIHelper } from "./../../../../../UIHelpers"
import DescriptionIcon from '@material-ui/icons/Description';


const userGroupFields = ({ intl }) => [
  {
    name: "name",
    label: intl.formatMessage({ id: "USER_GROUP.INPUT.NAME" }),
    icon: DescriptionIcon,
    size: 12,
  },
  {
    name: "permissions",
    component: NESTED_LIST_OF_ITEMS,
    icon: DescriptionIcon,
    columns: ([
      { text: intl.formatMessage({ id: "GENERAL.MODULE" }) }, 
      { text: intl.formatMessage({ id: "GENERAL.PERMISSIONS" }) }
    ]),
    formatter: (value) => {
      let fieldValue = {}
      permissionUIHelper( (permissions) => {
        if (!_.isEmpty(permissions) && _.isArray(permissions)) {
          fieldValue = permissions.reduce((acc, permission) => {
            acc[intl.formatMessage({ id: permission.label })] = permission.options.map((perm) => intl.formatMessage({ id: perm.label }))
            return acc
          }, {})
        }}, value)
      return fieldValue
    },
    label: intl.formatMessage({ id: "USER_GROUP.INPUT.PERMISSIONS" }),
    size: 12,
  },
]


export default _.memoize(userGroupFields)
