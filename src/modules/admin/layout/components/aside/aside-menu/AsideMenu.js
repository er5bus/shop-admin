import React, {useMemo} from "react"
import {useHtmlClassService} from "./../../../../../../components/layout/core/MetronicLayout"
import AsideMenuList from "./AsideMenuList"

const AsideMenu = ({ routesMenu }) => {
  const uiService = useHtmlClassService()
  const layoutProps = useMemo(() => {
    return {
      layoutConfig: uiService.config,
      asideMenuAttr: uiService.getAttributes("aside_menu"),
      ulClasses: uiService.getClasses("aside_menu_nav", true),
      asideClassesFromConfig: uiService.getClasses("aside_menu", true)
    }
  }, [uiService])

  return (
    <>
      {/* begin::Menu Container */}
      <div
        id="kt_aside_menu"
        data-menu-vertical="1"
        className={`aside-menu my-4 ${layoutProps.asideClassesFromConfig}`}
        {...layoutProps.asideMenuAttr}
      >
        <AsideMenuList layoutProps={layoutProps} routesMenu={routesMenu} />
      </div>
      {/* end::Menu Container */}
    </>
  )
}


export default AsideMenu
