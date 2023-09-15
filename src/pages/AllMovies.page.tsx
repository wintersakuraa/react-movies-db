import { useEffect } from 'react'

import { ImageList, SelectChangeEvent } from '@mui/material'
import { useSearchParams } from 'react-router-dom'

import {
  Card,
  ErrorLoaderFallback,
  Link,
  MultiSelect,
  Pagination,
  StarRating,
} from 'src/components'
import { PATHS } from 'src/constants'
import { useAppDispatch, useAppSelector } from 'src/hooks/redux.hooks'
import { movieActions } from 'src/redux'
import { Movie, SearchParams } from 'src/types'

export const AllMoviesPage = () => {
  const dispatch = useAppDispatch()
  const [query] = useSearchParams({ page: '1' })
  const {
    movies,
    totalPages,
    genres,
    selectedGenreIds,
    searchTerm,
    isLoading,
    error,
  } = useAppSelector((state) => state.movies)

  useEffect(() => {
    dispatch(movieActions.getGenres())
  }, [])

  useEffect(() => {
    const genreIds = selectedGenreIds.join(',')
    const page = Number(query.get(SearchParams.PAGE))

    if (searchTerm && !genreIds) {
      dispatch(movieActions.searchMovie(searchTerm))
      return
    }

    const params = {
      page: page > totalPages ? 1 : page,
      with_genres: genreIds,
    }

    dispatch(movieActions.getAll(params))
  }, [query.get(SearchParams.PAGE), selectedGenreIds])

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    dispatch(movieActions.setSelectedGenreIds(event.target.value as string[]))
  }

  const handleDelete = (value: string) => {
    dispatch(
      movieActions.setSelectedGenreIds(
        selectedGenreIds.filter((id: string) => value !== id),
      ),
    )
  }

  const handleClear = () => {
    dispatch(movieActions.setSelectedGenreIds([]))
  }

  return (
    <ErrorLoaderFallback errors={[error]} isLoading={isLoading}>
      <MultiSelect
        inputLabel="Select Genres"
        options={genres}
        selectedOptions={selectedGenreIds}
        handleChange={handleChange}
        handleDelete={handleDelete}
        handleClear={handleClear}
      />
      <ImageList
        cols={5}
        gap={20}
        sx={{
          gridTemplateColumns:
            'repeat(auto-fill, minmax(280px, 1fr))!important',
        }}
      >
        {movies.map((movie: Movie) => (
          <Link key={movie.id} to={PATHS.movies.byId(movie.id)}>
            <Card
              key={movie.id}
              title={movie.title}
              image={movie.poster_path}
              subtitle={<StarRating rating={movie.vote_average} />}
              sx={{
                '&:hover': {
                  opacity: 0.7,
                  transition: 'all .2s ease-in-out',
                },
              }}
            />
          </Link>
        ))}
      </ImageList>
      <Pagination />
    </ErrorLoaderFallback>
  )
}
