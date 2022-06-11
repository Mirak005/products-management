import React from 'react';

import ProductCard from '../ProductCard';
import EmptyData from '../EmptyData';
import ListLoading from './SkeletonProductList';

import { IProduct } from '../../types';

import './index.css';

type Props = {
  productList: IProduct[];
  isLoading: boolean;
  hasMore: boolean;
};

const ProductList: React.FC<Props> = ({
  productList = [],
  isLoading,
  hasMore,
}) => {
  if (isLoading) {
    return <ListLoading size={9} />;
  }
  return (
    <div className='product-list'>
      {productList.length === 0 ? (
        <EmptyData />
      ) : (
        productList.map((product) => (
          <ProductCard product={product} key={product._id + Math.random()} />
        ))
      )}

      {hasMore && <ListLoading size={3} />}
    </div>
  );
};

export default ProductList;
