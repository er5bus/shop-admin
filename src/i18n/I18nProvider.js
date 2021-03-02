import React from "react"
import {useLang} from "./Metronici18n"
import {IntlProvider} from "react-intl"

import "@formatjs/intl-relativetimeformat/polyfill"
import "@formatjs/intl-relativetimeformat/dist/locale-data/en"
import "@formatjs/intl-relativetimeformat/dist/locale-data/fr"
import "@formatjs/intl-relativetimeformat/dist/locale-data/ar"
import {AR, FR} from "../constants"

const translationsFiles = [
  "authentication",
  "error",
  "user-management",
  "product-management",
  "order-management",
  "home",
  "menu",
  "general",
  "validation"
]

const _loadTranslation = (lang) => {
  let translations = {}

  for (let translationFile of translationsFiles){
    const object = require(`./../locales/${lang}/${translationFile}.json`)
    translations = Object.assign({}, translations, object)
  }

  return translations
}

const frMessages = _loadTranslation("fr")
const arMessages = _loadTranslation("ar")

export const allMessages = {
  [AR]: arMessages,
  [FR]: frMessages
}

export const I18nProvider = ({ children }) => {
  const locale = useLang()
  const messages = allMessages[locale]

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  )
}
