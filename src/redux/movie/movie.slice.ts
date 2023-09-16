import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
  PayloadAction,
} from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import {
  getAll,
  getById,
  getGenres,
  getPopular,
  getTopRated,
  getUpcoming,
  searchMovie,
} from './movie.thunks'

import { Genre, Movie, MovieDetails } from 'src/types'

interface MoviesState {
  movies: Movie[]
  genres: Genre[]
  selectedGenreIds: string[]
  popular: Movie[]
  topRated: Movie[]
  upcoming: Movie[]
  searchTerm: string
  movie: MovieDetails | null
  totalPages: number
  isLoading: boolean
  error: string
}

const initialState: MoviesState = {
  movies: [],
  genres: [],
  selectedGenreIds: [],
  popular: [],
  topRated: [],
  upcoming: [],
  searchTerm: '',
  movie: null,
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
    setSelectedGenreIds: (state, action: PayloadAction<string[]>) => {
      state.selectedGenreIds = action.payload
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getById.fulfilled, (state, action) => {
        state.movie = action.payload
        state.isLoading = false
      })
      .addCase(getPopular.fulfilled, (state, action) => {
        state.popular = action.payload
        state.isLoading = false
      })
      .addCase(getTopRated.fulfilled, (state, action) => {
        state.topRated = action.payload
        state.isLoading = false
      })
      .addCase(getUpcoming.fulfilled, (state, action) => {
        state.upcoming = action.payload
        state.isLoading = false
      })
      .addCase(getGenres.fulfilled, (state, action) => {
        state.genres = action.payload.genres
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
          getGenres,
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
          getGenres,
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
  getGenres,
  searchMovie,
}

export { movieReducer, movieActions }
