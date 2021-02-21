
import React, { memo } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles(theme => ({
  root: props => ({
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: 'auto',
    '& .MuiTab-wrapper': {
      display: 'contents',
      justifyContent: 'space-between',
      textTransform: 'capitalize',
      marginRight: theme.spacing(2)
    },
    '& .MuiTabs-scroller': {
      height: props.height ? props.height : 'none',
    }
  }),
  tab: props => ({
    display: 'flex',
    minWidth: 0,
    marginRight: theme.spacing(0),
    borderBottom: `solid 0.5px ${theme.palette.background.default}`,
    '&.MuiTab-labelIcon .MuiTab-wrapper > *:first-child': {
      marginRight: theme.spacing(1)
    },
    minHeight: props.height ? props.height : 'none',
    height: props.height ? props.height : theme.spacing(4),
    width: props.width ? props.width : 'none',
    backgroundColor: props.backgroundColor ? props.backgroundColor : 'none'
  }),
  unSelectedTab: props => ({
    display: 'flex',
    minWidth: 0,
    marginRight: theme.spacing(0),
    borderBottom: `0.5px solid${props.borderColor ? props.borderColor : theme.palette.background.default}`,
    '&.MuiTab-labelIcon .MuiTab-wrapper > *:first-child': {
      marginRight: theme.spacing(1),
    },
    minHeight: props.height ? props.height : 'none',
    height: props.height ? props.height : theme.spacing(4),
    width: props.width ? props.width : 'none',
    backgroundColor: props.UnselectedTabBackgroundColor ? props.UnselectedTabBackgroundColor : 'none',
    opacity: props.opacity ? props.opacity : 'none',
  }),
}));

const IntercoinTabPanel = ({ value, tabs, onChange, backgroundColor, indicatorColor, width,
  height, UnselectedTabBackgroundColor, opacity, borderColor }) => {
  const classes = useStyles({ backgroundColor, width, height, UnselectedTabBackgroundColor, opacity, borderColor });
  const theme = useTheme();

  return (
    <Tabs
      textColor='inherit'
      scrollButtons='auto'
      variant='scrollable'
      aria-label='ant example'
      TabIndicatorProps={{
        style: {
          backgroundColor: indicatorColor ? indicatorColor : `${theme.palette.text.primary}`
        }
      }}
      value={value}
      className={classes.root}
      onChange={onChange}>
      {tabs.map((tab, index) => (
        <Tab
          key={tab.id}
          icon={tab.icon}
          label={tab.label}
          data-tut={tab.tour || ''}
          className={index === value ? classes.tab : classes.unSelectedTab}
        />
      ))}
    </Tabs>
  );
};

export default memo(IntercoinTabPanel);
