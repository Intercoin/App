
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
  root: {
    width: 29,
    height: 28,
  }
}));

const CurrenciesIcon = ({ className, viewBox, color, ...rest }) => {
  const classes = useStyles();
  return (
    <SvgIcon x="0px" y="0px" viewBox={viewBox || "0 0 110.26 122.88"}  {...rest} className={clsx(classes.root, className)}>
      ><g><path d="M89.43,45.54c3.38-1,6.39-2.61,8.84-4.65c4.02-3.35,6.5-7.9,6.5-12.87c0-2.78-0.77-5.42-2.15-7.78l0.01,0 c-0.62-1.06-1.36-2.07-2.21-3.01c-0.44,6.2-1.96,12.08-4.34,17.43C94.32,38.61,92.07,42.27,89.43,45.54L89.43,45.54L89.43,45.54z M56.4,91.21l2.83,7.93l8.42,0.24l-6.67,5.14l2.37,8.08l-6.95-4.76l-6.95,4.76l2.37-8.08l-6.67-5.14l8.42-0.24L56.4,91.21 L56.4,91.21z M20.63,80.94h71.55v41.94H20.63V80.94L20.63,80.94z M60.73,60.07v6.55h0.49v4.58l-12.42,0v-4.58l0.49,0v-6.59 c-7.57-1.17-14.49-4.59-20.14-9.59l-0.67,1.85c-7.79-0.13-14.84-2.82-19.95-7.08C3.26,40.83,0,34.75,0,28.01 c0-3.8,1.05-7.4,2.93-10.63l-0.01-0.01c1.9-3.27,4.66-6.13,8.03-8.37L14,6.97l-3.53,0V0h88.61v6.97h-2.82L99.31,9 c3.36,2.24,6.11,5.1,8.02,8.37h0.01c1.87,3.22,2.92,6.82,2.92,10.64c0,6.74-3.26,12.81-8.54,17.21 c-5.11,4.26-12.16,6.95-19.95,7.08l-0.67-1.86C75.39,55.5,68.39,58.94,60.73,60.07L60.73,60.07L60.73,60.07z M42.16,75.79h25.71 v4.58H42.16V75.79L42.16,75.79z M46.08,71.2h17.87v4.58H46.08V71.2L46.08,71.2z M11.99,40.89c2.45,2.05,5.47,3.65,8.85,4.66 c-2.64-3.27-4.89-6.93-6.66-10.9c-2.38-5.34-3.9-11.23-4.34-17.43c-0.83,0.92-1.57,1.94-2.2,3.01l-0.01,0 c-1.37,2.35-2.14,5-2.14,7.78C5.49,32.99,7.97,37.53,11.99,40.89L11.99,40.89z" /></g>
    </SvgIcon>
  )
};

export default CurrenciesIcon;