export const API_ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN
export const BASE_URL = process.env.REACT_APP_API_URL

export const URLS = {
  movies: {
    all: '/discover/movie',
    popular: '/movie/popular',
    topRated: '/movie/top_rated',
    upcoming: '/movie/upcoming',
    byId: (id: number): string => `/movie/${id}`,
  },
  genres: {
    movieList: 'genre/movie/list',
  },
  search: {
    movie: 'search/movie',
  },
}
