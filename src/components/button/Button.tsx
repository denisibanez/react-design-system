import Button from '@mui/material/Button';
import React from 'react';
import './Button.scss';
import { ButtonProps } from './Button.model';

const ButtonComponent: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = 'contained',
  color = 'success',
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      className="button"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
export default ButtonComponent;
