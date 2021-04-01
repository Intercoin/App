
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import clsx from 'clsx';

import CustomSlider from 'components/UI/CustomSlider';
import OutlinedButton from 'components/UI/Buttons/OutlinedButton';
import { MARK_LIST } from 'constants/Types';

const useStyles = makeStyles(theme => ({
    root: {},
    card: {
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        width: "100%",
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: 20,
        borderColor: 'red',
        boxShadow: `0 1px 6px 0 ${theme.palette.text.notification}`,
        '&:hover': {
            // transform: 'translateY(-5px)',
            // transition: `ease-out 0.4s `,
            boxShadow: `0 1px 6px 0 ${theme.palette.text.primary}`,
            opacity: '100%'
        },
        transition: 'ease-out 0.4s',
    },
    cardHeader: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '50%',
    },
    selected: {
        backgroundColor: theme.palette.background.main
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: theme.spacing(2, 2, 4, 2),

    },
    button: {
        backgroundColor: theme.custom.palette.green
    },
}));

const VoteCard = ({ VoteInfo }) => {
    const classes = useStyles({});

    return (
        <Grid item xs={12}>
            <Card className={classes.card}>
                <CardContent >
                    <Typography variant={'h6'} style={{ fontWeight: 300 }}>{VoteInfo.content}</Typography>
                </CardContent >
                <CardActions classes={{ root: classes.cardActions }}>
                    <div style={{ width: '90%', marginRight: 20 }}>
                        <CustomSlider marksList={MARK_LIST} />
                    </div>
                    <OutlinedButton className={classes.button}>Vote </OutlinedButton>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default VoteCard;
