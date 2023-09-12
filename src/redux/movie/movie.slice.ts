import {
  createSlice,
  isPending,
  isRejected,
  isFulfilled,
  PayloadAction,
} from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { getAll, getById, getCast, searchMovie } from './movie.thunks'

import { CastMember, Movie, MovieDetails } from 'src/types'

interface MoviesState {
  movies: Movie[]
  searchTerm: string
  movie: MovieDetails | null
  cast: CastMember[]
  totalPages: number
  isLoading: boolean
  error: string
}

const initialState: MoviesState = {
  movies: [],
  searchTerm: '',
  movie: null,
  cast: [],
  totalPages: 0,
  isLoading: false,
  error: '',
}

export const movieSlice = createSlice({
  name: 'movieSlice',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getById.fulfilled, (state, action) => {
        state.movie = action.payload
        state.isLoading = false
      })
      .addCase(getCast.fulfilled, (state, action) => {
        state.cast = action.payload.cast
        state.isLoading = false
      })
      .addMatcher(isFulfilled(getAll, searchMovie), (state, action) => {
        const { results, total_pages: totalPages } = action.payload

        state.movies = results
        state.totalPages = totalPages > 500 ? 500 : totalPages
        state.isLoading = false
      })
      .addMatcher(isPending(getAll, getById, getCast, searchMovie), (state) => {
        state.isLoading = true
      })
      .addMatcher(
        isRejected(getAll, getById, getCast, searchMovie),
        (state, action) => {
          const axiosError = action.payload as AxiosError

          state.error = axiosError.message
          state.isLoading = false
        },
      ),
})

const { reducer: movieReducer, actions } = movieSlice
const movieActions = {
  ...actions,
  getAll,
  getById,
  getCast,
  searchMovie,
}

export { movieReducer, movieActions }
