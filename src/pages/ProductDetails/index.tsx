import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmptyData from '../../components/EmptyData';
import ProductCard from '../../components/ProductCard';
import SkeletonCard from '../../components/ProductCard/SkeletonCard';

import ProductDetailsCard from '../../components/ProductDetailCard';
import SkeletonDetailCard from '../../components/ProductDetailCard/SkeletonDetailCard';
import ProductList from '../../components/ProductList';
import useProduct from '../../hooks/useProduct';
import useProducts from '../../hooks/useProducts';

function ProductDetails() {
  let { productId } = useParams();
  const [product, isLoading, hasError] = useProduct(productId as string);
  const {
    products: allProducts,
    isLoading: isAllProductsLoading,
    handlTagsChange,
  } = useProducts();

  useEffect(() => {
    if (!isLoading && product.tags.length) {
      handlTagsChange(product.tags);
    }
  }, [product, handlTagsChange, isLoading]);

  const navigate = useNavigate();

  useEffect(() => {
    if (hasError) {
      navigate(`/404`, { replace: true });
    }
  }, [hasError, navigate]);

  return (
    <>
      {isLoading ? (
        <SkeletonDetailCard />
      ) : (
        <ProductDetailsCard product={product} />
      )}

      <div>
        <h2>Articles Similaires :</h2>
        <ProductList
          isLoading={isAllProductsLoading}
          hasMore={false}
          productList={allProducts
            .filter((product) => product._id !== productId)
            .slice(0, 3)}
        />
      </div>
    </>
  );
}

export default ProductDetails;
