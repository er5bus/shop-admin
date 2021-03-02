export const categoryFields = ({ intl }) => [
  {
    name: "categoryName",
    label: intl.formatMessage({ id: "CATEGORY.INPUT.CATEGORY_NAME" }),
    size: 12,
  },
  {
    name: "description",
    label: intl.formatMessage({ id: "CATEGORY.INPUT.DESCRIPTION" }),
    size: 12,
  },
]
