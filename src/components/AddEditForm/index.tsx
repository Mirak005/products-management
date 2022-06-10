import * as React from 'react';
import useForm from '../../hooks/useForm';
import { IProduct } from '../../types';
import './index.css';

type Props = {
  productData?: IProduct;
};

export default function AddEditForm({ productData }: Props) {
  const [tags, setTags] = React.useState(productData?.tags || []);
  const { formData, handleInputChange, handleSubmit } = useForm(
    productData || {},
    () => {}
  );

  const [tag, setTag] = React.useState('');

  const onSubmitTag = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTags([...tags, tag]);
    setTag('');
  };
  return (
    <div className='form-container'>
      <div className='form-header'>
        <span>+</span>
        <div>
          <h3>Ajouter un produit</h3>
          <span>lorem</span>
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert('submit');
        }}
      >
        <div className='row'>
          <div className='form-group'>
            <label>Nom du produit</label>
            <br />
            <input type='text' />
          </div>
          <div className='form-group'>
            <label>Prix</label>
            <br />
            <input type='text' />
          </div>
        </div>
        <div className='form-group'>
          <label>Description</label>
          <br />
          <input type='text' />
        </div>
        <div className='form-group'>
          <label>Image</label>
          <br />
          <input type='text' />
        </div>
      </form>
      <form onSubmit={onSubmitTag}>
        <div className='form-group'>
          <label>Tag</label>
          <br />
          <input
            type='text'
            value={tag}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                console.log('do validate');
              }
            }}
            onChange={(e) => setTag(e.target.value)}
          />
        </div>

        {tags.map((tag) => (
          <span>{tag}</span>
        ))}
      </form>

      <button>Add</button>
    </div>
  );
}
