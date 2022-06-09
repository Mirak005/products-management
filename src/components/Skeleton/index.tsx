import React from 'react'
import './index.css'

type Props = {
  style: React.CSSProperties
}

const Skeleton: React.FC<Props> = ({ style = {} }) => {
  return (
    <div className='skeleton-container' style={style}>
      <div className='skeleton-inner'></div>
    </div>
  )
}
export default Skeleton
