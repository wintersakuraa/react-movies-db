import {
  createSlice,
  isPending,
  isRejected,
  isFulfilled,
  PayloadAction,
} from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import {
  getAll,
  getById,
  getCast,
  getPopular,
  getTopRated,
  getUpcoming,
  searchMovie,
} from './movie.thunks'

import { CastMember, Movie, MovieDetails } from 'src/types'

interface MoviesState {
  movies: Movie[]
  popular: Movie[]
  topRated: Movie[]
  upcoming: Movie[]
  searchTerm: string
  movie: MovieDetails | null
  cast: CastMember[]
  totalPages: number
  isLoading: boolean
  error: string
}

const initialState: MoviesState = {
  movies: [],
  popular: [],
  topRated: [],
  upcoming: [],
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
      .addCase(getPopular.fulfilled, (state, action) => {
        const results = action.payload

        state.popular = results
        state.isLoading = false
      })
      .addCase(getTopRated.fulfilled, (state, action) => {
        const results = action.payload

        state.topRated = results
        state.isLoading = false
      })
      .addCase(getUpcoming.fulfilled, (state, action) => {
        const results = action.payload

        state.upcoming = results
        state.isLoading = false
      })
      .addMatcher(isFulfilled(getAll, searchMovie), (state, action) => {
        const { results, total_pages: totalPages } = action.payload

        state.movies = results
        state.totalPages = totalPages > 500 ? 500 : totalPages
        state.isLoading = false
      })
      .addMatcher(
        isPending(
          getAll,
          getPopular,
          getTopRated,
          getById,
          getCast,
          searchMovie,
        ),
        (state) => {
          state.isLoading = true
        },
      )
      .addMatcher(
        isRejected(
          getAll,
          getPopular,
          getTopRated,
          getById,
          getCast,
          searchMovie,
        ),
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
  getPopular,
  getTopRated,
  getUpcoming,
  getById,
  getCast,
  searchMovie,
}

export { movieReducer, movieActions }
