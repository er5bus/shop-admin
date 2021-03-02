/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"
import { OverlayTrigger, Tooltip } from "react-bootstrap"
import SVG from "react-inlinesvg"
import { toAbsoluteUrl } from "../../../../../../../helpers"
import {ProtectedLink} from "../../../../../../../components/wrappers"

const ActionsColumnFormatter = (
  cellContent,
  row,
  rowIndex,
  formatExtraData
) => (
  <div className="text-right">
    {row.isActive && (
      <OverlayTrigger
        overlay={
          <Tooltip id="user-edit-tooltip">
            <FormattedMessage id="USER.EDIT" />
          </Tooltip>
        }
      >
        <ProtectedLink rule={formatExtraData.editUserRule}>
          <a
            className="btn btn-sm btn-icon btn-light btn-hover-warning btn-sm mx-1 my-1"
            onClick={() => formatExtraData.openEditUserPage(row.id)}
          >
            <span className="svg-icon svg-icon-md svg-icon-warning">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Communication/Write.svg")}
              />
            </span>
          </a>
        </ProtectedLink>
      </OverlayTrigger>
    )}

    {/*row.isActive && (
      <OverlayTrigger
        overlay={
          <Tooltip id="user-edit-tooltip">
            <FormattedMessage id="USER.REGENERATE_PASSWORD" />
          </Tooltip>
        }
      >
        <ProtectedLink rule={formatExtraData.regenerateUserPasswordRule}>
          <a
            className="btn btn-sm btn-icon btn-light btn-hover-primary btn-sm mx-1 my-1"
            onClick={() => formatExtraData.openRegenerateUserPasswordDialog(row.id)}
          >
            <span className="svg-icon svg-icon-md svg-icon-primary">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Communication/Outgoing-mail.svg")}
              />
            </span>
          </a>
        </ProtectedLink>
      </OverlayTrigger>
    )*/}

    {row.isActive && (
      <OverlayTrigger
        overlay={
          <Tooltip id="user-show-tooltip">
            <FormattedMessage id="USER.SHOW" />
          </Tooltip>
        }
      >
        <ProtectedLink rule={formatExtraData.showUserRule}>
          <a
            className="btn btn-sm btn-icon btn-light btn-hover-primary btn-sm mx-1 my-1"
            onClick={() => formatExtraData.openShowUserPage(row.id)}
          >
            <span className="svg-icon svg-icon-md svg-icon-primary">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/General/Visible.svg")}
              />
            </span>
          </a>
        </ProtectedLink>
      </OverlayTrigger>
    )}

    {row.isActive && (
      <OverlayTrigger
        overlay={
          <Tooltip id="user-disable-tooltip">
            <FormattedMessage id="USER.DISABLE" />
          </Tooltip>
        }
      >
        <ProtectedLink rule={formatExtraData.disableUserRule}>
          <a
            className="btn btn-sm btn-icon btn-light btn-hover-danger btn-sm my-1 mx-1"
            onClick={() => formatExtraData.openDisableUserDialog(row.id)}
          >
            <span className="svg-icon svg-icon-md svg-icon-danger">
              <SVG src={toAbsoluteUrl("/media/svg/icons/General/Lock.svg")} />
            </span>
          </a>
        </ProtectedLink>
      </OverlayTrigger>
    )}

    {!row.isActive && !row.isDeleted && (
      <OverlayTrigger
        overlay={
          <Tooltip id="user-enable-tooltip">
            <FormattedMessage id="USER.ENABLE" />
          </Tooltip>
        }
      >
        <ProtectedLink rule={formatExtraData.enableUserRule}>
          <a
            className="btn btn-sm btn-icon btn-light btn-hover-success btn-sm mx-1 my-1"
            onClick={() => formatExtraData.openEnableUserDialog(row.id)}
          >
            <span className="svg-icon svg-icon-md svg-icon-success">
              <SVG src={toAbsoluteUrl("/media/svg/icons/General/Unlock.svg")} />
            </span>
          </a>
        </ProtectedLink>
      </OverlayTrigger>
    )}
  </div>
);


export default ActionsColumnFormatter
