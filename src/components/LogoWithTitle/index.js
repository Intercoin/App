
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

import Logo from 'components/Logo';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    paddingRight: theme.spacing(2)
  },
  logo: {
    marginRight: theme.spacing(1.5)
  }
}));

const LogoWithTitle = ({ logoWidth, logoHeight, titleVariant, className }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <Logo className={classes.logo} width={logoWidth} height={logoHeight} />
      <Typography color='textPrimary' variant={titleVariant}>
        InterCoin
      </Typography>
    </div>
  );
};

export default LogoWithTitle;
