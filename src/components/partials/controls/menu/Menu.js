import React from "react"

import {DEFAULT_MENU_COMPONENT, MENU_COMPONENTS} from "./link-types/linkTypes"


const Menu = ({ children, items }) => {

  const renderItem = ({ component, ...props }) => {
    const Component = MENU_COMPONENTS[component] || DEFAULT_MENU_COMPONENT
    return (
      <Component {...props} />
    )
  }

  return (
    <>
      {/*<!--begin::Aside-->*/}
      <div className="flex-row-auto offcanvas-mobile" id="kt_profile_aside">
        {/*<!--begin::Profile Card-->*/}
        <div className="card card-custom card-stretch">
          {/*<!--begin::Body-->*/}
          <div className="card-body">
            {/*<!--begin::Contact-->*/}
            { children }
            <div className="navi navi-bold navi-hover navi-active navi-link-rounded">
              { items.map((item) => renderItem(item))}
            </div>
          </div>
          {/*<!--end::Body-->*/}
        </div>
        {/*<!--end::Profile Card-->*/}
      </div>
      {/*<!--end::Aside-->*/}
    </>
  )
}


export default React.memo(Menu)
