
import React, { useMemo, memo } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/AddBoxOutlined';
import ExpandLessIcon from '@material-ui/icons/IndeterminateCheckBoxOutlined';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        margin: '0 !important',
        borderStyle: 'solid',
        borderWidth: '0.1px 0',
        borderColor: theme.palette.background.main,
        color: theme.palette.text.secondary,
        backgroundColor: theme.palette.background.default,
        '& svg': {
            color: theme.palette.text.secondary
        }
    },
    expand: {
        color: theme.palette.text.primary,
        '& svg': {
            color: theme.palette.text.primary
        }
    },
    header: {
        padding: theme.spacing(0, 2),
        minHeight: `unset !important`
    },
    title: {
        width: '100%'
    },
    content: {
        fontSize: 13,
        fontWeight: 300,
        padding: theme.spacing(0, 2, 2)
    }
}));

const IntercoinAccordion = ({ title, content, panel, selectedPanel, onExpand }) => {
    const classes = useStyles();
    const isOpen = useMemo(() => selectedPanel === panel);

    const handleChange = (event, isExpanded) => {
        onExpand(isExpanded ? panel : false);
    }

    return (
        <Accordion
            expanded={isOpen}
            onChange={handleChange}
            className={clsx(classes.root, { [classes.expand]: isOpen })}
        >
            <AccordionSummary
                expandIcon={isOpen
                    ? <ExpandLessIcon />
                    : <ExpandMoreIcon />}
                className={classes.header}
            >
                <Typography
                    className={classes.title}
                    variant='h4'
                >
                    {title}
                </Typography>
            </AccordionSummary>
            <AccordionDetails
                className={classes.content}
            >
                {content}
            </AccordionDetails>
        </Accordion>
    );
};

export default memo(IntercoinAccordion);
