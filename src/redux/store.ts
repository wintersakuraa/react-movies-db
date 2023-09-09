import { configureStore } from '@reduxjs/toolkit'

import { genreReducer } from './genre/genre.slice'
import { movieReducer } from './movie/movie.slice'

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    genres: genreReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
