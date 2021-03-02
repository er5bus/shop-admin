/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"
import {STATUS} from "../../../../../UIHelpers";

const StateColumnFormatter = (
  cellContent,
) => (
  <div className={`label label-lg label-light-primary label-inline`}>
    <FormattedMessage id={ STATUS[cellContent] || "GENERAL.EMPTY" } />
  </div>
);


export default StateColumnFormatter
