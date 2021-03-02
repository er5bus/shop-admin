import _ from "lodash"
import {sortCaret} from "../../../../../../../helpers"
import * as columnFormatters from "./../column-formatters"


const columns = ({ intl, userGroupsUIProps }) => [
  {
    dataField: "name",
    text: intl.formatMessage({
      id: "USER_GROUP.INPUT.NAME",
    }),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "action",
    text: intl.formatMessage({
      id: "GENERAL.ACTIONS",
    }),
    formatter: columnFormatters.ActionsColumnFormatter,
    formatExtraData: userGroupsUIProps,
    classes: "text-right pr-0",
    headerClasses: "text-right pr-3",
    style: {
      minWidth: "200px",
    },
  },
]


export default _.memoize(columns)
