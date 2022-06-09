import React from 'react'

import './index.css'

type Props = {
  color: 'blue' | 'green'
  text: string
}

const Chip: React.FC<Props> = ({ color, text }) => {
  return <span className={`chip-${color}`}>{text}</span>
}

export default Chip
