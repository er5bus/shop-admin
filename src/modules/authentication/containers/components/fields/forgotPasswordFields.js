import _ from "lodash"
import { INPUT } from "./../../../../../components/partials"


const forgotPasswordFields = ({ intl }) => ([
  {
    name: "email",
    component: INPUT,
    placeholder: intl.formatMessage({ id: "AUTH.INPUT.EMAIL" }),
    inputClassName: "form-control form-control-solid h-auto py-5 px-6",
    inputGroupClassName: "form-group fv-plugins-icon-container",
    type: "text"      
  }
])


export default _.memoize(forgotPasswordFields)
