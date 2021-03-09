
import React, { useState, useCallback, useContext, useEffect } from 'react';
import { AppContext } from 'contexts';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import DialogWrapper from 'hoc/DialogWrapper';
import OutlinedButton from 'components/UI/Buttons/OutlinedButton';
import { MemoizedOutlinedTextField } from 'components/UI/OutlinedTextField';
import { isEmpty } from 'utils/utility';
import { communityInstance } from 'services/communityInstance';

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
  const { account, chainId, library } = useContext(AppContext);
  const community = communityInstance(account, chainId, library);
  const [state, setState] = useState({
    newRole: '',
    newTag: ''
  });
  const [allRoles, setAllRoles] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [createRole, setCreateRole] = useState(false);
  const [selectedId, setSelectedId] = useState([]);

  const selectHandler = (id) => {
    setSelectedId(id)
  }

  const clickHandler = () => {
    setCreateRole(true)

  }

  const creatNewHandler = () => {
    if (account) {
      if (title === 'Roles') {
        community.createRole(state.newRole)
      }
      else {
        console.log('kevin===>TagAdd')
        // TODO kevin community.createTag(state.newTag) 
      }
    }
  }

  const onFormSubmit = async (ev) => {
    ev.preventDefault()
    onClose();
  }

  const inputChangeHandler = useCallback(event => {
    console.log('kevin')
    const { name, value } = event.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  }, []);

  useEffect(() => {
    if (!isEmpty(account) && !isEmpty(community)) {
      Promise.resolve(community['getRoles()']()).then(function (allRoles) {
        setAllRoles(allRoles)
      }).catch(function (error) {
        console.log('getRolesError===>', error)
      })
    }
  }, [])

  const filterLists = (title) => {
    switch (title) {
      case 'Roles':
        return allRoles;
      case 'Tags':
        return allTags;
      default:
        return allRoles;
    }
  }

  return (
    <DialogWrapper open={open} onClose={onClose} isCheckIcon={!isEmpty(selectedId) ? true : false} smallWidth >
      <form onSubmit={onFormSubmit} >
        <Typography variant='h6' className={classes.titleLine}>{title}</Typography>
        <DialogContent dividers className={classes.dialogContent}>
          <List className={classes.listContainer}>
            {createRole ?
              <ListItem>
                {title === 'Roles'
                  ? <MemoizedOutlinedTextField
                    placeholder='Enter title of Role'
                    name='newRole'
                    value={state.newRole}
                    onChange={inputChangeHandler}
                  />
                  : <MemoizedOutlinedTextField
                    placeholder='Enter title of Tag'
                    name='newTag'
                    value={state.newTag}
                    onChange={inputChangeHandler}
                  />
                }
              </ListItem>
              :
              <>
                {filterLists(title).map((title, index) => {

                  return (
                    <ListItem button classes={{ selected: classes.selectedItem }}
                      key={index} onClick={() => selectHandler(index)} selected={index === selectedId}>
                      <ListItemAvatar>
                        <Avatar src={'/assets/images/logos/victim-services_200w.png'} variant='square' />
                      </ListItemAvatar>
                      <ListItemText primary={title} />
                    </ListItem>
                  )
                })}
              </>
            }
          </List>
        </DialogContent>
        <div className={classes.dialogActions}>
          {createRole
            ? <OutlinedButton onClick={creatNewHandler} className={classes.button}>+ Create {title === 'Roles' ? 'Role' : 'Tag'} </OutlinedButton>
            : <OutlinedButton onClick={clickHandler} className={classes.button}>+ New {title === 'Roles' ? 'Role' : 'Tag'} </OutlinedButton>
          }
        </div>
      </form>
    </DialogWrapper>
  );
}

export default RoleTagDialog;
