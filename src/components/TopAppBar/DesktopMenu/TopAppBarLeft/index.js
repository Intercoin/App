
import { makeStyles } from '@material-ui/core/styles';

import LogoWithTitle from 'components/LogoWithTitle';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: `${theme.spacing(0)} !important`,
  }
}));

const TopAppBarLeft = ({ setOpen }) => {
  const classes = useStyles();

  return (
    <LogoWithTitle setOpen={setOpen} logoWidth={80} logoHeight={80} titleVariant={'h6'} className={classes.margin} />
  );
};

export default TopAppBarLeft;
