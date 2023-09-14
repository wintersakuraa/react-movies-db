import { useEffect } from 'react'

import { ErrorLoaderFallback, MoviesCarousel } from 'src/components'
import { useAppDispatch, useAppSelector } from 'src/hooks/redux.hooks'
import { movieActions } from 'src/redux'

export const MainPage = () => {
  const dispatch = useAppDispatch()
  const { popular, topRated, upcoming, isLoading, error } = useAppSelector(
    (state) => state.movies,
  )

  useEffect(() => {
    dispatch(movieActions.getPopular())
    dispatch(movieActions.getTopRated())
    dispatch(movieActions.getUpcoming())
  }, [])

  return (
    <ErrorLoaderFallback errors={[error]} isLoading={isLoading}>
      <MoviesCarousel title="Popular" movies={popular} />
      <MoviesCarousel title="Top Rated" movies={topRated} />
      <MoviesCarousel title="Upcoming" movies={upcoming} />
    </ErrorLoaderFallback>
  )
}
