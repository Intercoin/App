
import React, { useEffect, useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { AppContext } from 'contexts';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import CardWrapper from 'hoc/CardWrapper';
import theme from 'styles/theme';
import SettingsIcon from '@material-ui/icons/Settings';
import InterCoinIcon from 'components/Icons/InterCoinIcon';
import CheckBoxIcon from 'components/Icons/CheckBoxIcon';
import OutlinedButton from 'components/UI/Buttons/OutlinedButton'
import IntercoinLoading from 'components/IntercoinLoading'

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(12)
    },
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  stepperRoot: {
    backgroundColor: theme.palette.background.main,
    padding: 0
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginRight: theme.spacing(2.5),
    marginTop: theme.spacing(1.5)
  },
  resetContainer: {
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.main,
  },
  commonButton: {
    [theme.breakpoints.down('sm')]: {
      minWidth: '100%'
    },
    backgroundColor: theme.palette.text.hoverText,

  }
}));

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: theme.palette.background.default,
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
});

const Currencies = () => {
  const classes = useStyles();
  const { account, setIsWalletDialog, active } = useContext(AppContext);
  const [stepLoading, setStepLoading] = useState(false);
  const [activeStep, setActiveStep] = React.useState(0);

  const getSteps = () => {
    return ['Get Started', 'Get the Tokens', 'Join the Community!'];
  }

  const steps = getSteps();

  const handleNext = (step) => {
    if (step) {
      setActiveStep(step)
    }
    else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const ColorlibStepIcon = (props) => {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
      1: <SettingsIcon style={{ width: 30, height: 30 }} />,
      2: <InterCoinIcon style={{ width: 40, height: 40 }} />,
      3: <CheckBoxIcon style={{ width: 40, height: 31 }} />,
    };

    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
          [classes.completed]: completed,
        })}
      >
        {icons[String(props.icon)]}
      </div>
    );
  }


  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return `You can just select your wallet.`;
      case 1:
        return `Once you have your tokens, you can request to be listed here as well.
         We are working on setting up an autonomous smart contract running on the EVM that will be able to facilitate buying and selling tokens without needing to find a counterparty using this over-the-counter market.`;
      case 2:
        return `Communities use the Intercoin Currency Kit to issue their own currency, and integrate it into their local
        Community Apps. Each community promotes their Community Coin internally to its members,
        until it is widely accepted in exchange for local goods and services. That network effect of
        being widely accepted is what makes the Community Coin valuable in the local community.
        `;
      default:
        return 'Unknown step';
    }
  }

  const getStepButtonName = (step) => {
    switch (step) {
      case 0:
        return `Connect My Wallet`;
      case 1:
        return 'Buy ITR Tokens';
      case 2:
        return `Create Account`;
      default:
        return 'Unknown step';
    }
  }

  const stepHandler = (step) => {
    switch (step) {
      case 0:
        setStepLoading(true);
        setIsWalletDialog(true);
      case 1:
        setStepLoading(true);
        getITRTokens();
      case 2:

        createAccount();
      // setStepLoading(true)
      default:
        return 'Unknown step';
    }
  }

  const getITRTokens = () => {
    handleNext();
    setStepLoading(false)
  }

  const createAccount = () => {
    setStepLoading(false);
    handleNext();
  }

  useEffect(() => {
    if (account && active === true) {
      setStepLoading(false)
      handleNext(1);
    }
  }, [account, active])

  return (
    <div className={classes.root}>
      <CardWrapper title={'Intercoin'}>
        <Stepper activeStep={activeStep} orientation="vertical" classes={{ root: classes.stepperRoot }}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                <Typography variant='h6'>{`${index + 1}. `}{label}</Typography>
              </StepLabel>
              <StepContent >
                {stepLoading && <IntercoinLoading wholeOverlay />}
                <Typography variant='body1'>{getStepContent(index)}</Typography>
                <div className={classes.actionsContainer}>
                  <OutlinedButton onClick={() => stepHandler(index)} className={classes.commonButton}>
                    <InterCoinIcon variant='contained' style={{ width: 32, height: 32, marginRight: 12 }} />
                    <Typography>{getStepButtonName(index)}</Typography>
                  </OutlinedButton>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography variant='h6'>All steps completed - you&apos;re successfully joined in the intercoin community!</Typography>
          </Paper>
        )}
      </CardWrapper>
    </div>
  );
};

export default Currencies;
