import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'

type Props = {
  icon?: 'plus' | 'edit'
  to?: string
  type?: 'button' | 'submit' | 'reset'
  children?: JSX.Element | JSX.Element[] | string | string[]
  onClick?: () => void
}

const iconHtmlCode = {
  plus: '+',
  edit: '🖉',
}

const Button: React.FC<Props> = ({
  to = null,
  icon,
  children,
  type = 'button',
  onClick = () => {},
}) => {
  if (!to) {
    return (
      <button onClick={onClick} type={type} className='btn bg-green text-white'>
        {icon && (
          <span className={`text-white ${children ? 'icon' : ''}`}>
            {iconHtmlCode[icon]}
          </span>
        )}
        <span>{children}</span>
      </button>
    )
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
  )
}

export default Button
