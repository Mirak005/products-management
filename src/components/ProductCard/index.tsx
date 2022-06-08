import React from 'react'
import { IProduct } from '../../types'

import './index.css'

type Props = {
  product: IProduct
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className='card-container'>
      <div
        className='image-container'
        style={{ backgroundImage: `url(${product.image})` }}
      ></div>
      <h3>{product.name}</h3>
      <span className='text-secondary'>{`${product.price} €`}</span>
      <p className='text-secondary'>{product.description}</p>
    </div>
  )
}
