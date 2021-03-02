import React, {useState} from "react"
import Link from "./Link"
import {ProtectedContents} from "../../../../wrappers"

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp"
import {checkIsActive} from "../../../../../helpers"


const NestedLinks = ({ items=[], label, icon }) => {

  const Icon = icon

  const [ show, setShow ] = useState(items.some((item) => checkIsActive(window.location, item.route)))

  return ( items.every((item) => item.hideOn && item.condition) ? <></> :
    <div className="navi navi-bold navi-hover navi-active navi-link-rounded">
      <ProtectedContents rules={ items.map((item) => item.rule) }>
        <div className="navi-item mb-2">
          <div onClick={ () => setShow(!show)} className="navi-link py-4">
            <span className="navi-icon mr-2">
              <span className="svg-icon">
                <Icon />
              </span>
            </span>
            <span className="navi-text font-size-lg">{ label }</span>
            <span>{!show ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}</span>
          </div>
        </div>
      </ProtectedContents>
      { show && items.map((item) => <Link { ...item } spacing="px-5" /> )}
    </div>
  )
}


export default NestedLinks
