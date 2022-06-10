import { useParams } from 'react-router-dom';
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
  const [allProducts, isAllProductsLoading] = useProducts();

  const filterProductsByTag = () => {
    const relatedTages = product.tags || [];

    const filterProducts = [];

    for (let i = 0; i < allProducts.length; i++) {
      if (filterProducts.length === 3 || relatedTages.length === 0) {
        break;
      }
      const currentTags = allProducts[i].tags;
      const match = currentTags.find((tag) => relatedTages.includes(tag));
      if (match) {
        filterProducts.push(allProducts[i]);
      }
    }

    return filterProducts;
  };

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
            filterProductsByTag().map((el) => (
              <ProductCard key={el._id} product={el} />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
