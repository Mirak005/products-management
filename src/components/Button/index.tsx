import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  icon?: 'plus' | 'edit'
  to?: string
  onClick?: () => void
  children: JSX.Element | JSX.Element[] | string | string[]
}

const iconHtmlCode = {
  plus: '+',
  edit: '🖉',
}

const Button: React.FC<Props> = ({
  to = null,
  icon,
  children,
  onClick = () => {},
}) => {
  if (!to) {
    return (
      <button className='btn bg-green text-white'>
        {icon && (
          <span className='text-white' style={{ fontSize: '16px' }}>
            {iconHtmlCode[icon]}
          </span>
        )}
        {children}
      </button>
    )
  }

  return (
    <Link to={to} className='btn bg-green text-white'>
      {icon && <span className='text-white'>{iconHtmlCode[icon]}</span>}
      {children}
    </Link>
  )
}

export default Button
