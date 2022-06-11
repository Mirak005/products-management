import { useState, useEffect, useCallback } from 'react';

import { getProducts } from '../services/productApi';

import { IProduct } from '../types';

type State = {
  products: IProduct[];
  isLoading: boolean;
  hasMore: boolean;
  total: number | null;
  search: string;
  hasError: boolean;
  loadProducts: () => Promise<void>;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const useProducts = (step = 15): State => {
  const [data, setData] = useState<IProduct[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [startIndex, setStartIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [search, setsearch] = useState('');

  const [timeoutSearch, setTimeoutSearch] = useState<any>(0);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timeoutSearch);
    setsearch(e?.target.value);
  };

  const loadProducts = useCallback(async () => {
    try {
      if (!hasMore) {
        return;
      }

      const params: Record<string, string> = {};
      if (search) {
        params.search = search;
      }

      const { products } = await getProducts(startIndex, params);

      setData((prevState) => [...prevState, ...products]);
      setStartIndex((prev) => prev && prev + step);

      if (startIndex >= total) {
        setHasMore(false);
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setHasError(true);
    }
  }, [total, startIndex, search, hasMore, step]);

  const fetchProducts = async (search?: string) => {
    const params: Record<string, string> = {};
    if (search) {
      params.search = search;
    }
    try {
      setIsLoading(true);
      const { products, count } = await getProducts(0, params);

      if (count > products.length) {
        setHasMore(true);
      } else {
        setHasMore(false);
      }
      setStartIndex((prev) => prev + 15);
      setTotal(count);
      setData(products);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setHasError(true);
    }
  };

  useEffect(() => {
    setStartIndex(0);
    if (!search) {
      fetchProducts();
    } else {
      clearTimeout(timeoutSearch);
      setTimeoutSearch(setTimeout(() => fetchProducts(search), 1000));
    }
  }, [search, timeoutSearch]);

  return {
    products: data,
    isLoading,
    hasMore,
    hasError,
    total,
    search,
    loadProducts,
    handleSearchChange,
  };
};

export default useProducts;
