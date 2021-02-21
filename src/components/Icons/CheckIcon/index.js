import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
  root: {
    width: 8,
    height: 8
  }
}));

const CheckIcon = ({className, viewBox, color, ...rest}) => {
  const classes = useStyles();
  return (
    <SvgIcon viewBox={viewBox || "0 0 8 8"} {...rest} className={clsx(classes.root, className)}>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-867.000000, -326.000000)" fill={color || "#FFFFFF"} fillRule="nonzero">
          <path d="M868.399787,329.332778 C868.233945,329.111982 867.920513,329.067433 867.699716,329.233275 C867.47892,329.399117 867.434371,329.712549 867.600213,329.933345 L869.821809,332.891099 C870.016155,333.149844 870.401366,333.15862 870.607294,332.908993 L874.841657,327.776059 C875.017381,327.563044 874.987151,327.247908 874.774136,327.072183 C874.561121,326.896459 874.245985,326.926689 874.070261,327.139704 L870.240003,331.782777 L868.399787,329.332778 Z"></path>
        </g>
      </g>
    </SvgIcon>
  );
}

export default CheckIcon;
