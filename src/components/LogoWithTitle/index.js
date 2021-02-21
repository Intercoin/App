
import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { AppContext } from 'contexts';

import Logo from 'components/Logo';
import { PAGES } from 'utils/links/pages';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: theme.spacing(2),
    '&:hover': {
      cursor: 'pointer'
    },
  },
  logo: {
    marginRight: theme.spacing(1.5)
  }
}));

const LogoWithTitle = ({ setOpen, history, logoWidth, logoHeight, titleVariant, className }) => {
  const classes = useStyles();
  const { setTopAppMenu } = useContext(AppContext);
  const onClickHander = () => {
    history.push(PAGES.Home);
    setTopAppMenu('');
    setOpen(false)
  }

  return (
    <div onClick={onClickHander} className={clsx(classes.root, className)}>
      <Logo className={classes.logo} width={logoWidth} height={logoHeight} />
      <Typography color='textPrimary' variant={titleVariant}>
        Intercoin
      </Typography>
    </div>
  );
};

export default withRouter(LogoWithTitle);
