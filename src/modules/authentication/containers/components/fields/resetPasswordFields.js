import _ from "lodash"
import { INPUT } from "./../../../../../components/partials"


const resetPasswordFields = ({ intl }) => ([
  {
    name: "password",
    component: INPUT,
    placeholder: intl.formatMessage({ id: "AUTH.INPUT.PASSWORD" }),
    inputClassName: "form-control form-control-solid h-auto py-5 px-6",
    inputGroupClassName: "form-group fv-plugins-icon-container",
    type: "password"
  },
  {
    name: "confirmPassword",
    component: INPUT,
    placeholder: intl.formatMessage({ id: "AUTH.INPUT.CONFIRM_PASSWORD" }),
    inputClassName: "form-control form-control-solid h-auto py-5 px-6",
    inputGroupClassName: "form-group fv-plugins-icon-container",
    type: "password"
  }
])


export default _.memoize(resetPasswordFields)
