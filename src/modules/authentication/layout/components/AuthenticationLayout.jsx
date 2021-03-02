/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import { toAbsoluteUrl } from "../../../../helpers";
import { LanguageSelectorDropdown } from "../../../../components/layout";

import { APP_VERSION } from "../../../../constants";

import "../../../../assets/scss/pages/login/classic/login.scss";

const AuthenticationLayout = ({ children }) => (
  <>
    <div className="d-flex flex-column flex-root">
      {/*begin::Login*/}
      <div
        className="login login-1 login-signin-on d-flex flex-column flex-lg-row flex-row-fluid bg-white"
        id="kt_login"
      >
        {/*begin::Aside*/}
        <div
          className="login-aside d-flex flex-row-auto bgi-size-cover bgi-no-repeat p-10 p-lg-10"
          style={{
            backgroundImage: `url(${toAbsoluteUrl("/media/bg/bg-5.jpg")})`,
          }}
        >
          {/*begin: Aside Container*/}
          <div className="d-flex flex-row-fluid flex-column justify-content-between">
            {/* start:: Aside header */}
            <Link to="/" className="flex-column-auto my-5 text-center ">
              <img
                alt="Logo"
                className="max-h-200px"
                src={toAbsoluteUrl("/media/logos/logo.png")}
              />
            </Link>
            {/* end:: Aside header */}

            {/* start:: Aside content */}
            <div className="flex-column-fluid d-flex flex-column justify-content-center">
              <h3 className="display-3 font-size-h1 mb-5 text-white">
                <FormattedMessage id="GENERAL.TITLE" />
              </h3>
              <p className="display-4 font-weight-lighter text-white opacity-80">
                <FormattedMessage id="GENERAL.DESC" />
              </p>
            </div>
            {/* end:: Aside content */}

            {/* start:: Aside footer for desktop */}
            <div className="d-none flex-column-auto d-lg-flex justify-content-between align-items-center mt-10">
              <div className="opacity-70 font-weight-bold text-white">
                {new Date().getFullYear()} © {APP_VERSION}
              </div>
              <div className="d-flex">
                <LanguageSelectorDropdown />
              </div>
            </div>
            {/* end:: Aside footer for desktop */}
          </div>
          {/*end: Aside Container*/}
        </div>
        {/*begin::Aside*/}

        {/*begin::Content*/}
        <div className="flex-row-fluid d-flex flex-column position-relative p-7 overflow-hidden">
          {/*begin::Content header*/}
          <div className="position-absolute top-0 right-0 text-right mt-5 mb-15 mb-lg-0 flex-column-auto justify-content-center py-5 px-10">
            <span className="font-weight-bold text-dark-50"></span>
          </div>
          {/*end::Content header*/}

          {/* begin::Content body */}
          <div className="d-flex flex-column-fluid flex-center mt-30 mt-lg-0">
            {children}
          </div>
          {/*end::Content body*/}

          {/* begin::Mobile footer */}
          <div className="d-flex d-lg-none flex-column-auto flex-column flex-sm-row justify-content-between align-items-center mt-5 p-5">
            <div className="text-dark-50 font-weight-bold order-2 order-sm-1 my-2">
              {new Date().getFullYear()} © {APP_VERSION}
            </div>
            <div className="d-flex order-1 order-sm-2 my-2">
              <LanguageSelectorDropdown />
            </div>
          </div>
          {/* end::Mobile footer */}
        </div>
        {/*end::Content*/}
      </div>
      {/*end::Login*/}
    </div>
  </>
);

export default AuthenticationLayout;
