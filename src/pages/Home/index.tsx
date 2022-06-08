import React, { useEffect, useState } from 'react'

import ProductList from '../../components/ProductList'
import Search from '../../components/Search'

import { getProducts } from '../../services/productApi'
import { IProduct } from '../../types'

function Home() {
  const [searchText, setSearchText] = useState('')
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    getProducts().then((result) => {
      console.log({ result })
      setProducts(result)
    })
  }, [])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e?.target.value) {
      setSearchText(e?.target.value)
    }
  }

  return (
    <>
      <Search onChange={handleSearchChange} searchText={searchText} />
      <ProductList productList={products} />
    </>
  )
}

export default Home
