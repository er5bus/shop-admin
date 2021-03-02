import React, {createContext, useMemo, useContext} from "react"

import { FR, AR } from "./../constants"

const I18N_CONFIG_KEY = "i18nConfig"

const initialState = {
  selectedLang: FR
}

const getConfig = () => {
  const ls = localStorage.getItem(I18N_CONFIG_KEY)
  if (ls) {
    try {
      return JSON.parse(ls)
    } catch (er) {
      console.error(er)
    }
  }
  return initialState
}

export const isRLTLang = () => {
  const lang = getConfig()

  return lang.selectedLang === AR
}

export const getLang = () => {
  const lang = getConfig()
  return lang.selectedLang
}

export const checkLang = (language) => {
  const lang = getConfig()

  return lang.selectedLang === language
}

// Side effect
export const setLanguage = (lang) => {
  window.location.reload(true)
  window.addEventListener("unload", function() {
    localStorage.setItem(I18N_CONFIG_KEY, JSON.stringify({ selectedLang: lang }))
  })
}

const I18nContext = createContext()

export const useLang = () => useContext(I18nContext).selectedLang

export const withI18n = (Component) => {
  class WithI18n extends React.Component {
    static displayName = `WithI18n(${Component.displayName || Component.name})`

    static contextType = I18nContext

    render() {
      return <Component {...this.props} menu={this.context} />
    }
  }

  return WithI18n
}

export const I18nConsumer = I18nContext.Consumer

export const MetronicI18nProvider = ({ children }) => {
  const lang = useMemo(getConfig, [])

  return <I18nContext.Provider value={lang}>{children}</I18nContext.Provider>
}
