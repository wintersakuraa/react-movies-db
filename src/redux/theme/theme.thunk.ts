import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThemeMode, LocalStorageKey } from 'src/types'

export const getFromLocalStorage = createAsyncThunk<ThemeMode>(
  'themeSlice/getFromLocalStorage',
  (_, { rejectWithValue }) => {
    try {
      const mode = localStorage.getItem(LocalStorageKey.MODE) || ThemeMode.DARK
      return mode as ThemeMode
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const setToLocalStorage = createAsyncThunk<ThemeMode, ThemeMode>(
  'themeSlice/setToLocalStorage',
  (mode, { rejectWithValue }) => {
    try {
      localStorage.setItem(LocalStorageKey.MODE, mode)
      return mode
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)
