import React from 'react'
import { IProduct } from '../../types'
import { ProductCard } from '../ProductCard'
import './index.css'

type Props = {
  productList: IProduct[]
  isLoading: boolean
}

const ProductList: React.FC<Props> = ({ productList = [], isLoading }) => {
  if (isLoading) {
    return <h2>Loading...</h2>
  }
  return (
    <div className='product-list'>
      {productList.map((product) => (
        <ProductCard product={product} key={product._id + Math.random()} />
      ))}
    </div>
  )
}

export default ProductList
