
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import makeBlockie from 'ethereum-blockies-base64';
import Avatar from '@material-ui/core/Avatar';
import { useQuery } from 'react-query';
import { formatEther } from '@ethersproject/units'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import { API_KEY, ITR_CONTRACT_ADDRESS } from 'constants/common';
import { ethScan } from 'services/ethScan';
import { conversionToDollar } from 'services/conversion';
import IntercoinImage from 'components/IntercoinImage';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        width: '100%',
        minHeight: '100%',
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    CurrencyLogo: {
        width: theme.spacing(5),
        height: theme.spacing(5)

    }
}));

const Asset = ({ account }) => {
    const classes = useStyles();

    const ethParams = {
        module: 'account',
        action: 'balance',
        address: account,
        tag: 'latest',
        apikey: API_KEY
    }

    const params = {
        fsym: 'ETH',
        tsyms: 'USD'
    };

    const itrTokenParams = {
        module: 'account',
        action: 'tokenbalance',
        contractaddress: ITR_CONTRACT_ADDRESS,
        address: account,
        tag: 'latest',
        apikey: API_KEY
    }

    const { data: conversionCurrency, isLoading: pageLoading } = useQuery(['conversionUSD'],
        () => conversionToDollar({ params }));

    const { data: ethBalance, isLoading: loading } = useQuery(['account-info'],
        () => ethScan(ethParams));

    const { data: tokenBalance, isLoading: tokenLoading } = useQuery(['account-token-info'],
        () => ethScan(itrTokenParams));

    const accountETH = ethBalance && formatEther(ethBalance.data.result);
    const accountITR = tokenBalance?.data.result || 0;

    return (
        <div className={classes.root}>
            <ListItem key={20} button>
                <ListItemAvatar>
                    <Avatar
                        className={classes.CurrencyLogo}
                        variant='square'
                        src={'/assets/images/CurrencyIcon.webp'}
                    />
                </ListItemAvatar>
                <ListItemText id={1} primary={`1 ⬨/$`} />
                <ListItemText id={2} style={{ display: 'flex', justifyContent: 'center' }} primary={conversionCurrency?.data.USD} />
                <ListItemText style={{ display: 'flex', justifyContent: 'flex-end' }} id={3} primary={`(USD)`} />
            </ListItem>

            <ListItem key={21} button>
                <ListItemAvatar>
                    <Avatar
                        className={classes.CurrencyLogo}
                        src={'/assets/images/EthereumIcon.png'}
                    />
                </ListItemAvatar>
                <ListItemText id={4} primary={`ETH`} />
                <ListItemText id={5} style={{ display: 'flex', justifyContent: 'center' }} primary={accountETH} />
                <ListItemText style={{ display: 'flex', justifyContent: 'flex-end' }} id={6} primary={`(ETH)`} />
            </ListItem>

            <ListItem key={23} button>
                <ListItemAvatar>
                    <Avatar
                        className={classes.CurrencyLogo}
                        src={'/assets/images/USDIcon.png'}
                    />
                </ListItemAvatar>
                <ListItemText id={7} primary={`USD`} />
                <ListItemText id={8} style={{ display: 'flex', justifyContent: 'center' }} primary={conversionCurrency?.data.USD * accountETH || 0} />
                <ListItemText style={{ display: 'flex', justifyContent: 'flex-end' }} id={9} primary={`(USD)`} />
            </ListItem>

            <ListItem key={24} button>
                <ListItemAvatar>
                    <Avatar
                        className={classes.CurrencyLogo}
                        src={'/assets/images/intercoinTokenLogo.png'}
                    />
                </ListItemAvatar>
                <ListItemText id={10} primary={`ITR`} />
                <ListItemText id={11} style={{ display: 'flex', justifyContent: 'center' }} primary={accountITR} />
                <ListItemText style={{ display: 'flex', justifyContent: 'flex-end' }} id={12} primary={`(ITR)`} />
            </ListItem>
        </div>
    );
};

export default Asset;
