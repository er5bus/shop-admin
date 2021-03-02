import {sortCaret} from "../../../../../../../helpers"
import * as columnFormatters from "./../column-formatters"


const columns = ({ intl, productsUIProps }) => [
  {
    dataField:  "productName",
    text: intl.formatMessage({ id: "PRODUCT.INPUT.PRODUCT_NAME" }),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "description",
    text: intl.formatMessage({ id: "PRODUCT.INPUT.DESCRIPTION" }),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "isActive",
    text: intl.formatMessage({ id: "PRODUCT.INPUT.STATE" }),
    formatter: columnFormatters.StateColumnFormatter,
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "action",
    text: intl.formatMessage({
      id: "GENERAL.ACTIONS",
    }),
    formatter: columnFormatters.ActionsColumnFormatter,
    formatExtraData: productsUIProps,
    classes: "text-right pr-0",
    headerClasses: "text-right pr-3",
    style: {
      minWidth: "200px",
    },
  },
]


export default columns
