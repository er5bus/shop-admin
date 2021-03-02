import React from "react"

import Typography from "@material-ui/core/Typography"

import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Avatar from "@material-ui/core/Avatar"
import Divider from "@material-ui/core/Divider"

//import ReactHtmlParser from 'react-html-parser'

import { isRLTLang } from "./../../../../i18n"


const useStyles = makeStyles(theme => ({
  list: {
    width: "100%",
    backgroundColor: "#fff",
  },
  item: {
    backgroundColor: "#fff",
    paddingLeft: "0px",
    paddingRight: "0px",
  },
  icon: {
    color: "#3699FF",
    backgroundColor: "transparent",
    border: "2px solid #3699FF"
  },
  iconSeparator: {
    marginLeft: "56px"
  },
  textSeparator: {
    marginLeft: "0px"
  },
  direction: {
    textAlign: isRLTLang() ? "right" : "left",
    margin: "0px",
  },
  text: {
    paddingBottom: ".4rem"
  },
  primary: {
    display: "inline",
    color: "#7E8299",
    fontSize: "1rem",
  },
  secondary: {
    display: "inline",
    color: "#000000",
    fontSize: "1rem",
  }
}))


const DisplayItem = ({ primary, secondary, html=false, icon }) => {

  const classes = useStyles()
  const Icon = icon

  return (
    <List className={classes.list}>
      <ListItem className={classes.item}>
        { Icon && <ListItemAvatar>
          <Avatar className={classes.icon}>
            <Icon />
          </Avatar>
        </ListItemAvatar>
        }
        <ListItemText primaryTypographyProps={{ classes: { root: classes.text } }} className={classes.direction} primary={
          <React.Fragment>
            <Typography
              component="span"
              className={classes.primary}
            >
              { primary }
            </Typography>
          </React.Fragment>
          } secondary={
            <Typography
              component="span"
              className={classes.secondary}
            >
              { html && <div dangerouslySetInnerHTML={{__html: secondary }} />  }
              { !html && secondary }
            </Typography>
          } />
      </ListItem>
      <Divider className={Icon ? classes.iconSeparator : classes.textSeparator} variant="inset" component="li" />
    </List>
  )
}


export default DisplayItem
