import React from 'react'

import './index.css'

type Props = {
  msg: string
  status?: 'error' | 'success' | ''
}

const Alert: React.FC<Props> = ({ msg, status }) => {
  return (
    <div
      className={`alert-container bg-${
        status === 'success' ? 'green' : 'warning'
      } text-white`}
    >
      <span>&#10004;</span>
      <p>{msg}</p>
    </div>
  )
}

export default Alert
