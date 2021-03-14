
import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { generateFromString } from 'generate-avatar'

import OutlinedButton from 'components/UI/Buttons/OutlinedButton';
import MemberDetailDialog from 'components/UI/MemberDetailDialog';
// TODO should be changed reall image or icon

import { PAGES } from 'utils/links/pages';

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
    tabHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    button: {
        backgroundColor: theme.custom.palette.green
    }
}));

const People = ({ communityDetailData, index }) => {

    const classes = useStyles();
    const theme = useTheme();
    const isSM = useMediaQuery(theme.breakpoints.down('sm'), {
        defaultMatches: true,
    });

    const [memberDetailData, setMemberDetailData] = useState()

    const listClickHandler = (communityDetail) => {
        setMemberDetailData(communityDetail)
    }

    const closeHandler = () => {
        setMemberDetailData('')
    }

    return (
        <div>
            <div className={classes.tabHeader} >
                <Typography variant='body1'>{communityDetailData.length} members</Typography>
                <OutlinedButton className={classes.button}>+ Invite </OutlinedButton>
            </div>
            <List className={classes.root}>
                <Grid container direction={isSM ? "column" : "row"} justify="center" spacing={2}  >
                    {
                        communityDetailData.map((communityDetail, index) => {
                            return (
                                <Grid xs={isSM ? 12 : 6} item key={index} style={{ cursor: 'pointer' }} >
                                    <ListItem onClick={() => listClickHandler(communityDetail, index)}>
                                        <ListItemAvatar>
                                            <Avatar src={`data:image/svg+xml;utf8,${generateFromString(communityDetail.account)}`}>
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
            {memberDetailData && <MemberDetailDialog onClose={closeHandler} communityDetail={memberDetailData} />}
        </div>
    );
};

export default People;
