import { FC } from 'react';
import './Snackbar.scss';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';

import { SnackbarInterfaceProps } from './Snackbar.model';

const SnackbarComponent: FC<SnackbarInterfaceProps> = ({
  model,
  duration = 6000,
  closeSnackbar,
  severity = 'success',
  message,
}): JSX.Element => {
  const handleClose = () => {
    closeSnackbar();
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        {model ? (
          <Snackbar
            open={true}
            autoHideDuration={duration}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity={severity}
              variant="filled"
              sx={{ width: '100%' }}
            >
              {message}
            </Alert>
          </Snackbar>
        ) : (
          ''
        )}
      </Box>
    </>
  );
};
export default SnackbarComponent;
