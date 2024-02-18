import Button from '@mui/material/Button';
import React, { ReactNode } from 'react';
import './Button.scss';

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

const ButtonComponent: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <Button variant="contained" color="success" className="button" onClick={onClick}>
      {children}
    </Button>
  );
};
export default ButtonComponent;
