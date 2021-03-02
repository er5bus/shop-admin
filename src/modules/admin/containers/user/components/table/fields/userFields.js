import _ from "lodash"
import {sortCaret} from "../../../../../../../helpers"
import * as columnFormatters from "./../column-formatters"

const columns = ({ intl, usersUIProps }) => [
  {
      dataField: "user.email",
      text: intl.formatMessage({
        id: "USER.INPUT.EMAIL",
      }),
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "user.firstName",
      text: intl.formatMessage({
        id: "USER.INPUT.FIRST_NAME",
      }),
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "user.lastName",
      text: intl.formatMessage({
        id: "USER.INPUT.LAST_NAME",
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
    formatExtraData: usersUIProps,
    classes: "text-right pr-0",
    headerClasses: "text-right pr-3",
    style: {
      minWidth: "200px",
    },
  },
]


export default _.memoize(columns)
