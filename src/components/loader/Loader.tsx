import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import './Loader.scss';

const LoaderComponent: React.FC = () => {
  return (
    <Box sx={{ display: 'flex' }} data-testid="loading">
      <CircularProgress />
    </Box>
  );
};
export default LoaderComponent;
