

import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
  root: {
    width: 33,
    height: 28
  }
}));

const LabelIcon = ({ className, viewBox, color, ...rest }) => {
  const classes = useStyles();
  return (
    <SvgIcon x="0px" y="0px" style="enableBackground:new 0 0 40.337 40.337;" viewBox={viewBox || "0 0 40.337 40.337"} {...rest} className={clsx(classes.root, className)}>
      <g>
        <path  d="M15.321,40.199h0.006c0.164,0,0.319-0.063,0.437-0.178l24.194-23.604
		c0.112-0.11,0.178-0.259,0.185-0.418l0.193-4.015c0.007-0.174-0.058-0.345-0.178-0.467L29.238,0.326
		C29.11,0.192,28.921,0.123,28.73,0.14l-4.263,0.418c-0.142,0.015-0.274,0.076-0.375,0.175L0.188,24.06
		C0.069,24.176,0.002,24.332,0,24.499s0.061,0.324,0.178,0.443L14.879,40.01C14.994,40.13,15.15,40.197,15.321,40.199z M24.81,1.782
		l3.742-0.367l10.521,10.782l-0.166,3.498L15.339,38.691L1.51,24.518L24.81,1.782z"/>
        <path  d="M29.587,15.192c1.109,0,2.16-0.428,2.959-1.204c1.669-1.633,1.701-4.318,0.072-5.986
		c-0.805-0.824-1.882-1.278-3.033-1.278c-1.109,0-2.16,0.428-2.959,1.204c-1.666,1.632-1.697,4.316-0.07,5.984
		C27.359,14.738,28.435,15.192,29.587,15.192z M27.5,8.823c0.562-0.548,1.304-0.85,2.085-0.85c0.811,0,1.57,0.32,2.139,0.901
		c1.148,1.177,1.125,3.069-0.052,4.218c-0.542,0.528-1.282,0.819-2.083,0.819c-0.82-0.001-1.599-0.318-2.137-0.871
		C26.304,11.863,26.325,9.971,27.5,8.823z"/>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
    </SvgIcon>
  );
}

export default LabelIcon;
