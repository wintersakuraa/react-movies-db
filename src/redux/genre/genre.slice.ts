import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { getAll } from './genre.thunks'

import { Genre } from 'src/types'

interface GenreState {
  genres: Genre[]
  selectedGenreIds: string[]
  isLoading: boolean
  error: string
}

const initialState: GenreState = {
  genres: [],
  selectedGenreIds: [],
  isLoading: false,
  error: '',
}

export const genreSlice = createSlice({
  name: 'genreSlice',
  initialState,
  reducers: {
    setSelectedGenreIds: (state, action: PayloadAction<string[]>) => {
      state.selectedGenreIds = action.payload
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getAll.fulfilled, (state, action) => {
        state.genres = action.payload.genres
        state.isLoading = false
      })
      .addCase(getAll.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAll.rejected, (state, action) => {
        const axiosError = action.payload as AxiosError

        state.error = axiosError.message
        state.isLoading = false
      }),
})

const { reducer: genreReducer, actions } = genreSlice
const genreActions = {
  ...actions,
  getAll,
}

export { genreReducer, genreActions }
