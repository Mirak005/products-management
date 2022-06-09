import Skeleton from '../Skeleton'

import './index.css'

const cardImageStyle = { padding: '100%', height: '100%' }
const cardHeaderStyle = { height: '20px', width: '20%', borderRadius: '15px' }
const paragraphStyle = {
  height: '10px',
  padding: '0.5rem',
  borderRadius: '15px',
}

const SkeletonDetailCard = () => {
  return (
    <div className='product-details'>
        <Skeleton style={{ borderRadius: '15px' }}></Skeleton>
      <div className='product-info'>
        <Skeleton style={paragraphStyle}></Skeleton>
        <Skeleton style={paragraphStyle}></Skeleton>
        <Skeleton style={paragraphStyle}></Skeleton>
        <Skeleton style={paragraphStyle}></Skeleton>
        <div className='.card-details-actions'>
          <Skeleton style={{ ...paragraphStyle, width: '20%' }}></Skeleton>
        </div>
      </div>
    </div>
  )
}

export default SkeletonDetailCard
