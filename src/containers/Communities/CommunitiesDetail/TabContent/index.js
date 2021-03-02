
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({

  root: {
    width: '100%',
  },
  GridContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
}));

const TabContent = ({ communityDetailData }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSM = useMediaQuery(theme.breakpoints.down('sm'), {
    defaultMatches: true,
  });

  return (
    <List className={classes.root}>
      <Grid container direction={isSM ? "column" : "row"} justify="center" spacing={2}  >
        {
          communityDetailData.map((communityDetail, index) => {
            return (
              <Grid xs={isSM ? 12 : 6} item key={index}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      {communityDetail?.avatar}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={communityDetail.name} secondary={communityDetail?.role} />
                </ListItem>
              </Grid>
            )
          })
        }
      </Grid>
    </List>
  );
};

export default TabContent;
