import {sortCaret} from "../../../../../../../helpers"
import * as columnFormatters from "./../column-formatters"


const columns = ({ intl, ordersUIProps }) => [
  {
    dataField:  "id",
    text: intl.formatMessage({ id: "ORDER.INPUT.ORDER_ID" }),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "totalCost",
    text: intl.formatMessage({ id: "ORDER.INPUT.TOTAL_COST" }),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "status",
    text: intl.formatMessage({ id: "ORDER.INPUT.STATUS" }),
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
    formatExtraData: ordersUIProps,
    classes: "text-right pr-0",
    headerClasses: "text-right pr-3",
    style: {
      minWidth: "200px",
    },
  },
]


export default columns
