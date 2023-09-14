import { createBrowserRouter, Navigate } from 'react-router-dom'

import { PATHS } from './constants'
import { MainLayout } from './layouts'
import { AllMoviesPage, MainPage, MovieDetailsPage } from './pages'

export const router = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={PATHS.movies.base} />,
      },
      {
        path: PATHS.movies.base,
        element: <MainPage />,
      },
      {
        path: PATHS.movies.all,
        element: <AllMoviesPage />,
      },

      {
        path: `${PATHS.movies.base}/:id`,
        element: <MovieDetailsPage />,
      },
    ],
  },
])
