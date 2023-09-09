import { createAsyncThunk } from '@reduxjs/toolkit'

import { genreService } from 'src/services'
import { GenresResponse } from 'src/types'

export const getAll = createAsyncThunk<GenresResponse>(
  'genreSlice/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await genreService.getAll()
      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)
