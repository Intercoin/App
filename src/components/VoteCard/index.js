
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

const useStyles = makeStyles(theme => ({
    root: {},
    card: {
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        width: "100%",
        flexDirection: 'column',
        justifyContent: 'center',
        cursor: 'pointer',
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
    badgeBackgroundColor: {
        // backgroundColor: theme.custom.palette.gold
        background: 'linear-gradient(to bottom, #AB8227 0%, #40310F 48.34%, #D8A42D 100%)',
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: theme.spacing(2,2,4,2),
        
    },
    button: {
        backgroundColor: theme.custom.palette.green
    },
}));

const VoteCard = ({ id, VoteInfo }) => {
    const classes = useStyles({});

    const marks = [
        {
            value: 0,
            label: '0%',
        },
        {
            value: 25,
            label: '25%',
        },
        {
            value: 50,
            label: '50%',
        },
        {
            value: 75,
            label: '75%',
        },
        {
            value: 100,
            label: '100%',
        },
    ];

    return (
        <Grid item xs={12} sm={6} md={6} lg={4}>
            <Card className={classes.card}>
                <CardHeader
                    classes={{ root: classes.cardHeader }}
                    title={VoteInfo.title}>
                </CardHeader>
                <CardContent >
                    <Typography variant={'body1'}>{VoteInfo.content}</Typography>
                    {/* <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={2}>
              <Avatar variant='square' src={imageUrl} />
            </Grid>
            <Grid item xs>
              <Typography style={{ display: 'flex', flexDirection: 'column', padding: 8 }}
                component='div' variant='body1' noWrap>
                {content}
                <Typography variant='caption'>
                  {detail} , {subContent}
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Badge color='primary'
                classes={{ colorPrimary: classes.badgeBackgroundColor }}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                max={999999} badgeContent={value} />
            </Grid>
          </Grid> */}
                </CardContent >
                <CardActions classes={{ root: classes.cardActions }}>
                    <div style = {{width : '90%', marginRight:20}}>
                        <CustomSlider marksList={marks} />
                    </div>
                    <OutlinedButton className={classes.button}>Vote </OutlinedButton>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default VoteCard;
