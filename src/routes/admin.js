import { lazy } from "react"

const MainLayout = lazy(() =>  import("./../modules/admin/layout/Layout"))

export const admin = {
  path: "/shop",
  component: MainLayout
}
