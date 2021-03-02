import React from "react"
import * as Yup from "yup"
import { Field, Form, Formik } from "formik"
import { injectIntl } from "react-intl"
import { InputAddons } from "./../../../../../components/partials/controls"


const SearchForm = (props) => {

  const { onSubmit, inputLabelId, isLoading, initialValues = {
    keyword: "",
  }, intl } = props


  const schema = Yup.object().shape({
    keyword: Yup.string().min(3).max(50).required(),
  })

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={schema}
      >
        <Form
          className="form fv-plugins-bootstrap fv-plugins-framework"
        >
          <Field
            name="keyword"
            component={InputAddons}
            placeholder={intl.formatMessage({
              id: inputLabelId,
            })}
            isLoading={isLoading}
            buttonText={<i className="fas fa-search" />}
            inputClassName="form-control form-control-solid h-auto py-5 px-6"
            inputGroupClassName="form-group fv-plugins-icon-container"
            withFeedbackLabel={true}
            type="text"
          />
        </Form>
      </Formik>
    </>
  )
}

export default injectIntl(SearchForm)
