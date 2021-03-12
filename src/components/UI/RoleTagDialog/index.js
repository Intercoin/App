
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
import IntercoinLoading from 'components/IntercoinLoading';
import { useBlockNumber, useOwner } from 'utils/hooks';

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
  const blockNumber = useBlockNumber(library);
  const community = communityInstance(account, chainId, library);
  const owner = useOwner();
  const [state, setState] = useState({
    newRole: '',
    newTag: ''
  });
  const [allRoles, setAllRoles] = useState([]);
  const [ownRoles, setOwnRoles] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [createRole, setCreateRole] = useState(false);
  const [selectedId, setSelectedId] = useState([]);
  const [roleTagLoading, setRoleTagLoading] = useState(false);

  const selectHandler = (id) => {
    setSelectedId(id)
  }

  const clickHandler = () => {
    setCreateRole(true)
  }

  const creatNewHandler = () => {
    if (account) {
      if (title === 'Roles') {
        setRoleTagLoading(true)
        setCreateRole(false)
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
    const { name, value } = event.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  }, []);

  useEffect(() => {
    if (!isEmpty(account) && !isEmpty(community)) {
      setRoleTagLoading(true)
      Promise.resolve(community['getRoles(address)'](account)).then(function (ownRoles) {
        setOwnRoles(ownRoles)
        setRoleTagLoading(false)
      }).catch(function (error) {
        setRoleTagLoading(false)
        console.log('ownRoles===>', error)
      })
    }
  }, [])

  useEffect(() => {
    if (!isEmpty(account) && !isEmpty(community)) {
      Promise.resolve(community['getRoles()']()).then(function (allRoles) {
        setAllRoles(allRoles)
        setRoleTagLoading(false)
      }).catch(function (error) {
        setRoleTagLoading(false)
        console.log('getRolesError===>', error)
      })
    }
  }, [blockNumber])



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

  const titleFilter = (title) => {
    switch (title) {
      case 'Roles':
        return 'Role';
      case 'Tags':
        return 'Tag';
      default:
        return allRoles;
    }
  }

  return (
    <DialogWrapper open={open} onClose={onClose} isCheckIcon={!isEmpty(selectedId) ? true : false} smallWidth >
      {roleTagLoading && <IntercoinLoading wholeOverlay />}
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
                    <React.Fragment key={index}>
                      {!isEmpty(title) &&
                        <ListItem button style={{ marginBottom: 4 }} classes={{ selected: classes.selectedItem }}
                          key={index} onClick={() => selectHandler(index)} selected={ownRoles.includes(title)}>
                          <ListItemAvatar>
                            <Avatar src={'/assets/images/logos/victim-services_200w.png'} variant='square' />
                          </ListItemAvatar>
                          <ListItemText primary={title} />
                        </ListItem>
                      }
                    </React.Fragment>
                  )
                })}
              </>
            }
          </List>
        </DialogContent>
        <div className={classes.dialogActions}>
          {createRole
            ? <OutlinedButton onClick={creatNewHandler} className={classes.button}>+ Create {titleFilter(title)} </OutlinedButton>
            : owner === account && <OutlinedButton onClick={clickHandler} className={classes.button}>+ New {titleFilter(title)} </OutlinedButton>
          }
        </div>
      </form>
    </DialogWrapper>
  );
}

export default RoleTagDialog;
