export interface SnackbarInterfaceProps {
  model: boolean;
  duration?: number;
  closeSnackbar: () => void;
  severity?: 'error' | 'info' | 'success' | 'warning';
  message: string;
}
