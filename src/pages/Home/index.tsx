import React, { useState } from 'react'

import ProductList from '../../components/ProductList'
import Search from '../../components/Search'
import useInfiniteScroll from '../../hooks/useInfiniteScroll'
import useProducts from '../../hooks/useProducts'

function Home() {
  const [searchText, setSearchText] = useState('')

  const [products, isLoading, hasError, total, loadData] = useProducts()
  useInfiniteScroll(total, 15, loadData)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e?.target.value) {
      setSearchText(e?.target.value)
    }
  }

  return (
    <>
      <Search onChange={handleSearchChange} searchText={searchText} />
      <ProductList productList={products} isLoading={isLoading} />
    </>
  )
}

export default Home
