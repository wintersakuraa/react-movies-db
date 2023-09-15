import { configureStore } from '@reduxjs/toolkit'

import { movieReducer } from './movie/movie.slice'
import { themeReducer } from './theme/theme.slice'

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    theme: themeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
