import { lazy } from "react"

const Dashboard = lazy(() =>  import("./../../containers/dashboard/Dashboard"))


export const dashboard = {
  path: "/dashbord",
  component: Dashboard,
  role: []
}
