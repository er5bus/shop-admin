import {TABLE_OF_ITEMS} from "../../../../../../../components/partials"
import {statusUIHelper, userUIHelper} from "../../../../../UIHelpers"


export const orderFields = ({ intl }) => [
  {
    name: "firstName",
    label: intl.formatMessage({ id: "ORDER.INPUT.FIRST_NAME" }),
    size: 6,
  },
  {
    name: "lastName",
    label: intl.formatMessage({ id: "ORDER.INPUT.LAST_NAME" }),
    size: 6,
  },
  {
    name: "email",
    label: intl.formatMessage({ id: "ORDER.INPUT.EMAIL" }),
    size: 6,
  },
  {
    name: "address",
    label: intl.formatMessage({ id: "ORDER.INPUT.ADDRESS" }),
    size: 6,
  },
  {
    name: "totalCost",
    laodOptions: userUIHelper,
    label: intl.formatMessage({ id: "ORDER.INPUT.TOTAL_COST" }),
    size: 6,
  },
  {
    name: "status",
    options: statusUIHelper(intl),
    label: intl.formatMessage({ id: "ORDER.INPUT.STATUS" }),
    size: 6,
  },
  {
    name: "items",
    showActions: false,
    columns: [
      {
        dataField: "product.productName",
        text: intl.formatMessage({
          id: "ORDER.INPUT.PRODUCT",
        }),
      },
      {
        dataField: "quantity",
        text: intl.formatMessage({
          id: "ORDER.INPUT.QUANTITY",
        }),
      },
      {
        dataField: "price",
        text: intl.formatMessage({
          id: "ORDER.INPUT.PRICE",
        }),
      },
      {
        dataField: "cost",
        text: intl.formatMessage({
          id: "ORDER.INPUT.COST",
        }),
      },
    ],
    component: TABLE_OF_ITEMS,
    label: intl.formatMessage({ id: "ORDER.ORDER_ITEM.TITLE" }),
    size: 12,
  },
]
