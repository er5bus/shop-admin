import React, {useEffect, useState} from "react"
import { memoize, isEmpty } from "lodash"
import {DEFAULT_ITEM, ITEM_COMPONENT} from "./item-types/item-types"
import {Row} from "react-bootstrap"
import Typography from "@material-ui/core/Typography"
import ItemNotFound from "../extras/ItemNotFound"
import {useDisplayUIContext} from "./context/DisplayUIContext"


const DisplayItems = ({ fields = [], title, error, children, show=true, isFetching=false, object }) => {

  const [ hasNoContent, setHasNoContent ] = useState(false)
  const displayUiProps = useDisplayUIContext()

  useEffect(() => {
    if (!isEmpty(fields) && displayUiProps){
      displayUiProps.setFields(fields)
    }
    if (displayUiProps){
      displayUiProps.setError(error)
      displayUiProps.setObject(object)
      displayUiProps.setFetching(isFetching || isEmpty(object))
    }

    // eslint-disable-next-line
  }, [fields, error, isFetching, object])

  useEffect(() => {
    if (!hasNoContent && !isEmpty(error)){
      setHasNoContent(true)
    }

    //if (!hasNoContent && !isFetching) {
    //  setHasNoContent(true)
    //}

    // eslint-disable-next-line
  }, [error, isFetching])

  const renderField = memoize(({ component, ...props }) => {
    const Component = ITEM_COMPONENT[component] || DEFAULT_ITEM
    return (
      <Component field={props} isFetching={isFetching} object={object} />
    )
  })

  if (hasNoContent) {
    return <ItemNotFound error={error} />
  }else {
    return (
      <>
        { title && <Typography className="mt-5">{ title }</Typography> }
        <Row className={ show ? "" : " d-none" }>
          { fields.map((field) => (
            <>{ renderField(field) }</>
          )) }
        </Row>
        {
          React.Children.map(children, (child) => (
            <>{ React.cloneElement(child, { ...child.props, isFetching, object }) }</>
          ))
        }
      </>
    )
  }
}


export default React.memo(DisplayItems)
