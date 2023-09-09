import { createAsyncThunk } from '@reduxjs/toolkit'

import { moviesService } from 'src/services'
import {
  CastResponse,
  Movie,
  MovieDetails,
  MoviesQueryParams,
  MoviesSortOptions,
  PaginationResult,
} from 'src/types'

export const getAll = createAsyncThunk<
  PaginationResult<Movie>,
  Partial<MoviesQueryParams>
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

export const getCast = createAsyncThunk<CastResponse, number>(
  'movieSlice/getCast',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await moviesService.getCast(id)
      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)
