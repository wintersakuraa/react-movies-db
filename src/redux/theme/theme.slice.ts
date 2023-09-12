import { createSlice, isFulfilled, isRejected } from '@reduxjs/toolkit'

import { getFromLocalStorage, setToLocalStorage } from './theme.thunk'

import { ThemeMode } from 'src/types'

interface ThemeState {
  mode: ThemeMode
  error: string
}

const initialState: ThemeState = {
  mode: ThemeMode.DARK,
  error: '',
}

export const themeSlice = createSlice({
  name: 'themeSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addMatcher(
        isFulfilled(getFromLocalStorage, setToLocalStorage),
        (state, action) => {
          state.mode = action.payload
        },
      )
      .addMatcher(
        isRejected(getFromLocalStorage, setToLocalStorage),
        (state, action) => {
          state.error = (action.payload as Error)?.message || ''
        },
      ),
})

const { reducer: themeReducer, actions } = themeSlice
const themeActions = {
  ...actions,
  getFromLocalStorage,
  setToLocalStorage,
}

export { themeReducer, themeActions }
