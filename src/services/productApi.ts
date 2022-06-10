import axios from 'axios'
import { IProduct, ProductsResponse, ProductResponse } from '../types'

const api = axios.create({
  baseURL: 'https://technical-test-frontend.herokuapp.com/api',
})

//https://technical-test-frontend.herokuapp.com/api/products?tags[]=burger&vegan 
//https://technical-test-frontend.herokuapp.com/api/products?name=burger
//TODO add optional query for tags  and add filter by name
export const getProducts = async (
  startPage: number = 0
): Promise<ProductsResponse> => {
  const { data } = await api.get(`/products?start=${startPage}`)

  return data
}

export const getProductById = async (id: string): Promise<IProduct> => {
  const { data } = await api.get(`/products/${id}`)
  return data.product
}

export const updateProduct = async (updatedProduct: IProduct) => {
  return api.put(`/products/${updatedProduct._id}`, updatedProduct)
}

export const createProduct = async (newProduct: Omit<IProduct, '_id'>) => {
  const response = (await api.post('/products', newProduct)) as ProductResponse
  return response.product
}
