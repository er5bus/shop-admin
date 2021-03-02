import routes from "./../../../routes"

import { combinePathRoutes } from "./../../../../../helpers"

import ChangePassword from "./../components/card/ChangePassword"
import AccountInformation from "./../components/card/AccountInformation"
import PersonalInformation from "./../components/card/PersonalInformation"


const changePassword = {
  path: "/change-password",
  component: ChangePassword
}


const accountInformation = {
  path: "/account-information",
  component: AccountInformation
}

const personalInformation = {
  path: "/personal-information",
  component: PersonalInformation
}

export default combinePathRoutes({ path: routes.updateProfile.path }, { changePassword, accountInformation, personalInformation })
