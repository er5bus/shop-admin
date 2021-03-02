import React from "react"
import {toAbsoluteUrl} from "./../../helpers"

import { FormattedMessage } from "react-intl"

import "./../../assets/scss/pages/error/error.scss"

const PageNotFound = () => {

  return (
    <div className="error px-10 py-10 d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex justify-content-center">
        <img alt="404" className="img-responsive" width="600" height="405" src={toAbsoluteUrl("/media/error/404.svg")} />
      </div>
      <div  className="text-center error-text py-15 py-md-5">
        <p className="display-4 font-weight-boldest text-primary mb-12">
          <FormattedMessage id="ERROR.NOT_FOUND.TITLE" />
        </p>
        <p className="font-size-h1 font-weight-boldest text-dark-75">
          <FormattedMessage id="ERROR.NOT_FOUND.SUB_TITLE" />
        </p>
        <p className="font-size-h4 line-height-md">
          <FormattedMessage id="ERROR.NOT_FOUND.DESC" />
        </p>
      </div>
    </div>
  )

}


export default PageNotFound
