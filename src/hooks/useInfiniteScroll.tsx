import { useCallback, useEffect, useState } from 'react'

const useInfiniteScroll = <T,>(
  total: number,
  step: number,
  loadMore: (start: number) => Promise<T>
) => {
  const [startItem, setStartItem] = useState<number>(step)

  const handleScroll = useCallback(
    async (e: any) => {
      if (!(startItem <= total)) return
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
  return []
}

export default useInfiniteScroll
