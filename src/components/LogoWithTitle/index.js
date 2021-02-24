
import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { AppContext } from 'contexts';
import Hidden from '@material-ui/core/Hidden';

import Logo from 'components/Logo';
import { PAGES } from 'utils/links/pages';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      padding: 4,
    },
    display: 'flex',
    alignItems: 'center',
    // paddingRight: theme.spacing(2),
    '&:hover': {
      cursor: 'pointer'
    },
  },
  logo: {
    [theme.breakpoints.down('xs')]: {
      marginRight: theme.spacing(.2)
    },
    marginRight: theme.spacing(1.5)
  },
  height: {
    height: '100%'
  },
}));

const LogoWithTitle = ({ setOpen, history, logoWidth, logoHeight, titleVariant, className }) => {
  const classes = useStyles();
  const { setTopAppMenu } = useContext(AppContext);
  const onClickHander = () => {
    history.push(PAGES.HOME);
    setTopAppMenu('');
    setOpen(false)
  }

  return (
    <div onClick={onClickHander} className={clsx(classes.root, className)}>
      <Logo className={classes.logo} width={logoWidth} height={logoHeight} />
      <Hidden smDown implementation='css' className={classes.height}>
        <Typography color='textPrimary' variant={titleVariant}>
          Intercoin
      </Typography>
      </Hidden>
    </div>
  );
};

export default withRouter(LogoWithTitle);
