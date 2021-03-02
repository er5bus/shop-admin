import React, { useState } from "react"
import { FormattedMessage } from "react-intl"
import { Form, Formik } from "formik"
import _ from "lodash"
import { isRLTLang } from "./../../../../../i18n"
import { makeStyles, withStyles } from "@material-ui/core/styles"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepConnector from '@material-ui/core/StepConnector'
import StepLabel from "@material-ui/core/StepLabel"

import { Button } from "react-bootstrap"
import { createYupSchema } from "../../../../../helpers"


const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: `calc(${!isRLTLang() ? '-' : ''}50% + 20px)`,
    right:`calc(${isRLTLang() ? '-' : ''}50% + 20px)`
  },
  active: {
    '& $line': {
      borderColor: '#27c191',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#27c191',
    },
  },
  line: {
    borderColor: '#3699FF',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector)

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  iconContainer: { // define styles for icon container
    transform: 'scale(1.7)',
  },
  icon: {
    color: "rgb(125, 129, 153)"
  },
  completed: {
    color: "lightgreen",
    display: 'inline-block'
  },
  active: {
    color: "#3699FF !important"
  },
  text: {
    fill: "white",
    fontWeight: "bold"
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}))

const Wizard = ({ children, initialValues = {}, onSubmit }) => {

  const steps = React.Children.toArray(children)
  const initialSnapshot = React.useMemo(() => {
    steps.forEach(step => {
      const fields =_.get(step, "props.fields", [])
      fields.forEach(field => {
        if(_.isEmpty(_.get(initialValues, field.name))) {
          _.set(initialValues, field.name, _.get(field, "initialValue", ""))
        }
      })
    })
    return initialValues
  }, [steps, initialValues])

  const classes = useStyles()
  const [stepNumber, setStepNumber] = useState(0)
  const [snapshot, setSnapshot] = useState(initialSnapshot)

  const step = steps[stepNumber]
  const totalSteps = steps.length
  const isLastStep = stepNumber === totalSteps - 1

  const next = values => {
    setSnapshot(values)
    setStepNumber(Math.min(stepNumber + 1, totalSteps - 1))
  }

  const previous = values => {
    setSnapshot(values)
    setStepNumber(Math.max(stepNumber - 1, 0))
  }

  const handleSubmit = async (values, bag) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit(values, bag)
    }
    if (isLastStep) {
      return onSubmit(values, bag)
    } else {
      bag.setTouched({})
      next(values)
    }
  }

  const fieldsValidation = React.useMemo(() =>  {
    return createYupSchema(step.props.fields)
  }, [step])

  return (
    <Formik
      initialValues={snapshot}
      onSubmit={handleSubmit}
      validationSchema={fieldsValidation}
    >
      {formik => (
        <Form>
          <div className={classes.root}>
            <Stepper alternativeLabel className={classes.root} activeStep={ stepNumber } connector={<QontoConnector />}>
              {steps.map(({ props: {label}}, i) => (
                <Step key={i} completed={ isLastStep || stepNumber > i}>
                  <StepLabel classes={{ iconContainer: classes.iconContainer}} StepIconProps={{
                    classes: {
                      root: classes.icon,
                      completed: classes.completed,
                      active: classes.active,
                      text: classes.text
                    }
                  }} > { label } </StepLabel>
                </Step>
              ))}
            </Stepper>
            <div>
            </div>
          </div>
          {step}
          <div className="d-flex justify-content-between pt-4">
            <div>
              {stepNumber > 0 && (
                <Button
                  color="danger"
                  onClick={() => previous(formik.values)}
                >
                  <FormattedMessage id="GENERAL.BACK" />
                </Button>
              )}
            </div>
            <div>
              <Button
                disabled={formik.isSubmitting}
                type="submit"
                color="primary"
              >
                {isLastStep ? <FormattedMessage id="GENERAL.SAVE" /> :  <FormattedMessage id="GENERAL.NEXT" /> }
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}


export default Wizard
