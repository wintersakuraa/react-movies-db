import { configureStore } from '@reduxjs/toolkit'

import { genreReducer } from './genre/genre.slice'
import { movieReducer } from './movie/movie.slice'
import { themeReducer } from './theme/theme.slice'

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    genres: genreReducer,
    theme: themeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
