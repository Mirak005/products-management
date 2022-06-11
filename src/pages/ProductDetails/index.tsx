import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductCard } from '../../components/ProductCard';
import SkeletonCard from '../../components/ProductCard/SkeletonCard';

import ProductDetailsCard from '../../components/ProductDetailCard';
import SkeletonDetailCard from '../../components/ProductDetailCard/SkeletonDetailCard';
import useProduct from '../../hooks/useProduct';
import useProducts from '../../hooks/useProducts';

import './index.css';

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
            //TODO: make css , add loader and handle emty filter N/A
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
          ) : (
            allProducts.map((el) => <ProductCard key={el._id} product={el} />)
          )}
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
