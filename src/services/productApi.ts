import axios from 'axios'
import { IProduct, ProductsResponse, ProductResponse } from '../types'

const api = axios.create({
  baseURL: 'https://technical-test-frontend.herokuapp.com/api',
})

export const getProducts = async (
  startPage: number = 0
): Promise<ProductsResponse> => {
  const { data } = await api.get(`/products?start=${startPage}`)
  console.log({ data })

  return data
}

export const getProductById = async (id: string): Promise<IProduct> => {
  const response = (await api.get(`/proructs?${id}`)) as ProductResponse
  return response.product
}

export const updateProduct = async (updatedProduct: IProduct) => {
  return api.put(`/products/${updatedProduct._id}`, updatedProduct)
}

export const createProduct = async (newProduct: Omit<IProduct, '_id'>) => {
  const response = (await api.post('/products', newProduct)) as ProductResponse
  return response.product
}
