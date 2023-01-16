import React from 'react';

import './Button.css';

interface IButtonProps {
  children: React.ReactNode;
  color?: string;
  size?: string;
}

const Button: React.FC<IButtonProps> = ({
  children,
  color,
  size,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`ui-button ${size || ''}`}
      style={{ color }}
    >
      {children}
    </button>
  )
}

export default Button;
