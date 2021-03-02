/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import clsx from "clsx";
import { FormattedMessage } from "react-intl";
import { Dropdown } from "react-bootstrap";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useLang, setLanguage, isRLTLang } from "../../../i18n";
import { DropdownTopbarItemToggler } from "./../../partials/dropdowns";

import { AR, FR } from "../../../constants";
import { toAbsoluteUrl } from "../../../helpers";

const languages = [
  {
    lang: AR,
    name: "عربى",
    flag: toAbsoluteUrl("/media/img/AR.svg"),
  },
  {
    lang: FR,
    name: "Français",
    flag: toAbsoluteUrl("/media/img/FR.svg"),
  },
];

const LanguageSelectorDropdown = () => {
  const lang = useLang();
  const currentLanguage = languages.find((x) => x.lang === lang);
  const availableLanguage = languages.find((x) => x.lang !== lang);
  return (
    <Dropdown drop="down" alignRight>
      <Dropdown.Toggle
        as={DropdownTopbarItemToggler}
        id="dropdown-toggle-my-cart"
        className="mb-2"
      >
        <OverlayTrigger
          placement={!isRLTLang() ? "left" : "right"}
          overlay={
            <Tooltip id="language-panel-tooltip">
              {" "}
              <FormattedMessage id="GENERAL.SELECT_LANGUAGE" />{" "}
            </Tooltip>
          }
        >
          <div className="btn btn-icon btn-clean btn-lg">
            <img
              className="w-25px h-25px w-lg-30px h-lg-30px rounded"
              width="25"
              height="25"
              src={availableLanguage.flag}
              alt={availableLanguage.name}
            />
          </div>
        </OverlayTrigger>
      </Dropdown.Toggle>
      <Dropdown.Menu
        className={
          "dropdown-menu p-0 m-0 dropdown-menu-anim-up dropdown-menu-sm dropdown-menu-" +
          (!isRLTLang() ? "left" : "right")
        }
      >
        <ul className="navi navi-hover py-4">
          {languages.map((language) => (
            <li
              key={language.lang}
              className={clsx("navi-item", {
                active: language.lang === currentLanguage.lang,
              })}
            >
              <a
                href="#"
                onClick={() => setLanguage(language.lang)}
                className="navi-link"
              >
                <span className="symbol symbol-25">
                  <img
                    width="25"
                    height="25"
                    src={language.flag}
                    alt={language.name}
                  />
                </span>
                <span className={"navi-text text-" + (isRLTLang() ? "left" : "right") }>{language.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageSelectorDropdown;
