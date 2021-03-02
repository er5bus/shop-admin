import React, {useMemo} from "react"
import objectPath from "object-path"
// Import Layout components
import {useHtmlClassService, HeaderMobile, Footer, LayoutInit, SubHeader, ScrollTop} from "./../../../../components/layout"

import QuickPanel from "./extras/offcanvas/QuickPanel"
import Aside from "./aside/Aside"
import Header from "./header/Header"


const BaseLayout = ({ children, routesMenu, homeURL }) => {
  const uiService = useHtmlClassService()
  // Layout settings (cssClasses/cssAttributes)
  const layoutProps = useMemo(() => {
    return {
      layoutConfig: uiService.config,
      selfLayout: objectPath.get(uiService.config, "self.layout"),
      asideDisplay: objectPath.get(uiService.config, "aside.self.display"),
      subheaderDisplay: objectPath.get(uiService.config, "subheader.display"),
      desktopHeaderDisplay: objectPath.get(
        uiService.config,
        "header.self.fixed.desktop"
      ),
      contentCssClasses: uiService.getClasses("content", true),
      contentContainerClasses: uiService.getClasses("content_container", true),
      contentExtended: objectPath.get(uiService.config, "content.extended")
    }
  }, [uiService])

  return (<>
      {/*begin::Main*/}
      <HeaderMobile/>
      <div className="d-flex flex-column flex-root">
        {/*begin::Page*/}
        <div className="d-flex flex-row flex-column-fluid page">
          {layoutProps.asideDisplay && (<Aside routesMenu={routesMenu} />)}
          {/*begin::Wrapper*/}
          <div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
            <Header/>
            {/*begin::Content*/}
            <div
              id="kt_content"
              className={`content ${layoutProps.contentCssClasses} d-flex flex-column flex-column-fluid`}
            >
              {layoutProps.subheaderDisplay && <SubHeader homeURL={homeURL}/>}
              {/*begin::Entry*/}
              {!layoutProps.contentExtended && (
                <div className="d-flex flex-column-fluid pt-4">
                  {/*begin::Container*/}
                  <div className={layoutProps.contentContainerClasses}>
                    {children}
                  </div>
                  {/*end::Container*/}
                </div>
              )}

              {layoutProps.contentExtended && {children}}
              {/*end::Entry*/}
            </div>
            {/*end::Content*/}
            <Footer/>
          </div>
          {/*end::Wrapper*/}
        </div>
        {/*end::Page*/}
      </div>
      <QuickPanel/>
      <ScrollTop/>
      {/*end::Main*/}
      <LayoutInit />
    </>
  )
}


export default BaseLayout
