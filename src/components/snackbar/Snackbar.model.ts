import { Dispatch, SetStateAction } from 'react';

export interface SnackbarInterfaceProps {
  model: boolean;
  duration?: number;
  closeSnackbar: Dispatch<SetStateAction<boolean>>;
  severity?: 'error' | 'info' | 'success' | 'warning';
  message: string;
}
