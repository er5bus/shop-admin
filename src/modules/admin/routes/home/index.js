import { lazy } from "react"

const Home = lazy(() => import("./../../containers/home/Home"))


export const home = {
  path: "/home",
  component: Home
}
