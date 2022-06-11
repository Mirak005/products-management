import SkeletonCard from '../ProductCard/SkeletonCard';

import './index.css';

type Props = {
  size: number;
};

const ListLoading: React.FC<Props> = ({ size }) => {
  return (
    <div className='product-list'>
      {Array.from({ length: size }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};

export default ListLoading;
