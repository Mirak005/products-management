import Skeleton from '../Skeleton'

import './index.css'

const SkeletonCard = () => {
  return (
    <div className='card-container'>
      <Skeleton style={{ width: '100%' }}></Skeleton>
      <div className='card-header'>
        <Skeleton
          style={{ height: '20px', width: '20%', borderRadius: '15px' }}
        ></Skeleton>
        <Skeleton
          style={{ height: '20px', width: '20%', borderRadius: '15px' }}
        ></Skeleton>
      </div>
      <p>
        <Skeleton
          style={{
            height: '5px',
            width: '80%',
            padding: '0.5rem',
            marginBottom: '5px',
            borderRadius: '15px',
          }}
        ></Skeleton>
        <Skeleton
          style={{
            height: '5px',
            width: '60%',
            padding: '0.5rem',
            marginBottom: '5px',
            borderRadius: '15px',
          }}
        ></Skeleton>
        <Skeleton
          style={{
            height: '5px',
            width: '80%',
            padding: '0.5rem',
            marginBottom: '5px',
            borderRadius: '15px',
          }}
        ></Skeleton>
        <Skeleton
          style={{
            height: '5px',
            width: '40%',
            padding: '0.5rem',
            marginBottom: '5px',
            borderRadius: '15px',
          }}
        ></Skeleton>
      </p>
    </div>
  )
}

export default SkeletonCard
