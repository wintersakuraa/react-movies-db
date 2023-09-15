import { createAsyncThunk } from '@reduxjs/toolkit'

import { moviesService, genreService } from 'src/services'
import {
  Movie,
  MovieDetails,
  MoviesQueryParams,
  MoviesSortOptions,
  PaginationResult,
  GenresResponse,
} from 'src/types'

export const getAll = createAsyncThunk<
  PaginationResult<Movie>,
  Partial<MoviesQueryParams> | undefined
>('movieSlice/getAll', async (params, { rejectWithValue }) => {
  try {
    const defaultParams: MoviesQueryParams = {
      include_adult: false,
      include_video: false,
      sort_by: `${MoviesSortOptions.POPULARITY}.desc`,
    }

    const { data } = await moviesService.getAll({ ...defaultParams, ...params })
    return data
  } catch (error) {
    return rejectWithValue(error)
  }
})

export const getPopular = createAsyncThunk<Movie[]>(
  'movieSlice/getPopular',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await moviesService.getPopular()
      return data.results
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const getTopRated = createAsyncThunk<Movie[]>(
  'movieSlice/getTopRated',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await moviesService.getTopRated()
      return data.results
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const getUpcoming = createAsyncThunk<Movie[]>(
  'movieSlice/getUpcoming',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await moviesService.getUpcoming()
      return data.results
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const getById = createAsyncThunk<MovieDetails, number>(
  'movieSlice/getById',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await moviesService.getById(id)
      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const getGenres = createAsyncThunk<GenresResponse>(
  'movieSlice/getGenres',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await genreService.getAll()
      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const searchMovie = createAsyncThunk<PaginationResult<Movie>, string>(
  'movieSlice/searchMovie',
  async (searchTerm, { rejectWithValue }) => {
    try {
      const { data } = await moviesService.searchMovie(searchTerm)
      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)
