import * as Yup from "yup"
import {
  permissionUIHelper,
  groupUIHelper
} from "./../../../../../UIHelpers"

import {
  INPUT,
  SELECT,
  INPUT_MASK,
  CHECKBOX_GROUP,
  TEXTAREA
} from "./../../../../../../../components/partials"

// Validation schema

export const userFields = ({ intl }) => [
  {
    name: "user.firstName",
    component: INPUT,
    label: intl.formatMessage({ id: "USER.INPUT.FIRST_NAME" }),
    placeholder: intl.formatMessage({ id: "USER.INPUT.FIRST_NAME" }),
    size: 6,
    validation: Yup.string().min(2).max(200).required(),
    required: true
  },
  {
    name: "user.lastName",
    component: INPUT,
    label: intl.formatMessage({ id: "USER.INPUT.LAST_NAME" }),
    placeholder: intl.formatMessage({ id: "USER.INPUT.LAST_NAME" }),
    validation: Yup.string().min(2).max(200).required(),
    required: true,

    size: 6
  },
  /* {
    name: "user.username",
    component: INPUT,
    label: intl.formatMessage({ id: "USER.INPUT.USERNAME" }),
    placeholder: intl.formatMessage({ id: "USER.INPUT.USERNAME" }),
    size: 6,
    validation: Yup.string().min(2).max(200).required(),
  }, */
  {
    name: "user.email",
    component: INPUT,
    label: intl.formatMessage({ id: "USER.INPUT.EMAIL" }),
    placeholder: intl.formatMessage({ id: "USER.INPUT.EMAIL" }),
    size: 6,
    validation: Yup.string().email().required(),
    required: true
  },
  {
    name: "phone",
    component: INPUT_MASK,
    mask: "99999999",
    label: intl.formatMessage({ id: "USER.INPUT.MOBILE" }),
    placeholder: intl.formatMessage({ id: "USER.INPUT.MOBILE" }),
    validation: Yup.number().phone(),
    size: 6,
    maxLength: 8
  },
  {
    name: "address",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "USER.INPUT.ADDRESS" }),
    placeholder: intl.formatMessage({ id: "USER.INPUT.ADDRESS" }),
    validation: Yup.string(),
    size: 6,
  },
  {
    name: "user.groups",
    component: SELECT,
    multiple: true,
    loadOptions: groupUIHelper,
    saveOptions: {
      ref: "groups-save",
      attr: "permissions"
    },
    label: intl.formatMessage({ id: "USER.INPUT.GROUP" }),
    placeholder: intl.formatMessage({ id: "USER.INPUT.GROUP" }),
    validation: Yup.string().array().required(),
    required: true
  },
  {
    name: "user.userPermissions",
    label: intl.formatMessage({ id: "USER.INPUT.PERMISSIONS" }),
    placeholder: intl.formatMessage({ id: "USER.INPUT.PERMISSIONS" }),
    component: CHECKBOX_GROUP,
    disabledOptionsRef: "groups-save",
    translateLabels: true,
    loadOptions: permissionUIHelper,
    size: 12,
    validation: Yup.mixed().array()
  }
]
