import React from 'react'
import Button from '../../components/Button'
import Chip from '../../components/Chip'
import { IProduct } from '../../types'
import { roundNumber } from '../../utils'

import './index.css'

type Props = {
  product: IProduct
}

const ProductDetailsCard: React.FC<Props> = ({ product }) => {
  return (
    <div className='product-details'>
      <div className='image-container'>
        <img src={product.image} alt={product.name} />
      </div>
      <div className='product-info'>
        <div className='product-info-header'>
          <h1 className='product-name'>{product.name}</h1>
          <h1>{`${roundNumber(product.price!)}€`}</h1>
        </div>

        <div className='tags'>
          {product.tags?.map((tag, i) => (
            <Chip key={tag} color={i % 2 === 0 ? 'green' : 'blue'} text={tag} />
          ))}
        </div>

        <h2>Description : </h2>
        <p className='product-description text-secondary'>
          {product.description}
        </p>
        <div className='card-details-actions'>
          <Button to={`/products/${product._id}/edit`} icon='edit'>
            Modifier
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsCard
