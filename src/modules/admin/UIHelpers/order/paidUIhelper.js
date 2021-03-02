export const PENDING = 1
export const IN_PROGRESS = 2
export const AVAILABLE = 3
export const EXPIRED = 4
export const PAID = 5
export const CANCELLED = 6
export const REFUNDED = 7


export const STATUS = { 
  [PENDING]: "ORDER.PENDING",
  [IN_PROGRESS]: "ORDER.IN_PROGRESS",
  [AVAILABLE]: "ORDER.AVAILABLE",
  [EXPIRED]: "ORDER.EXPIRED",
  [PAID]: "ORDER.PAID",
  [CANCELLED]: "ORDER.CANCELLED",
  [REFUNDED]: "ORDER.REFUNDED"
}

export const statusUIHelper = (intl) =>
  Object.keys(STATUS).map((value) => ({
    value: parseInt(value),
    label: intl.formatMessage({ id: STATUS[value] }),
  }))
