/*eslint no-template-curly-in-string: "off"*/
import * as Yup from "yup"

export let mixed = {
  default: JSON.stringify({
    id: "VALIDATION.ERROR.MIXED.DEFAULT",
    defaultMessage: "${path} is invalid",
    values: { path: "${path}" }
  }),
  required: JSON.stringify({
    id: "VALIDATION.ERROR.MIXED.REQUIRED",
    defaultMessage: "${path} is a required field",
    values: { path: "${path}" }
  }),
  oneOf: JSON.stringify({
    id: "VALIDATION.ERROR.MIXED.ONEOF",
    defaultMessage: "${path} must be one of the following values: ${values}",
    values: { path: "${path}", values: "${values}" }
  }),
  notOneOf: JSON.stringify({
    id: "VALIDATION.ERROR.MIXED.NOTONEOF",
    defaultMessage: "${path} must not be one of the following values: ${values}",
    values: { path: "${path}", values: "${values}" }
  }),
  notType: JSON.stringify({
    id: "VALIDATION.ERROR.MIXED.NOTTYPE",
    defaultMessage: "${path} cannot match any of the following values: ${values}",
    values: { path: "${path}", values: "${values}" }
  }),
  defined: JSON.stringify({
    id: "VALIDATION.ERROR.MIXED.DEFINED",
    defaultMessage: "${path} must be defined",
    values: { path: "${path}" }
  })
}

export let string = {
  length: JSON.stringify({
    id: "VALIDATION.ERROR.STRING.LENGTH",
    defaultMessage: "${path} must be exactly ${length} characters",
    values: { path: "${path}", length: "${length}" }
  }),
  min: JSON.stringify({
    id: "VALIDATION.ERROR.STRING.MIN",
    defaultMessage: "${path} must be at least ${min} characters",
    values: { path: "${path}", min: "${min}" }
  }),
  max: JSON.stringify({
    id: "VALIDATION.ERROR.STRING.MAX",
    defaultMessage: "${path} must be at most ${max} characters",
    values: { path: "${path}", max: "${max}" }
  }),
  matches: JSON.stringify({
    id: "VALIDATION.ERROR.STRING.MATCHES",
    defaultMessage: "${path} must match the following: '${regex}'",
    values: { path: "${path}", regex: "${regex}" }
  }),
  email: JSON.stringify({
    id: "VALIDATION.ERROR.STRING.ONEOF",
    defaultMessage: "${path} must be a valid email",
    values: { path: "${path}" }
  }),
  url: JSON.stringify({
    id: "VALIDATION.ERROR.STRING.URL",
    defaultMessage: "${path} must be a valid URL",
    values: { path: "${path}" }
  }),
  uuid: JSON.stringify({
    id: "VALIDATION.ERROR.STRING.UUID",
    defaultMessage: "${path} must be a valid UUID",
    values: { path: "${path}" }
  }),
  trim: JSON.stringify({
    id: "VALIDATION.ERROR.STRING.TRIM",
    defaultMessage: "${path} must be a trimmed string",
    values: { path: "${path}" }
  }),
  lowercase: JSON.stringify({
    id: "VALIDATION.ERROR.STRING.LOWERCASE",
    defaultMessage: "${path} must be a lowercase string",
    values: { path: "${path}" }
  }),
  uppercase: JSON.stringify({
    id: "VALIDATION.ERROR.STRING.UPPERCASE",
    defaultMessage: "${path} must be a upper case string",
    values: { path: "${path}" }
  })
}

export let number = {
  min: JSON.stringify({
    id: "VALIDATION.ERROR.NUMBER.MIN",
    defaultMessage: "${path} must be greater than or equal to ${min}",
    values: { path: "${path}", min: "${min}" }
  }),
  max: JSON.stringify({
    id: "VALIDATION.ERROR.NUMBER.MAX",
    defaultMessage: "${path} must be less than or equal to ${max}",
    values: { path: "${path}", min: "${max}" }
  }),
  lessThan: JSON.stringify({
    id: "VALIDATION.ERROR.NUMBER.LESSTHAN",
    defaultMessage: "${path} must be less than ${less}",
    values: { path: "${path}", less: "${less}" }
  }),
  moreThan: JSON.stringify({
    id: "VALIDATION.ERROR.NUMBER.MORETHAN",
    defaultMessage: "${path} must be greater than ${more}",
    values: { path: "${path}", more: "${more}" }
  }),
  notEqual: JSON.stringify({
    id: "VALIDATION.ERROR.NUMBER.NOTEQUAL",
    defaultMessage: "${path} must be not equal to ${notEqual}",
    values: { path: "${path}", notEqual: "${notEqual}" }
  }),
  positive: JSON.stringify({
    id: "VALIDATION.ERROR.NUMBER.POSITIVE",
    defaultMessage: "${path} must be a positive number",
    values: { path: "${path}" }
  }),
  negative: JSON.stringify({
    id: "VALIDATION.ERROR.NUMBER.NEGATIVE",
    defaultMessage: "${path} must be a negative number",
    values: { path: "${path}" }
  }),
  integer: JSON.stringify({
    id: "VALIDATION.ERROR.NUMBER.INTEGER",
    defaultMessage: "${path} must be an integer",
    values: { path: "${path}" }
  })
}

export let date = {
  min: JSON.stringify({
    id: "VALIDATION.ERROR.MIXED.MIN",
    defaultMessage: "${path} field must be later than ${min}",
    values: { path: "${path}", min: "${min}" }
  }),
  max: JSON.stringify({
    id: "VALIDATION.ERROR.MIXED.MAX",
    defaultMessage: "${path} field must be at earlier than ${max}",
    values: { path: "${path}", min: "${max}" }
  })
}

export let boolean = {}

export let object = {
  noUnknown: JSON.stringify({
    id: "VALIDATION.ERROR.OBJECT.NOUNKNOWN",
    defaultMessage: "${path} field has unspecified keys: ${unknown}",
    values: { path: "${path}", unknown: "${unknown}" }
  }),
}

export let array = {
  min: JSON.stringify({
    id: "VALIDATION.ERROR.ARRAY.MIN",
    defaultMessage: "${path} field must have at least ${min} items",
    values: { path: "${path}", min: "${min}" }
  }),
  max: JSON.stringify({
    id: "VALIDATION.ERROR.ARRAY.MAX",
    defaultMessage: "${path} field must have less than or equal to ${max} items",
    values: { path: "${path}", max: "${max}" }
  })
}


Yup.setLocale({
  mixed,
  string,
  number,
  date,
  object,
  array,
  boolean,
})
