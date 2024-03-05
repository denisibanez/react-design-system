import Button from '@mui/material/Button';
import React from 'react';
import './Button.scss';
import { ButtonProps } from './Button.model';
import { CircularProgress } from '@mui/material';

const ButtonComponent: React.FC<ButtonProps> = ({
  onClick,
  children,
  loading = false,
  variant = 'contained',
  color = 'success',
  disabled = false,
  type = 'button',
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      className="button"
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {loading ? <CircularProgress color="inherit" size="25px" /> : children}
    </Button>
  );
};
export default ButtonComponent;
