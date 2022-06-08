import React from 'react'
import { IProduct } from '../../types'
import { ProductCard } from '../ProductCard'
import './index.css'

type Props = {
  productList: IProduct[]
}

const ProductList: React.FC<Props> = ({ productList = [] }) => {
  return (
    <div className='product-list'>
      {productList.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </div>
  )
}

export default ProductList
