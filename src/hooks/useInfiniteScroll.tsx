import { useCallback, useEffect, useState } from 'react'
type State = [boolean]

const useInfiniteScroll = <T,>(
  total: number,
  step: number,
  loadMore: (start: number) => Promise<T>
): State => {
  const [startItem, setStartItem] = useState<number>(step)
  const [hasMore, setHasMore] = useState(true)

  const handleScroll = useCallback(
    async (e: any) => {
      if (!(startItem <= total)) return setHasMore(false)
      const scrollHeight = e.target.documentElement.scrollHeight
      const currentHeight = Math.ceil(
        e.target.documentElement.scrollTop + window.innerHeight
      )
      if (currentHeight + 1 >= scrollHeight) {
        await loadMore(startItem)
        setStartItem(startItem + step)
      }
    },
    [loadMore, startItem, step, total]
  )

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])
  return [hasMore]
}

export default useInfiniteScroll
