
import { AppContext } from 'contexts';
import React, { useState, useContext } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Jdenticon from 'react-jdenticon';

import OutlinedButton from 'components/UI/Buttons/OutlinedButton';
import MemberDetailDialog from 'components/UI/MemberDetailDialog';
import InviteDialog from 'components/UI/InviteDialog';
import { communityInstance } from 'services/communityInstance';
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
    },
    avatarContainer: {
        backgroundColor: 'transparent'
    }
}));

const People = ({ communityDetailData, index }) => {

    const classes = useStyles();
    const { account, chainId, library } = useContext(AppContext);
    const [isInviteDialog, setIsInviteDialog] = useState(false);
    const community = communityInstance(account, chainId, library);
    const theme = useTheme();
    const isSM = useMediaQuery(theme.breakpoints.down('sm'), {
        defaultMatches: true,
    });

    const [memberDetailData, setMemberDetailData] = useState();

    const listClickHandler = (communityDetail) => {
        setMemberDetailData(communityDetail)
    }

    const closeHandler = () => {
        setMemberDetailData('')
        setIsInviteDialog(false)
    }

    const inviteHandler = () => {
        setIsInviteDialog(true);
        // const amountETHSendToContract = 2 * 100000000000000;
        // const parameters = [
        //     {
        //       gasLimit: "0x2710",
        //       from:  '0x48631372F83B65387F84018F68B1ADf536Be17AD',
        //       to:  '0xf52A555198604FD0A515868976B7f660b6dc9e38',
        //       value: `${amountETHSendToContract}`,
        //       data: "0x1"
        //     }
        //   ];
        //   const payload = {
        //     method: "eth_sendTransaction",
        //     params: parameters,
        //     from: '0x48631372F83B65387F84018F68B1ADf536Be17AD'
        //   };

        //   library.provider.sendAsync(payload, function(
        //     err,
        //     response
        //   ) {
        //     if (err) {
        //       console.log(err);
        //     } else {
        //       console.log(response.result);
        //     }
        //   });
    }

    return (
        <div>
            <div className={classes.tabHeader} >
                <Typography variant='body1'>{communityDetailData.length} members</Typography>
                <OutlinedButton onClick={inviteHandler} className={classes.button}>+ Invite </OutlinedButton>
            </div>
            <List className={classes.root}>
                <Grid container direction={isSM ? "column" : "row"} justify="center" spacing={2}  >
                    {
                        communityDetailData.map((communityDetail, index) => {
                            return (
                                <Grid xs={isSM ? 12 : 6} item key={index} style={{ cursor: 'pointer' }} >
                                    <ListItem button onClick={() => listClickHandler(communityDetail, index)}>
                                        <ListItemAvatar>
                                            <Avatar classes={{ colorDefault: classes.avatarContainer }} variant='square'>
                                                <Jdenticon size="40" value={communityDetail.account} />
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
            {isInviteDialog && <InviteDialog open={true} onClose={closeHandler} />}
        </div>
    );
};

export default People;
