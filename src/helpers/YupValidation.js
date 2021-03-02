/*eslint no-template-curly-in-string: "off"*/
import _ from "lodash"
import * as Yup from "yup"


const checkNestedPath = (path, separator) => Boolean(path.split(separator).length - 1)

const getParentPath = (path, separator) => path.substring(0, path.lastIndexOf(separator))

const createObjectShape = (object) => Yup.object().shape(object)

const createArrayShape = (object) => Yup.array().of(Yup.object().shape(object))

const createFieldSchema = (fields, separator, validationAttr) => {
  const schema = {}
  const nestedAttr = new Set()
  fields.forEach(field => {
    if (_.has(field, validationAttr)) {
      _.set(schema, field.name, _.get(field, validationAttr))
    }
    if (checkNestedPath(field.name, separator)){
      let path = field.name
      while( !_.isEmpty(path = getParentPath(path, separator)) ){
        nestedAttr.add(path)
      }
    }
  })

  Array.from(nestedAttr)
    .sort((a, b) => (b.split(separator).length - a.split(separator).length))
    .forEach((path) => {
      if (path.endsWith("[]")){
        _.set(schema, path.slice(0, -2), createArrayShape(_.get(schema, path)))
      }else {
        _.set(schema, path, createObjectShape(_.get(schema, path)))
      }
    })

  return createObjectShape(schema)
}

export const createYupSchema = (fields, disableValidation=false, separator=".", validationAttr="validation") => {
  if (disableValidation){
    return Yup.object()
  }
  return createFieldSchema(fields, separator, validationAttr)
}


const equalTo = (ref, message) => Yup.mixed().test({
  name: "equalTo",
  exclusive: false,
  message: message || JSON.stringify({
    id: "VALIDATION.ERROR.STRING.EQUAL",
    defaultMessage: "${path} must be the same as ${reference}",
    values: { path: "${path}", unknown: "${reference}" }
  }),
  params: {
    reference: ref.path,
  },
  test: function(value) {
    return value === this.resolve(ref)
  },
})

const phone = (message) => Yup.mixed().test({
  name: "phone",
  exclusive: false,
  message: message || JSON.stringify({
    id: "VALIDATION.ERROR.NUMBER.PHONE",
    defaultMessage: "${path} must be a valid number",
    values: { path: "${path}" }
  }),
  test: function (value) {
    if (value){
      const regx = new RegExp(/^(\+?\d{0,3})?\s?-?\s?(\(?\d{2}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)?$/)
      return regx.test(value.toString())
    }
    return true
  }
})


const array = (message) => Yup.mixed().test({
  name: "array",
  exclusive: false,
  message: message || JSON.stringify({
    id: "VALIDATION.ERROR.MIXED.ARRAY",
    defaultMessage: "${path} must be a valid array",
    values: { path: "${path}" }
  }),
  test: function (value) {
    if (value){
      return Array.isArray(value)
    }
    return true
  }
})


Yup.addMethod(Yup.string, "equalTo", equalTo)
Yup.addMethod(Yup.number, "phone", phone)
Yup.addMethod(Yup.mixed, "array", array)
