import React from "react"
import { NavLink } from "react-router-dom"
import { ProtectedContent } from "../../../../wrappers"

const Link = ({ rule, route, spacing="", hideOn=false, condition=false, label, icon }) => {
  const Icon = icon

  return ( (hideOn && condition) ? <></> :
    <ProtectedContent rule={rule}>
      <div className="navi-item mb-2">
        <NavLink to={route} className="navi-link py-4">
          <span className={spacing}>
            <span className="navi-icon mr-2">
              <span className="svg-icon">
                <Icon />
              </span>
            </span>
            <span className="navi-text font-size-lg">{label}</span>
          </span>
        </NavLink>
      </div>
    </ProtectedContent>
  )
}

export default Link
