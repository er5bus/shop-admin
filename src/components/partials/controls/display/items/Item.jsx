import React, {useMemo} from "react"
import { isArray, isString, isEmpty } from "lodash"
import { FormattedMessage } from "react-intl"
import ContentLoader from "react-content-loader"

import DisplayItem from "../DisplayItem"
import {Col} from "react-bootstrap"
import {getAttr} from "../../../../../helpers"


const ItemLodaer = () => (
  <ContentLoader
    speed={2}
    width="100%"
    height={10}
    viewBox="0 0 100% 10"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="100%" height="10" />
  </ContentLoader>
)

const Item = ({ field, object }) => {

  const { name, hide, hideOn, condition, options, label, html=false, icon=undefined, size = 12 } = field

  const show = useMemo(() => {
    let hideField = hide
    if (isString(hideOn) && hideField){
      const value = getAttr(object, hideOn, null)
      hideField = isArray(condition) ? !condition.includes(value) : condition !== value
    }
    return hideField
    // eslint-disable-next-line
  }, [object])


  const value = useMemo(() => {
    const attrValue = getAttr(object, name, <FormattedMessage id="GENERAL.EMPTY" />)
    if (isArray(options)) {
      const selectedOption = options.find((option) => option.value === attrValue)
      return (selectedOption && selectedOption.label) || <FormattedMessage id="GENERAL.EMPTY" />
    }

    return attrValue
    // eslint-disable-next-line
  }, [object])

  return (
    <Col lg={size} className={ show ? 'd-none' : '' }>
      <DisplayItem
        primary={ label }
        html={html}
        icon={icon}
        secondary={ !isEmpty(object) ? value : <ItemLodaer /> }
      />
    </Col>
  )
}


export default Item
