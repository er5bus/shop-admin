import { lazy } from "react"


const AccountInformation = lazy(() => import("./../../containers/profile/AccountInformation"))
const UpdateAccount = lazy(() => import("./../../containers/profile/UpdateProfile"))


export const profile = {
  path: "/profile",
  component: AccountInformation,
}


export const updateProfile = {
  path: "/update-profile",
  component: UpdateAccount,
}
