import _ from "lodash"
import * as Yup from "yup"
import { INPUT } from "./../../../../../../../components/partials"


// Validation schema
const accountInformationFields = ({ intl }) => ([
    {
      name: "user.email",
      component: INPUT,
      label: intl.formatMessage({ id: "USER.INPUT.EMAIL" }),
      placeholder: intl.formatMessage({ id: "USER.INPUT.EMAIL" }),
      size: 12,
      validation: Yup.string().email().min(3).max(50).required()
    },
    /* {
      name: "user.username",
      component: INPUT,
      label: intl.formatMessage({ id: "USER.INPUT.USERNAME" }),
      placeholder: intl.formatMessage({ id: "USER.INPUT.USERNAME" }),
      size: 12,
      validation: Yup.string().min(3).max(50).required()
    }, */
    {
      name: "currentPassword",
      inputGroupClassName: "pt-5",
      component: INPUT,
      type: "password",
      label: intl.formatMessage({ id: "USER.INPUT.CURRENT_PASSWORD" }),
      placeholder: intl.formatMessage({ id: "USER.INPUT.CURRENT_PASSWORD" }),
      size: 12,
      validation: Yup.string().required()
    }
  ])


export default _.memoize(accountInformationFields)
