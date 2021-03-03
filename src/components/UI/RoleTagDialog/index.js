
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import DialogWrapper, { dialogStyles } from 'hoc/DialogWrapper';
import OutlinedButton from 'components/UI/Buttons/OutlinedButton';
import { isEmpty } from 'utils/utility';

const useStyles = makeStyles(theme => ({
  dialogActions: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(3),
    marginRight: -theme.spacing(2 / 8)
  },
  titleLine: {
    marginBottom: theme.spacing(2.5)
  },
  dialogContent: {
    [theme.breakpoints.down('xs')]: {
      maxHeight: '340px',
    },
    maxHeight: '460px',
    overflowX: 'unset',
    overflowY: 'scroll',
    '&::-webkit-scrollbar-track': {
      borderRadius: 2,
      backgroundColor: theme.palette.background.default
    },
    '&::-webkit-scrollbar': {
      width: 5,
      backgroundColor: theme.palette.background.default
    },
    padding: theme.spacing(1, .5, 0, .5),

  },
  sliderContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // height: theme.spacing(18)
  },
  button: {
    backgroundColor: theme.custom.palette.green
  },
  selectedItem: {
    border: `0.5px solid ${theme.palette.text.hoverText}`,
    borderRadius: '10px'
  }
}));

const RoleTagDialog = ({ dataList, open, onClose, title }) => {
  const classes = useStyles();
  const dialogClasses = dialogStyles();

  const [selectedId, setSelectedId] = useState([]);

  const onFormSubmit = async (ev) => {
    ev.preventDefault()
    onClose();
  }

  const selectHandler = (id) => {
    setSelectedId(id)
  }

  return (
    <DialogWrapper open={open} onClose={onClose} isCheckIcon={!isEmpty(selectedId) ? true : false} smallWidth >
      <form onSubmit={onFormSubmit} >
        <Typography variant='h6' className={classes.titleLine}>{title}</Typography>
        <DialogContent dividers className={classes.dialogContent}>
          <List className={classes.listContainer}>
            {dataList.map((data, index) => {

              return (
                <ListItem button classes={{ selected: classes.selectedItem }}
                  key={index} onClick={() => selectHandler(index)} selected={index === selectedId}>
                  <ListItemAvatar>
                    <Avatar src={data?.image} variant='square' />
                  </ListItemAvatar>
                  <ListItemText primary={data.title} />
                </ListItem>
              )
            })}
          </List>
        </DialogContent>
        <div className={classes.dialogActions}>
          <OutlinedButton className={classes.button}>+ New {title} </OutlinedButton>
        </div>
      </form>
    </DialogWrapper>
  );
}

export default RoleTagDialog;
