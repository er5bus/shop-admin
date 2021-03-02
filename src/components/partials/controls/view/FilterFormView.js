/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useRef } from "react"
import { FormattedMessage } from "react-intl"
import { Card, CardFooter, CardBody, CardHeader, CardHeaderToolbar, ModalProgressBar } from "../../controls"

import VisibilityIcon from "@material-ui/icons/Visibility"
import ClearIcon from "@material-ui/icons/Clear"
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff"
import SearchIcon from "@material-ui/icons/Search"
import {Button} from "react-bootstrap"
import {FormUIProvider} from "../forms/context/FormUIContext"


const FilterFormView = ({ children, title, toolBar, isLoading }) => {

  const [show, setShow] = React.useState(false)
  const searchRef = useRef()
  const resetRef = useRef()

  const onSearch = () => {
    if (searchRef && searchRef.current){
      searchRef.current.click()
    }
  }

  const onReset = () => {
    if (resetRef && resetRef.current){
      resetRef.current.click()
    }
  }

  return (
    <FormUIProvider>
      <Card className="mb-5">
        {isLoading && <ModalProgressBar />}
        <CardHeader title={title}>
          <CardHeaderToolbar>
            <button
              type="button"
              className="btn btn-sm btn-icon mx-3 my-1 "
              onClick={() => { setShow(!show) }}
            >
              { show ? <VisibilityIcon /> : <VisibilityOffIcon /> }
            </button>
            { toolBar }
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody className={ !show ? "collapse" : "collapse show" }>
          { children({ searchRef, resetRef }) }
        </CardBody>
        <CardFooter className={ !show ? "collapse text-right" : "collapse show text-right" }>
          <Button
            type="button"
            className="btn btn-sm btn-primary btn-sm"
            onClick={onSearch}
          >
            <SearchIcon />
            <FormattedMessage id="GENERAL.SEARCH" />
          </Button>
          <Button
            type="button"
            className="btn btn-sm btn-primary btn-sm mx-3 my-1"
            onClick={onReset}
          >
            <ClearIcon />
            <FormattedMessage id="GENERAL.CLEAR_SEARCH" />
          </Button>
        </CardFooter>
      </Card>
    </FormUIProvider>
  )
}


export default FilterFormView
