import React from "react"
import { get } from "lodash"
import { FormattedMessage } from "react-intl"

import DisplayItem from "../DisplayItem"
import {Col} from "react-bootstrap"


const Item = ({ field, object }) => {

  const { name, label, html=false, icon=undefined, size = 12 } = field
  return (
    <>
        <Col lg={size}>
          <DisplayItem
            primary={ label }
            html={html}
            icon={icon}
            secondary={ get(name, object, <FormattedMessage id="GENERAL.NO_DATA" />) }
          />
        </Col>
      </>
  )
}


export default Item
