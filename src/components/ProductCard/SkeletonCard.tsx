import Skeleton from '../Skeleton';

import './index.css';

const cardImageStyle = { width: '100%' };
const cardHeaderStyle = { height: '20px', width: '20%', borderRadius: '15px' };
const paragraphStyle = {
  height: '5px',
  padding: '0.5rem',
  marginBottom: '5px',
  borderRadius: '15px',
  width: '80%',
};

const SkeletonCard = () => {
  return (
    <div className='card-container'>
      <Skeleton style={cardImageStyle}></Skeleton>
      <div className='card-header'>
        <Skeleton style={cardHeaderStyle}></Skeleton>
        <Skeleton style={cardHeaderStyle}></Skeleton>
      </div>
      <div>
        <Skeleton style={paragraphStyle}></Skeleton>
        <Skeleton style={{ ...paragraphStyle, width: '60%' }}></Skeleton>
        <Skeleton style={paragraphStyle}></Skeleton>
        <Skeleton style={{ ...paragraphStyle, width: '40%' }}></Skeleton>
      </div>
    </div>
  );
};

export default SkeletonCard;
