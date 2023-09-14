import { useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { CastGallery, MovieInfo, ErrorLoaderFallback } from 'src/components'
import { useAppDispatch, useAppSelector } from 'src/hooks'
import { movieActions } from 'src/redux'

export const MovieDetailsPage = () => {
  const dispatch = useAppDispatch()
  const { id: rawId } = useParams<{ id: string }>()
  const { isLoading, error } = useAppSelector((state) => state.movies)

  useEffect(() => {
    if (rawId) {
      const id = Number(rawId)

      dispatch(movieActions.getById(id))
      dispatch(movieActions.getCast(id))
    }
  }, [])

  return (
    <ErrorLoaderFallback errors={[error]} isLoading={isLoading}>
      <MovieInfo />
      <CastGallery />
    </ErrorLoaderFallback>
  )
}
