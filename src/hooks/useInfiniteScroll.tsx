import { useCallback, useState, useLayoutEffect } from 'react';

type State = [boolean];

const useInfiniteScroll = <T,>(
  total: number,
  loadMore: () => Promise<T>
): State => {
  const [isLoading, setIsLoading] = useState(false);

  const handleScroll = useCallback(
    async (e: any) => {
      if (isLoading) {
        return;
      }

      const scrollHeight = e.target.documentElement.scrollHeight;
      const currentHeight = Math.ceil(
        e.target.documentElement.scrollTop + window.innerHeight
      );
      if (currentHeight + 1 >= scrollHeight) {
        setIsLoading(true);
        await loadMore();
        setIsLoading(false);
      }
    },
    [isLoading, loadMore]
  );

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
  return [isLoading];
};

export default useInfiniteScroll;
