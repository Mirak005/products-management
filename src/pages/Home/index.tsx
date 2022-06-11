import ProductList from '../../components/ProductList';
import Search from '../../components/Search';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import useProducts from '../../hooks/useProducts';

function Home() {
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
