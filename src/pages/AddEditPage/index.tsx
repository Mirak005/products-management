import { useParams } from 'react-router-dom';
import AddEditForm from '../../components/AddEditForm';
import useProduct from '../../hooks/useProduct';

function CreateEdit() {
  const { productId } = useParams();

  const [productData, loading] = useProduct(productId as string);

  console.log({ productData });

  if (loading) {
    return <main>loading</main>;
  }

  return (
    <main>
      {productId ? <AddEditForm productData={productData} /> : <AddEditForm />}
    </main>
  );
}

export default CreateEdit;
