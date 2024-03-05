import { ReactNode } from 'react';

export interface ButtonProps {
  onClick: () => void;
  variant?: 'text' | 'contained' | 'outlined' | undefined;
  loading?: boolean;
  disabled?: boolean;
  color?:
    | 'success'
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'warning'
    | undefined;
  children: ReactNode;
  type?: 'button' | 'submit';
}
