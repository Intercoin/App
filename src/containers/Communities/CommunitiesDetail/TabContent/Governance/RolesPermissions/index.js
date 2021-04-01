
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography } from '@material-ui/core';
import CircleButton from 'components/UI/Buttons/CircleButton';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
    root: {},
    gridContainer: {
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
        width: theme.spacing(97),
        marginBottom: theme.spacing(2)
    },
}));

const RolesPermissions = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Grid classes={{ root: classes.gridContainer }} container direction={"column"} justify="center" align='center' spacing={1}>
            <Grid container spacing={1} style={{ marginLeft: theme.spacing(1.5), marginBottom: theme.spacing(1) }}>
                <Grid xs={12} container item alignItems='center'>
                    <FiberManualRecordIcon fontSize='small' />
                    <Typography variant='h6'> admins can invite students </Typography>
                </Grid>
                <Grid xs={12} container item alignItems='center'>
                    <FiberManualRecordIcon fontSize='small' />
                    <Typography variant='h6'> admins can invite teachers </Typography>
                </Grid>
                <Grid xs={12} container item alignItems='center'>
                    <FiberManualRecordIcon fontSize='small' />
                    <Typography variant='h6'> admins can assign tags "new tech" </Typography>
                </Grid>
            </Grid>
            <Grid xs={12} container item alignItems='center'>
                <CircleButton
                    style={{ backgroundColor: theme.palette.background.default, marginRight: theme.spacing(2) }}
                    icon={<AddIcon fontSize={'large'} style={{ color: '#fff', width: 35, height: 35 }} />} />
                <Typography variant='h5' style={{ textDecoration: 'underline', cursor: 'pointer' }}> Add another permission</Typography>
            </Grid>
        </Grid>
    );
};

export default RolesPermissions;
