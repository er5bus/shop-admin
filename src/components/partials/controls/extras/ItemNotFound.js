import React from "react"
import { FormattedMessage } from "react-intl"

import {toAbsoluteUrl} from "../../../../helpers"


const ItemNotFound = ({ message }) => {

  return <div className="text-center">
    <img width="502" height="300" alt="not found" src={toAbsoluteUrl("/media/img/not-found.svg") } />
    <div className="text-dark font-weight-bold">{ message || <FormattedMessage id="ERROR.NOT_FOUND.DESC" /> }</div>
  </div>
}


export default ItemNotFound
