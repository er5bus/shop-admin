import React from "react"
import { makeStyles, withStyles } from "@material-ui/core/styles"
import MuiAccordion from "@material-ui/core/Accordion"
import MuiAccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  details: {
    display: "block"
  },
}))

const AccordionMui = withStyles({
  root: {
    width: "100%",
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none !important",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion)

const AccordionSummaryMui = withStyles({
  root: {
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary)



const Accordion = ({ title, children }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AccordionMui>
        <AccordionSummaryMui
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{ title }</Typography>
        </AccordionSummaryMui>
        <AccordionDetails className={classes.details}>
          { children }
        </AccordionDetails>
      </AccordionMui>
    </div>
  )
}


export default Accordion
