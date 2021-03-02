import React from "react"
import { injectIntl } from "react-intl"
import { Formik, Field } from "formik"
import { Col, Row } from "react-bootstrap"
import InputAddons from "./../inputs/InputAddons"

const SearchFilter = ({ intl, applyFilter }) => {
  return (
    <div className="my-2">
      <Formik
        initialValues={{
          search: ""
        }}
        onSubmit={(values) => {
          applyFilter(values)
        }}
      >
        {({
          handleSubmit,
          handleBlur,
          handleChange
        }) => (
          <form onSubmit={handleSubmit} className="form form-label-right">
            <Row className="form-group justify-content-end">
              <Col lg="4">
                <Field
                  name="search"
                  component={InputAddons}
                  placeholder={intl.formatMessage({
                    id: "GENERAL.INPUT.SEARCH"
                  })}
                  label={intl.formatMessage({
                    id: "GENERAL.INPUT.SEARCH"
                  })}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </Col>
            </Row>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default injectIntl(SearchFilter)
