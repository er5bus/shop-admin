import React, {useMemo} from "react"
import ReactDOMServer from 'react-dom/server';
import { useIntl } from "react-intl"
import _ from "lodash"
import {formatString, getAttr, toAbsoluteUrl} from "../../../../helpers";
import {I18nProvider, isRLTLang, MetronicI18nProvider} from "../../../../i18n";
import {NESTED_LIST_OF_ITEMS, TABLE_OF_ITEMS} from "../display/item-types/item-types";

const initDocDefinition = ({
  info: {
    title: "pdf",
    author: 'Infinity managment',
    subject: "pdf Doc",
    keywords: "pdf, doc, gu",
  },
  footer: (currentPage, pageCount) => [{ color: "#312c63", text: currentPage.toString() + '/' + pageCount, alignment: 'center' }],
  images: {
    logo: toAbsoluteUrl("/media/logos/logo-dark-small.png")
  },
  defaultStyle: {
    font: 'main'
  },
  styles: {
    header: {
      fontSize: 18,
      bold: true,
      headlineLevel: 1,
      margin: [30, 30],
      color: "#312c63",
      alignment: "center"
    },
  }
})

const convertJsxToHtml = (elem) => {
  const html = ReactDOMServer.renderToStaticMarkup(<MetronicI18nProvider>
              <I18nProvider>{ elem }</I18nProvider>
            </MetronicI18nProvider>)
  return formatString(html.replace(/<\/?[^>]+(>|$)/g, ""))
}

const useDocDefinition = ({ fields = [], title, object }) => {

  const intl = useIntl()

  const getFieldData = (object, field) => {
    const { options, name, formatter, component, columns } = field
    const attrValue = getAttr(object, name, intl.formatMessage({ id: "GENERAL.EMPTY" }))
    if (component === NESTED_LIST_OF_ITEMS){
      const nestedList = formatter(attrValue)
      let content = [ columns.map((col) => ({ text: formatString(col.text), color: "#312c63", bold: true })) ]
      Object.keys(nestedList).forEach((key) => {
        content.push([
          ( formatString(key) || intl.formatMessage({ id: "GENERAL.EMPTY" }) ),
          ( nestedList[key] || []).map((value) => ( formatString(value) || intl.formatMessage({ id: "GENERAL.EMPTY" }) )).join(", ")
        ])
      })
      return { content, widths: columns.map(() => "*") }
    }
    if (component === TABLE_OF_ITEMS) {
      let content = [ columns.map((col) => ({ text: formatString(col.text), color: "#312c63", bold: true })) ]
      for (let i=0;i<attrValue.length;i++){
        content.push(columns.map((col) => {
          const value = getAttr(attrValue[i], col.dataField, intl.formatMessage({ id: "GENERAL.EMPTY" }))
          if (_.isFunction(col.formatter)){
            return convertJsxToHtml(col.formatter(value, attrValue[i]))
          }
          if (_.isObjectLike(value)){  
            return intl.formatMessage({ id: "GENERAL.EMPTY" })
          }
          return formatString(value)
        }))
      }
      return { content, widths: columns.map(() => "*") }
    }

    if (_.isArray(options)) {
      const selectedOption = options.find((option) => option.value === attrValue)
      return (selectedOption && selectedOption.label) || intl.formatMessage({ id: "GENERAL.EMPTY" })
    }
    return formatString(attrValue)
  }

  const documentDefinition = useMemo(() => {
    const documentFields = {}
    const nestedTables = {}
    fields.forEach((field) => {
      const fieldName = _.isString(field.name) && field.name.replace("Fr", "").replace("Ar", "")
      const fieldValue = getFieldData(object, field)
      const label = formatString(field.label)

      if (_.isString(fieldValue)) {
        documentFields[fieldName] = [{ text: label, color: "#312c63", bold: true}, fieldValue, ...(documentFields[fieldName] || [])]
        documentFields[fieldName] = isRLTLang()
          ? documentFields[fieldName].reverse()
          : documentFields[fieldName]
      }

      if (_.isPlainObject(fieldValue)){
        nestedTables[fieldName] = {
          style: 'tableExample',
          color: '#444',
          margin: [0, 30, 0, 30],
          table: {
            headerRows: 2,
            widths: fieldValue.widths,
            body: !isRLTLang() 
              ? [ [{ text: label, colSpan: fieldValue.widths.length, color: "#312c63", bold: true}], ...fieldValue.content] 
              : [ [{ text: label, colSpan: fieldValue.widths.length, color: "#312c63", bold: true}], ...fieldValue.content.map((col) => col.reverse())]
          },
          alignment: !isRLTLang() ? 'left' : 'right',
        }
      }
    })
    const mainTable = []
    const body = Object.values(documentFields)
    if (!_.isEmpty(body)){
      mainTable.push({
        style: 'tableExample',
        color: '#444',
        table: {
          widths: [ '*', '*' ],
          body
        },
        alignment: !isRLTLang() ? 'left' : 'right',
      })
    }
    return ({
      ...initDocDefinition,
      content: [
        { image: 'logo', alignment: !isRLTLang() ? 'left' : 'right' },
        {
          text: _.isString(title) ? formatString(title) : convertJsxToHtml(title),
          style: 'header',
        },
        ...mainTable,
        ...Object.values(nestedTables)
      ],
    })

    // eslint-disable-next-line
  }, [fields, object])

  return documentDefinition
}


export default useDocDefinition
