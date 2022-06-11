import React, { useEffect, useState } from 'react';

import ProductList from '../../components/ProductList';
import Search from '../../components/Search';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import useProducts from '../../hooks/useProducts';

import { IProduct } from '../../types';

function Home() {
  //TODO: implement Alert comonent
  const {
    products,
    isLoading,
    hasMore,
    total,
    search,
    loadProducts,
    handleSearchChange,
  } = useProducts();
  useInfiniteScroll(total || 0, loadProducts);

  //Todo implement request filter by tag

  return (
    <main>
      <Search onChange={handleSearchChange} searchText={search} />
      <ProductList
        productList={products}
        isLoading={isLoading}
        hasMore={hasMore}
      />
    </main>
  );
}

export default Home;
