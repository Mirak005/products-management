import axios from 'axios';
import { IProduct, ProductsResponse, QueryProducts } from '../types';

const api = axios.create({
  baseURL: 'https://technical-test-frontend.herokuapp.com/api',
});

export const getProducts = async (
  startPage: number = 0,
  queryData?: QueryProducts
): Promise<ProductsResponse> => {
  const params: Record<string, string | string[]> = {};

  if (queryData?.search) {
    params.search = queryData.search;
  }

  if (queryData?.filterTags) {
    params.tags = queryData.filterTags;
  }

  const { data } = await api.get(`/products?start=${startPage}`, { params });

  return data;
};

export const getProductById = async (id: string): Promise<IProduct> => {
  const { data } = await api.get(`/products/${id}`);
  return data.product;
};

export const updateProduct = async (updatedProduct: IProduct) => {
  return api.put(`/products/${updatedProduct._id}`, updatedProduct);
};

export const createProduct = async (newProduct: Omit<IProduct, '_id'>) => {
  const { data } = await api.post('/products', newProduct);
  return data.product;
};
