import _ from "lodash"
import * as Yup from "yup"
import { INPUT } from "./../../../../../../../components/partials"


// Validation schema
const changePasswordFields = ({ intl }) => ([
    {
      name: "newPassword",
      component: INPUT,
      type: "password",
      label: intl.formatMessage({ id: "USER.INPUT.NEW_PASSWORD" }),
      placeholder: intl.formatMessage({ id: "USER.INPUT.NEW_PASSWORD" }),
      size: 12,
      validation: Yup.string().min(3).max(50).required()
    },
    {
      name: "confirmPassword",
      component: INPUT,
      type: "password",
      label: intl.formatMessage({ id: "USER.INPUT.CONFIRM_PASSWORD" }),
      placeholder: intl.formatMessage({ id: "USER.INPUT.CONFIRM_PASSWORD" }),
      size: 12,
      validation: Yup.string().required().equalTo(Yup.ref("newPassword")).required()
    },
    {
      name: "currentPassword",
      inputGroupClassName: "pt-5",
      component: INPUT,
      type: "password",
      label: intl.formatMessage({ id: "USER.INPUT.CURRENT_PASSWORD" }),
      placeholder: intl.formatMessage({ id: "USER.INPUT.CURRENT_PASSWORD" }),
      size: 12,
      validation: Yup.string().min(3).max(50).required()
    }
  ])


export default _.memoize(changePasswordFields)
