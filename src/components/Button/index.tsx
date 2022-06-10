import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

type Props = {
  icon?: 'plus' | 'edit';
  to?: string;
  onClick?: () => void;
  children?: JSX.Element | JSX.Element[] | string | string[];
};

const iconHtmlCode = {
  plus: '+',
  edit: '🖉',
};

const Button: React.FC<Props> = ({
  to = null,
  icon,
  children,
  onClick = () => {},
}) => {
  if (!to) {
    return (
      <button onClick={onClick} className='btn bg-green text-white'>
        {icon && (
          <span className={`text-white ${children ? 'icon' : ''}`}>
            {iconHtmlCode[icon]}
          </span>
        )}
        <span>{children}</span>
      </button>
    );
  }

  return (
    <Link to={to} className='btn bg-green text-white'>
      {icon && (
        <span className={`text-white ${children ? 'icon' : ''}`}>
          {iconHtmlCode[icon]}
        </span>
      )}
      <span>{children}</span>
    </Link>
  );
};

export default Button;
