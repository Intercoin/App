
import React, { useEffect, useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from 'contexts';
import { withRouter } from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from 'components/Icons/CloseIcon';
import TextField from '@material-ui/core/TextField';
import { formatEther } from '@ethersproject/units'
import Drawer from '@material-ui/core/Drawer';

import CardWrapper from 'hoc/CardWrapper';
import IntercoinAvatarBox from 'components/IntercoinAvatarBox';
import IntercoinTabContainer from 'components/IntercoinTabContainer';
import WalletDetailLogo from 'components/WalletDetailLogo';
import Asset from './Asset';
import Transaction from './Transaction';
import { transactionData } from 'utils/helper/mockupData';
import { isEmpty } from 'utils/utility';
import { WalletDetailTabList } from 'constants/InterCoinTabList';

const drawerWidth = 360;
const useStyles = makeStyles(theme => ({
    root: {
        height: '100%'
    },
    container: {
        [theme.breakpoints.down('sm')]: {
            padding: 0
        },
        display: 'flex',
        margin: -8,
        flexGrow: 1,
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    additionalGrid: {
        width: drawerWidth - theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
        [theme.breakpoints.down('md')]: {
            margin: theme.spacing(0, 2.5, 0, 4),
        },
        margin: theme.spacing(0, 7.5, 0, 4),
        // padding: `${theme.spacing(-4, 0, -4, 0)} !important`
    },
    card: {
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        width: "100%",
        marginRight: theme.spacing(3),
        minHeight: `calc(100vh - ${theme.custom.layout.topAppBarHeight + theme.custom.layout.footerHeight + theme.custom.layout.topAppBarHeight}px)`,
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: 'pointer',
        borderRadius: 20,
        borderColor: 'red',
        boxShadow: `0 1px 6px 0 ${theme.palette.text.notification}`,
        padding: theme.spacing(1.5)
    },
    input: {
        width: 'calc(100% - 45px)',
        borderRadius: theme.spacing(.3),
        '& .MuiOutlinedInput-multiline': {
            padding: theme.spacing(1),
            color: theme.palette.text.primary,
        }
    },
    send: {
        cursor: 'pointer',
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: theme.spacing(1),
        color: theme.palette.text.hoverText
    },
    chatActionContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardHeader: {
        borderBottom: '0.5px solid #fff'
    }
}));

const WalletDetail = ({ history }) => {
    const classes = useStyles();
    const { account, chainId, setLoadingInfo, setIsWalletDialog, balance, connector } = useContext(AppContext);
    const [filterValue, setFilterValue] = useState(0);
    const ethBalance = balance && formatEther(balance);

    const gettingWalletLogo = (connector) => {
        switch (connector.constructor.name) {
            case 'InjectedConnector':
                return { logo: '/assets/images/connectors/TrustWallet.png', title: 'Trust Wallet' }
        }
    }

    const tabContentFilter = (tabId) => {
        switch (tabId) {
            case 0:
                return (
                    <Asset
                        account={account}
                    />);
            case 1:
                return (
                    <Transaction
                        account={account}
                    />);
        }
    }

    return (
        <>
            <div className={classes.root}>
                <CardWrapper >
                    <div>
                        <Grid container spacing={2} className={classes.container} >
                            <WalletDetailLogo
                                ethBalance={ethBalance}
                                account={account}
                                chainId={chainId}
                                setIsWalletDialog={setIsWalletDialog}
                                walletInfo={gettingWalletLogo(connector)}
                            />
                            <IntercoinTabContainer
                                setFilterValue={setFilterValue}
                                TabList={WalletDetailTabList}
                            />
                            {tabContentFilter(filterValue)}
                        </Grid>
                    </div>
                </CardWrapper>
            </div>
        </>
    );
};

export default withRouter(WalletDetail);
