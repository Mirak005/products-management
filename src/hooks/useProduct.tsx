import { useState, useEffect, useCallback } from 'react'

import { getProductById } from '../services/productApi'

import { IProduct } from '../types'

type State = [IProduct, boolean, boolean]

const initState = {} as IProduct

const useProduct = (productId: string): State => {
  const [data, setData] = useState<IProduct>(initState)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const loadProduct = useCallback(async () => {
    try {
      const product = await getProductById(productId)
      setData(product)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      setHasError(true)
    }
  }, [productId])

  useEffect(() => {
    loadProduct()
  }, [loadProduct])

  return [data, isLoading, hasError]
}

export default useProduct
