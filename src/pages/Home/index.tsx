import React, { useState } from 'react'

import ProductList from '../../components/ProductList'
import Search from '../../components/Search'
import useInfiniteScroll from '../../hooks/useInfiniteScroll'
import useProducts from '../../hooks/useProducts'
import { IProduct } from '../../types'

function Home() {
  const [searchText, setSearchText] = useState('')

  const [products, isLoading, hasError, total, loadData] = useProducts()
  const [hasMore] = useInfiniteScroll(total, 15, loadData)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e?.target.value)
  }

  const handleFilter = (productList: IProduct[]) => {
    return productList.filter((product) => {
      const rgx = new RegExp(searchText, 'ig')
      return rgx.test(product.name)
    })
  }

  return (
    <>
      <Search onChange={handleSearchChange} searchText={searchText} />
      <ProductList
        productList={handleFilter(products)}
        isLoading={isLoading}
        hasMore={hasMore}
      />
    </>
  )
}

export default Home
