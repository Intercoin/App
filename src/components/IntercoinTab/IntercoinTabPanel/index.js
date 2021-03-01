
import { memo } from 'react'
import Box from '@material-ui/core/Box';

const PronetTabPanel = ({ children, value, index, ...rest }) => {
  return (
    <div
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...rest}
    >
      {value === index && <Box p={0}>{children}</Box>}
    </div>
  );
};

export default memo(PronetTabPanel);
