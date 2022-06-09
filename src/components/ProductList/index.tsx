import React from 'react'
import { IProduct } from '../../types'
import { ProductCard } from '../ProductCard'
import SkeletonCard from '../ProductCard/SkeletonCard'

import './index.css'

type Props = {
  productList: IProduct[]
  isLoading: boolean
  hasMore: boolean
}

const ProductList: React.FC<Props> = ({
  productList = [],
  isLoading,
  hasMore,
}) => {
  if (isLoading) {
    return (
      <div className='product-list'>
        {Array.from({ length: 15 }).map((el) => (
          <SkeletonCard />
        ))}
      </div>
    )
  }
  return (
    <div className='product-list'>
      {productList.map((product) => (
        <ProductCard product={product} key={product._id + Math.random()} />
      ))}

      {hasMore && (
        <>
          <SkeletonCard />
        </>
      )}
    </div>
  )
}

export default ProductList
