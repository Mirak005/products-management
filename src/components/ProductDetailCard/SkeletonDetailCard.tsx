import Skeleton from '../Skeleton';

import './index.css';

const containerStyle = { padding: '3rem' };
const imageSkeleton = {
  borderRadius: '15px',
};
const paragraphStyle = {
  height: '10px',
  padding: '0.5rem',
  borderRadius: '15px',
  marginBottom: '15px',
};

const SkeletonDetailCard = () => {
  return (
    <div className='product-details' style={containerStyle}>
      <Skeleton style={imageSkeleton}></Skeleton>
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
  );
};

export default SkeletonDetailCard;
