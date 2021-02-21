import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckIcon from 'components/Icons/CheckIcon';

const useStyles = makeStyles(theme => ({
  label: {
    fontSize: 14,
    color: theme.palette.text.secondary,
    fontWeight: 300,
    userSelect: 'none',
    minWidth: 100
  },
  checkedLabel: {
    color: theme.palette.primary.contrastText,
  },
  checkboxIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: theme.spacing(14 / 8),
    height: theme.spacing(14 / 8),
    borderRadius: 3,
    border: `1px solid ${theme.palette.text.secondary}`,
    backgroundColor: 'transparent'
  },
  checked: {
    background: theme.palette.text.secondary
  }
}));

const CheckBoxIcon = ({ checked }) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.checkboxIcon, checked && classes.checked)}>
      {checked && <CheckIcon />}
    </div>
  );
}

const CustomCheckBox = ({ checked, value,onChange, onClick, ...rest }) => {
  const classes = useStyles();
  return (
    <Checkbox
      checked={checked}
      value={value}
      icon={<CheckBoxIcon />}
      checkedIcon={<CheckBoxIcon checked />}
      onClick={onClick}
      onChange = {onChange} />
  );
}

export default CustomCheckBox;