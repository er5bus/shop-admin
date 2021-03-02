import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
  },
}));


const Chips = ({ label, handleDelete, choices }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        { (choices.length > 0 && label) && <Typography variant="caption">
          { label } :
        </Typography> }
        {
          choices.map((choice) => choice.label && (
            <Chip
              variant="outlined"
              size="small"
              label={choice.label}
              onDelete={() => handleDelete(choice.value)}
              className={classes.chip}
              color={ "secondary" }
            />
          ))
        }
      </div>
      { choices.length > 0 && <div class="separator separator-dashed my-5"></div> }
    </>
  );
}

export default Chips
