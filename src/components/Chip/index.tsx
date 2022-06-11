import React from 'react'

import './index.css'

type Props = {
  color: 'blue' | 'green'
  text: string
  onClick?: () => void
}

const Chip: React.FC<Props> = ({ color, text, onClick }) => {
  const handleClick = () => {
    onClick && onClick()
  }
  return (
    <div className={`chip-${color}`} onClick={handleClick}>
      <span>{text}</span>
      {onClick && (
        <span className={`text-${color}`} style={{ cursor: 'pointer' }}>
          <b>X</b>
        </span>
      )}
    </div>
  )
}

export default Chip
