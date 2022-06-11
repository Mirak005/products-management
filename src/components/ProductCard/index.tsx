import React from 'react';
import { useNavigate } from 'react-router-dom';

import { IProduct } from '../../types';
import { roundNumber } from '../../utils';

import './index.css';

type Props = {
  product: IProduct;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  const navigate = useNavigate();

  const handleGoTo = () => {
    navigate(`/products/${product._id}`, { replace: true });
  };

  return (
    <div className='card-container' onClick={handleGoTo}>
      <div
        className='image-container'
        style={{ backgroundImage: `url(${product.image})` }}
      ></div>
      <div className='card-header'>
        <h2>{product.name}</h2>
        <h2 className='text-secondary'>{`${roundNumber(
          product.price,
          2
        )}€`}</h2>
      </div>
      <p className='text-secondary'>{product.description}</p>
    </div>
  );
};

export default ProductCard;
