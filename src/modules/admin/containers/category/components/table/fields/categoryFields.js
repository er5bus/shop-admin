import {sortCaret} from "../../../../../../../helpers"
import * as columnFormatters from "./../column-formatters"


const columns = ({ intl, categorysUIProps }) => [
  {
    dataField:  "categoryName",
    text: intl.formatMessage({ id: "CATEGORY.INPUT.CATEGORY_NAME" }),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "description",
    text: intl.formatMessage({ id: "CATEGORY.INPUT.DESCRIPTION" }),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "isActive",
    text: intl.formatMessage({ id: "CATEGORY.INPUT.STATE" }),
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
    formatExtraData: categorysUIProps,
    classes: "text-right pr-0",
    headerClasses: "text-right pr-3",
    style: {
      minWidth: "200px",
    },
  },
]


export default columns
