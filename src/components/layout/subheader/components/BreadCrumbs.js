/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import {Link} from "react-router-dom"

const BreadCrumbs = ({items, homeURL}) => {
  return (
    <ul className="breadcrumb breadcrumb-transparent breadcrumb font-weight-bold p-0 my-2">
      <li className="breadcrumb-item">
        <Link to={homeURL}>
          <i className="flaticon-home-2 text-muted icon-lg" />
        </Link>
      </li>
      {items.map((item, index) => (
        <li key={`bc${index}`} className="breadcrumb-item">
          <Link className="text-muted" to={{ pathname: item.pathname }}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}


export default BreadCrumbs
