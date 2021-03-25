import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2),
    },
    height: theme.spacing(4),
    width: '100%',
    // width: 320 + theme.spacing(3) * 2,
    marginLeft: theme.spacing(1)
  },
  minMaxContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
  },
  minMaxValue: {
    display: 'flex',
    flexDirection: 'row'
  }
}));

function valuetext(value) {
  return `${value}`;
}

const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
    '&:MuiSlider-marked': {
      height: '100px'
    }
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
  mark: {
    backgroundColor: '#fff',
    height: 14,
    width: 2,
    marginTop: -3,
  },
})(Slider);

const CustomSlider = ({ from, to, value, marksList }) => {
  const classes = useStyles();
  const marks = [{ value }]

  return (
    <>
      <div className={classes.root}>
        <PrettoSlider
          min={from}
          max={to}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          marks={marksList ? marksList : marks}
          step={0.1}
          aria-label="pretto slider"
          defaultValue={value || 0}
          aria-labelledby="discrete-slider-always"
        />
        <div className={classes.minMaxContainer}>
          <div className={classes.minMaxValue}>
            <Typography color='textSecondary' variant='subtitle2'>{from?.toFixed(1)} </Typography>
          </div>
          <div className={classes.minMaxValue}>
            <Typography color='textSecondary' variant='subtitle2'>{to?.toFixed(1)} </Typography>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomSlider;
