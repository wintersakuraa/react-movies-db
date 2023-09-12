import { useEffect } from 'react'

import { ImageList, SelectChangeEvent } from '@mui/material'
import { useSearchParams } from 'react-router-dom'

import {
  ErrorLoaderFallback,
  MultiSelect,
  MovieCard,
  Pagination,
} from 'src/components'
import { useAppDispatch, useAppSelector } from 'src/hooks/redux.hooks'
import { genreActions, movieActions } from 'src/redux'
import { Movie, SearchParams } from 'src/types'

export const MoviesPage = () => {
  const dispatch = useAppDispatch()
  const [query] = useSearchParams({ page: '1' })
  const {
    movies,
    totalPages,
    searchTerm,
    isLoading: isLoadingMovies,
    error: movieError,
  } = useAppSelector((state) => state.movies)
  const {
    genres,
    selectedGenreIds,
    isLoading: isLoadingGenres,
    error: genreError,
  } = useAppSelector((state) => state.genres)

  useEffect(() => {
    dispatch(genreActions.getAll())
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
    dispatch(genreActions.setSelectedGenreIds(event.target.value as string[]))
  }

  const handleDelete = (value: string) => {
    dispatch(
      genreActions.setSelectedGenreIds(
        selectedGenreIds.filter((id: string) => value !== id),
      ),
    )
  }

  const handleClear = () => {
    dispatch(genreActions.setSelectedGenreIds([]))
  }

  return (
    <ErrorLoaderFallback
      errors={[movieError, genreError]}
      isLoading={isLoadingMovies || isLoadingGenres}
    >
      <MultiSelect
        inputLable="Select Genres"
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
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ImageList>
      <Pagination />
    </ErrorLoaderFallback>
  )
}
