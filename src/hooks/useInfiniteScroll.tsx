import { useCallback, useState, useLayoutEffect } from 'react'

type State = boolean[]

const useInfiniteScroll = <T,>(
  total: number,
  step: number,
  loadMore: (start: number) => Promise<T>
): State => {
  const [startItem, setStartItem] = useState<number>(step)
  const [hasMore, setHasMore] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const handleScroll = useCallback(
    async (e: any) => {
      if (isLoading) {
        return
      }

      if (!(startItem <= total)) return setHasMore(false)
      const scrollHeight = e.target.documentElement.scrollHeight
      const currentHeight = Math.ceil(
        e.target.documentElement.scrollTop + window.innerHeight
      )
      if (currentHeight + 1 >= scrollHeight) {
        setIsLoading(true)
        await loadMore(startItem)
        setStartItem(startItem + step)
        setIsLoading(false)
      }
    },
    [loadMore, startItem, step, total, isLoading]
  )

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])
  return [hasMore, isLoading]
}

export default useInfiniteScroll
