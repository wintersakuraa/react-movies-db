import { createSlice, isPending, isRejected } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { getAll, getById, getCast } from './movie.thunks'

import { CastMember, Movie, MovieDetails } from 'src/types'

interface MoviesState {
  movies: Movie[]
  movie: MovieDetails | null
  cast: CastMember[]
  totalPages: number
  isLoading: boolean
  error: string
}

const initialState: MoviesState = {
  movies: [],
  movie: null,
  cast: [],
  totalPages: 0,
  isLoading: false,
  error: '',
}

export const movieSlice = createSlice({
  name: 'movieSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getAll.fulfilled, (state, action) => {
        const { results, total_pages: totalPages } = action.payload

        state.movies = results
        state.totalPages = totalPages > 500 ? 500 : totalPages
        state.isLoading = false
      })
      .addCase(getById.fulfilled, (state, action) => {
        state.movie = action.payload
        state.isLoading = false
      })
      .addCase(getCast.fulfilled, (state, action) => {
        state.cast = action.payload.cast
        state.isLoading = false
      })
      .addMatcher(isPending(getAll, getById, getCast), (state) => {
        state.isLoading = true
      })
      .addMatcher(isRejected(getAll, getById, getCast), (state, action) => {
        const axiosError = action.payload as AxiosError

        state.error = axiosError.message
        state.isLoading = false
      }),
})

const { reducer: movieReducer, actions } = movieSlice
const movieActions = {
  ...actions,
  getAll,
  getById,
  getCast,
}

export { movieReducer, movieActions }
