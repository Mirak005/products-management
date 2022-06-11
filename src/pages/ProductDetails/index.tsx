import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmptyData from '../../components/EmptyData';
import ProductCard from '../../components/ProductCard';
import SkeletonCard from '../../components/ProductCard/SkeletonCard';

import ProductDetailsCard from '../../components/ProductDetailCard';
import SkeletonDetailCard from '../../components/ProductDetailCard/SkeletonDetailCard';
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
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            paddingTop: '1rem',
          }}
        >
          {isAllProductsLoading ? (
            <>
              <SkeletonCard></SkeletonCard>
              <SkeletonCard></SkeletonCard>
              <SkeletonCard></SkeletonCard>
            </>
          ) : allProducts.length === 0 || product.tags.length === 0 ? (
            <EmptyData />
          ) : (
            allProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
