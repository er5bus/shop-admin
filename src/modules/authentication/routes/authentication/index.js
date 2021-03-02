import { lazy } from "react"
const Login = lazy(() => import("./../../containers/Login"))
const ResetPassword = lazy(() => import("../../containers/ResetPassword"))
const Logout = lazy(() => import("./../../containers/Logout"))
const ForgotPassword = lazy(() => import("./../../containers/ForgotPassword"))


export const login = {
  path: "/login",
  component: Login
}

export const registration = {
  path: "/reset-password/:param",
  component: ResetPassword
}

export const logout = {
  path: "/logout",
  component: Logout
}

export const forgotPassword = {
  path: "/forgot-password",
  component: ForgotPassword
}
