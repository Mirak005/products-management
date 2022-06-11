import * as React from 'react';
import useForm from '../../hooks/useForm';
import { createProduct, updateProduct } from '../../services/productApi';
import { IProduct } from '../../types';
import Alert from '../Alert';
import Button from '../Button';
import Chip from '../Chip';
import './index.css';

type Props = {
  productData?: IProduct;
};

const initForm: Omit<IProduct, '_id'> = {
  tags: [],
  name: '',
  description: '',
  image: '',
  price: '',
};

const FormError = ({ msg }: { msg: string }) => (
  <p style={{ color: 'red' }}>{msg}</p>
);

export default function AddEditForm({ productData }: Props) {
  const handleSubmitForm = async () => {
    try {
      if (productData) {
        await updateProduct(formData as IProduct);
      } else {
        await createProduct(formData);
      }
      setWarning({
        msg: `Product ${productData ? 'updated' : 'added'} with success`,
        status: 'success',
      });
      setFormData(initForm);
    } catch (error) {
      setWarning({ msg: 'Something went wrong', status: 'error' });
    }
  };
  const { formData, setFormData, handleInputChange, handleSubmit } = useForm<
    IProduct | Omit<IProduct, '_id'>
  >(productData || initForm, handleSubmitForm);
  const [tag, setTag] = React.useState('');

  const [errors, setErrors] = React.useState<Record<string, string | boolean>>({
    tag: '',
    name: '',
    description: '',
    image: '',
    price: '',
    tagExist: false,
  });

  const [warning, setWarning] = React.useState<{
    msg: string;
    status?: 'error' | 'success' | '';
  }>({
    msg: '',
    status: '',
  });

  React.useEffect(() => {
    return () => setFormData(initForm);
  }, [setFormData]);

  React.useEffect(() => {
    if (warning.msg) {
      setTimeout(() => {
        setWarning({ msg: '', status: '' });
      }, 3000);
    }
  }, [warning.msg]);

  const handleChangeWithErrors = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const feildName = e.target.name;
    const errorMessage = e.target.validationMessage;
    if (errorMessage) {
      setErrors((prevErros) => ({ ...prevErros, [feildName]: errorMessage }));
    } else {
      setErrors((prevErros) => ({ ...prevErros, [feildName]: '' }));
    }
    handleInputChange(e);
  };

  const handleChangeTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    const errorMessage = e.target.validationMessage;
    if (errorMessage) {
      setErrors((prevErros) => ({ ...prevErros, tag: errorMessage }));
    } else {
      setErrors((prevErros) => ({ ...prevErros, tag: '' }));
    }
    setTag(e.target.value);
  };

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      if (formData.tags.includes(tag)) {
        setErrors((prevErrors) => ({ ...prevErrors, tagExist: true }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, tagExist: false }));
        setFormData((prevForm) => ({
          ...prevForm,
          tags: [...prevForm.tags, tag],
        }));
        setTag('');
      }
    }
  };

  const removeTag = () => {
    const filterdTags = formData.tags.filter(
      (currentTag) => currentTag !== tag
    );
    setFormData((prevForm) => ({
      ...prevForm,
      tags: filterdTags,
    }));
  };

  return (
    <div className='form-container'>
      {warning.msg && <Alert msg={warning.msg} status={warning.status} />}
      <div className='form-header'>
        <Button icon='plus'></Button>
        <div>
          <h3>{productData ? 'Modifier' : 'Ajouter un produit'}</h3>
          <span>lorem</span>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='form-group-row'>
          <div className='form-group'>
            <label>Nom du produit</label>
            <br />
            <input
              type='text'
              value={formData.name}
              name='name'
              required
              minLength={3}
              maxLength={50}
              onChange={handleChangeWithErrors}
            />
            {errors.name && <FormError msg={errors.name as string} />}
          </div>
          <div className='form-group'>
            <label>Prix</label>
            <br />
            <input
              type='number'
              value={formData.price}
              name='price'
              step={0.1}
              required
              min={0}
              onChange={handleChangeWithErrors}
            />
            {errors.price && <FormError msg={errors.name as string} />}
          </div>
        </div>
        <div className='form-group'>
          <label>Description</label>
          <br />
          <textarea
            name='description'
            value={formData.description}
            minLength={3}
            maxLength={300}
            rows={8}
            onChange={handleChangeWithErrors}
          ></textarea>
          {errors.description && (
            <FormError msg={errors.description as string} />
          )}
        </div>
        <div className='form-group'>
          <label>Image</label>
          <br />
          <input
            type='url'
            name='image'
            value={formData.image}
            required
            onChange={handleChangeWithErrors}
          />
          {errors.image && <FormError msg={errors.image as string} />}
        </div>
        <div className='form-group'>
          <label>Tag</label>
          <br />
          <input
            type='text'
            minLength={3}
            maxLength={50}
            value={tag}
            onKeyDown={handleAddTag}
            onChange={handleChangeTag}
          />
          {errors.tagExist && <FormError msg='Tag existante' />}
          {errors.tag && <FormError msg={errors.tag as string} />}
        </div>
        <div className='tags'>
          {formData.tags.map((tag, i) => (
            <Chip
              key={i}
              text={tag}
              color={i % 2 === 0 ? 'green' : 'blue'}
              onClick={removeTag}
            />
          ))}
        </div>
        <Button type='submit'>{productData ? 'Modifier' : 'Ajouter'}</Button>
      </form>
    </div>
  );
}
