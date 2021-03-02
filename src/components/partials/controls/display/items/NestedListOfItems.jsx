import React from "react"
import { isEmpty, isPlainObject } from "lodash"
import { FormattedMessage } from "react-intl"
import ContentLoader from "react-content-loader"

import DisplayItem from "../DisplayItem"
import {Col} from "react-bootstrap"
import CustomizedTreeView from "../../extras/TreeView"
import StyledTreeItem from "../../extras/StyledTreeItem"
import {getAttr} from "../../../../../helpers"


const ItemLodaer = () => (
  <ContentLoader
    speed={2}
    width="100%"
    height={15}
    viewBox="0 0 100% 15"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="100%" height="10" />
  </ContentLoader>
)


const NestedListOfItems = ({ field, object }) => {

  const { name, label, formatter, html=false, icon=undefined, size = 12 } = field

  const value = getAttr(object, name, {})
  const nestedList = !isEmpty(value) ? formatter(value) : {}
  return (
    <>
      <Col lg={size}>
        <DisplayItem
          primary={ label }
          html={html}
          icon={icon}
          secondary={
            isEmpty(object) ? <ItemLodaer /> :
            <CustomizedTreeView>
              { (isPlainObject(nestedList) && !isEmpty(nestedList)) ? Object.keys(nestedList).map((key) => (
                <StyledTreeItem nodeId={key} label={key || <FormattedMessage id="GENERAL.EMPTY" />}>
                  { (nestedList[key] || []).map((value, idx) => ( <StyledTreeItem nodeId={idx} label={value || <FormattedMessage id="GENERAL.EMPTY" />} /> )) }
                </StyledTreeItem>
              )) : <FormattedMessage id="GENERAL.EMPTY" /> }
            </CustomizedTreeView>
          }
        />
      </Col>
    </>
  )
}


export default NestedListOfItems
