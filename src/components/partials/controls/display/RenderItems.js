import React, {useEffect} from "react"
import { memoize, isEmpty } from "lodash"
import {DEFAULT_ITEM, ITEM_COMPONENT} from "./item-types/item-types"
import {Row} from "react-bootstrap"
import {useDisplayUIContext} from "./context/DisplayUIContext"


const RenderItems = ({ fields, show=true, isFetching=false, object }) => {

  const displayUiProps = useDisplayUIContext()

  useEffect(() => {
    if (!isEmpty(fields) && displayUiProps && show){
      displayUiProps.setFields(fields)
    }
    // eslint-disable-next-line
  }, [fields])

  const renderField = memoize(({ component, ...props }) => {
    const Component = ITEM_COMPONENT[component] || DEFAULT_ITEM
    return (
      <Component field={props} isFetching={isFetching} object={object} />
    )
  })


  return (
    <>
      <Row className={ show ? "" : " d-none" }>
        { fields.map((field) => (
          <>{ renderField(field) }</>
        )) }
      </Row>
    </>
  )
}


export default React.memo(RenderItems)
