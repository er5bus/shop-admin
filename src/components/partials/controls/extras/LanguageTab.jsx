import React, {useState} from "react"
import { injectIntl } from "react-intl"

import {AR, FR} from "../../../../constants"
import {getLang} from "../../../../i18n"

const LANGUAGES = {
  [FR]: "french-version",
  [AR]: "arabic-version"
}

const LanguageTab = ({ children, intl }) => {

  const [tab, setTab] = useState(LANGUAGES[getLang()])

  return (
  <>
    <ul className="nav nav-tabs nav-tabs-line " role="tablist">
      <li className="nav-item" onClick={() => setTab(LANGUAGES[FR])}>
        <span
          className={`nav-link ${tab === "french-version" && "active"}`}
          dataToggle="tab"
          role="button"
          ariaSelected={(tab === "french-version").toString()}
        >
          {intl.formatMessage({ id: "GENERAL.FRENCH_VERSION" })}
        </span>
      </li>
      <li className="nav-item" onClick={() => setTab(LANGUAGES[AR])}>
        <span
          className={`nav-link ${tab === "arabic-version" && "active"}`}
          dataToggle="tab"
          role="button"
          ariaSelected={(tab === "arabic-version").toString()}
        >
          {intl.formatMessage({ id: "GENERAL.ARABIC_VERSION" })}
        </span>
      </li>
    </ul>
    {  children({ isFr: tab === LANGUAGES[FR], isAr: tab === LANGUAGES[AR] }) }
  </>
)
}


export default injectIntl(LanguageTab)
