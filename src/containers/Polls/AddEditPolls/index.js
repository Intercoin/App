import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CloseIcon from '@material-ui/icons/Close';

import CardWrapper from 'hoc/CardWrapper';
import { MemoizedOutlinedTextField } from 'components/UI/OutlinedTextField';
import ContainedButton from 'components/UI/Buttons/ContainedButton';
import OptionDialog from 'components/UI/OptionDialog';
import { PAGES } from 'utils/links/pages';
import { poolData, optionData } from 'utils/helper/mockupData';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  GridContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  listContainer: {
    width: '100%',
    // backgroundColor: theme.palette.primary.darkLight,
    backgroundColor: theme.palette.background.main,
  },
  listItem: {
    '&:hover': {
      transform: 'translateX(-2px)',
      transition: `ease-out 0.4s `,
      opacity: '100%'
    },
    transition: 'ease-out 0.4s',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(4)
  },
  saveButton: {
    marginTop: theme.spacing(4),
    display: 'flex',
    justifyContent: 'flex-end'
  },
  twoInputs: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: 100,
  },
  radioGroupContainer: {
    display: 'flex',
    width: '100%'

  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(2, 0, 2, 0),
    '&:hover': {
      cursor: 'pointer',
      transform: 'translateY(-2px)',
      opacity: '100%',
      color: theme.palette.text.secondary,
      transform: 'translateY(-1px)'
    },
    transition: 'ease-out 0.3s',
  },
  closeIcon: {
    color: '#555e6c',
    '&:hover': {
      cursor: 'pointer',
      opacity: '100%',
      color: theme.custom.palette.darkRed,
    },
    transition: 'ease-out 0.3s',
  }
}));

const AddEditPolls = ({ history, location, match }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState('1');
  const [isDialog, setIsDialog] = useState();
  const isAdd = match.params._id === 'new';

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const submitHandler = () => {
  }
  const goBack = () => {
    history.push({
      pathname: PAGES.POLLS,
      state: {
        currentPage: (location.state || {}).currentPage
      }
    });
  };
  const openCloseDialogHandler = show => () => {
    setIsDialog(show);
  }

  const dialogHander = () => {
    setIsDialog(true);
  }

  const optionEditHandler = () => {
  }

  return (
    <CardWrapper center title={isAdd ? 'Create New Poll' : 'Edit Poll'} >
      <div className={classes.root}>
        <Grid container className={classes.GridContainer} spacing={3} >
          <Grid md={8} xs={12} item>
            <MemoizedOutlinedTextField
              value={isAdd ? '' : poolData[match.params._id].title}
              placeholder='Enther title of poll' />
            <Typography onClick={dialogHander} className={classes.titleContainer} component='div' variant='h6'>
              <AddCircleOutlineIcon style={{ marginRight: 4 }} />
                Add Option
             </Typography>
            <List className={classes.listContainer}>
              {optionData.map((option, index) => {

                return (
                  <ListItem className={classes.listItem} key={index} dense button onClick={() => optionEditHandler(value)}>
                    <ListItemIcon>
                      <CheckCircleOutlineIcon style={{ color: '#16ACE2' }} />
                    </ListItemIcon>
                    <ListItemText primary={`${option.content}`} />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="close">
                        <CloseIcon className={classes.closeIcon} fontSize='small' />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                )
              })
              }
            </List>
          </Grid>
        </Grid>
        <div className={classes.saveButton}>
          <ContainedButton
            variant='outlined'
            disabled={''}
            onClick={goBack}>
            BACK
        </ContainedButton>
          <ContainedButton
            disabled={''}
            onClick={submitHandler}>
            CREATE POLL
        </ContainedButton>
        </div>
      </div>
      {
        isDialog &&
        <OptionDialog
          headerTitle={'Please enter your question!'}
          open={true}
          onClose={openCloseDialogHandler(false)}
        />
      }
    </CardWrapper>
  );
};

export default withRouter(AddEditPolls);