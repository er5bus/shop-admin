// import addressUIHelper from "./../../../../../../common/UIHelpers/addressUIHelper";
import { isEmpty, isArray } from "lodash"
import {NESTED_LIST_OF_ITEMS} from '../../../../../../../components/partials'
import {
  permissionUIHelper
} from './../../../../../UIHelpers'

export const userFields = ({ intl }) => [
  {
    name: 'user.firstName',
    label: intl.formatMessage({ id: 'USER.INPUT.FIRST_NAME_FR' }),
    size: 6
  },
  {
    name: 'user.lastName',
    label: intl.formatMessage({ id: 'USER.INPUT.LAST_NAME_FR' }),
    size: 6
  },
    /* {
    name: "user.username",
    label: intl.formatMessage({ id: "USER.INPUT.USERNAME" }),
    size: 6,
  }, */
  {
    name: 'user.email',
    label: intl.formatMessage({ id: 'USER.INPUT.EMAIL' }),
    size: 6,
  },
  {
    name: 'phone',
    label: intl.formatMessage({ id: 'USER.INPUT.MOBILE' }),
    size: 6,
  },
  {
    name: 'address',
    label: intl.formatMessage({ id: 'USER.INPUT.ADDRESS' }),
    size: 6
  },
  {
    name: 'user.displayGroups[].name',
    label: intl.formatMessage({ id: 'USER.INPUT.GROUP' }),
  },
  {
    name: 'user.userPermissions',
    component: NESTED_LIST_OF_ITEMS,
    columns: ([
      { text: intl.formatMessage({ id: "GENERAL.MODULE" }) },
      { text: intl.formatMessage({ id: "GENERAL.PERMISSIONS" }) }
    ]),
    label: intl.formatMessage({ id: 'USER.INPUT.PERMISSIONS' }),
    formatter: (value) => {
      let fieldValue = {}
      permissionUIHelper( (permissions) => {
        if (!isEmpty(permissions) && isArray(permissions)) {
          fieldValue = permissions.reduce((acc, permission) => {
            acc[intl.formatMessage({ id: permission.label })] = permission.options.map((perm) => intl.formatMessage({ id: perm.label }))
            return acc
          }, {})
        }}, value)
      return fieldValue
    },
    size: 12,
  }
]
