import React from "react"
import { FormattedMessage } from "react-intl"

const DataTableGrouping = ({ rows, children }) => {
  
  return (
    <div className="form">
      <div className="row align-items-center form-group-actions margin-top-20 margin-bottom-20">
        <div className="col-xl-12">
          <div className="form-group form-group-inline">
            <div className="form-label form-label-no-wrap mx-2">
              <label className="font-bold">
                <span>
                  <FormattedMessage id="GENERAL.SELECTED_ROWS" />
                  <b>{rows}</b>
                </span>
              </label>
            </div>
            <div>
              { children }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default DataTableGrouping
