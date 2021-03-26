
import React, { useState, memo, useCallback, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography } from '@material-ui/core';

import { useAllRules } from 'utils/hooks';
import { MemoizedOutlinedSelect } from 'components/UI/OutlinedSelect';
import { PERIOD } from 'constants/Types';
import ConsumerPrice from './ConsumerPrice';
import CurrencyPoll from './CurrencyPoll';
import IntercoinLoading from 'components/IntercoinLoading';
import { TAG_LIST } from 'constants/Types';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: theme.spacing(5)
    },
    tabHeader: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: theme.spacing(3)
    },
    gridContainer: {
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
        width: theme.spacing(118),
        marginBottom: theme.spacing(2)
    }
}));

const Currency = () => {
    const classes = useStyles();
    const theme = useTheme();
    const { allRoles, allRolesLoading } = useAllRules();

    const isSM = useMediaQuery(theme.breakpoints.down('sm'), {
        defaultMatches: true,
    });
    
    const [state, setState] = useState({
        period: '',
        role: '',
        tag: ''
    });

    const onSelectHandler = useCallback((value, name) => {
        setState(prevState => ({ ...prevState, [name]: value }));
    }, []);

    useEffect(() => {
        setState({
            period: PERIOD[0],
            role: allRoles && allRoles[1],
            tag: TAG_LIST[1]
        })
    }, [allRoles])

    return (
        <div className={classes.root} >
            <div className={classes.tabHeader} >
                <Typography variant='h4' style={{ fontWeight: 'bold' }}>Consumer Price Index</Typography>
            </div>
            <Grid classes={{ root: classes.gridContainer }} container direction={isSM ? "column" : "row"} justify="center" alignItems='center' spacing={1}>
                <Grid xs={isSM ? 12 : 6} container item justify={isSM ? "space-between" : 'center'} >
                    {isSM ? <Grid xs={isSM ? 6 : 2} container item alignItems='center' >
                        <Typography variant='h6' noWrap>Average spent</Typography>
                    </Grid> : null}
                    <Grid xs={isSM ? 1 : 5} container item alignItems='center' justify={isSM ? 'flex-start' : 'center'} >
                        <Typography variant='h6' noWrap> {isSM ? 'on' : 'Average spent on'} </Typography>
                    </Grid>
                    <Grid xs={5} item >
                        <MemoizedOutlinedSelect
                            name='role'
                            items={allRoles.filter(item => item) || []}
                            value={state.role || ''} />
                    </Grid>
                </Grid>
                <Grid xs={isSM ? 12 : 6} container item justify="space-between">
                    <Grid xs={6} container item >
                        <Grid item xs={4} container item alignItems='center'  >
                            <Typography variant='h6' noWrap>every  </Typography>
                        </Grid>
                        <Grid item xs={7} item>
                            <MemoizedOutlinedSelect
                                name='period'
                                items={PERIOD || []}
                                value={state.period}
                                onChange={onSelectHandler}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={1} container item alignItems='center'  >
                        <Typography variant='h6' noWrap>by </Typography>
                    </Grid>
                    <Grid xs={5} item  >
                        <MemoizedOutlinedSelect
                            name='tag'
                            value={state.tag}
                            items={TAG_LIST || []}
                            onChange={onSelectHandler}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <ConsumerPrice />
            <div className={classes.tabHeader} >
                <Typography variant='h4' style={{ fontWeight: 'bold' }} >Polls</Typography>
            </div>
            <CurrencyPoll />
            {allRolesLoading && <IntercoinLoading wholeOverlay />}
        </div>
    );
};

export default memo(Currency);
