export const productFields = ({ intl }) => [
  {
    name: "category.categoryName",
    label: intl.formatMessage({ id: "CATEGORY.INPUT.CATEGORY_NAME" }),
    size: 6,
  },
  {
    name: "category.description",
    label: intl.formatMessage({ id: "CATEGORY.INPUT.DESCRIPTION" }),
    size: 6,
  },
  {
    name: "productName",
    label: intl.formatMessage({ id: "PRODUCT.INPUT.PRODUCT_NAME" }),
    size: 6,
  },
  {
    name: "description",
    label: intl.formatMessage({ id: "PRODUCT.INPUT.DESCRIPTION" }),
    size: 6,
  },
  {
    name: "price",
    label: intl.formatMessage({ id: "PRODUCT.INPUT.PRICE" }),
    size: 6,
  },
  {
    name: "stock",
    label: intl.formatMessage({ id: "PRODUCT.INPUT.STOCK" }),
    size: 6,
  },
]
