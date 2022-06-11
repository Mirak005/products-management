import { useState, useEffect, useCallback, useRef } from 'react';

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
  handlTagsChange: (tags: string[]) => void;
};

const useProducts = (step = 15): State => {
  const [data, setData] = useState<IProduct[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [startIndex, setStartIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  const [search, setsearch] = useState('');
  const [searchTags, setSearchTags] = useState<string[]>([]);

  const timeout = useRef<any>(null);

  const handlTagsChange = (tags: string[]) => {
    setSearchTags(tags);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const fetchProducts = async (params?: {
    search?: string;
    tags?: string[];
  }) => {
    try {
      setIsLoading(true);
      const { products, count } = await getProducts(0, params);

      if (params?.tags) {
        setData(products);
        setIsLoading(false);
        return;
      }

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
    if (searchTags.length) {
      fetchProducts({ tags: searchTags });
    } else if (search) {
      clearTimeout(timeout.current);
      timeout.current = setTimeout(() => {
        fetchProducts({ search });
      }, 1000);
    } else {
      fetchProducts();
    }
    return () => {
      clearTimeout(timeout.current);
    };
  }, [search, searchTags]);

  return {
    products: data,
    isLoading,
    hasMore,
    hasError,
    total,
    search,
    loadProducts,
    handleSearchChange,
    handlTagsChange,
  };
};

export default useProducts;
