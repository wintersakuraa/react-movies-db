const getMovieById = (id: number): string => `/movie/${id}`

export const API_ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN
export const BASE_URL = process.env.REACT_APP_API_URL

export const URLS = {
  movies: {
    base: '/discover/movie',
    byId: getMovieById,
    cast: (id: number): string => `${getMovieById(id)}/credits`,
  },
  genres: 'genre/movie/list',
  search: 'search/movie',
}
