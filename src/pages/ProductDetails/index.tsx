import {  useParams } from 'react-router-dom'

import ProductDetailsCard from '../../components/ProductDetailCard'

import './index.css'

function ProductDetails() {
  let { productId } = useParams()

  return (
    <>
      <ProductDetailsCard productId={productId!} />
    </>
  )
}

export default ProductDetails
