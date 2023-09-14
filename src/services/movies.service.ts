import { apiService } from './api.service'

import { URLS } from 'src/constants'
import {
  CastResponse,
  Movie,
  MovieDetails,
  MoviesQueryParams,
  PaginationResult,
  Response,
} from 'src/types'

export const moviesService = {
  getAll(params?: MoviesQueryParams): Response<PaginationResult<Movie>> {
    return apiService.get(URLS.movies.all, { params })
  },
  getPopular(): Response<PaginationResult<Movie>> {
    return apiService.get(URLS.movies.popular)
  },
  getTopRated(): Response<PaginationResult<Movie>> {
    return apiService.get(URLS.movies.topRated)
  },
  getUpcoming(): Response<PaginationResult<Movie>> {
    return apiService.get(URLS.movies.upcoming)
  },
  getById(id: number): Response<MovieDetails> {
    return apiService.get(URLS.movies.byId(id))
  },
  getCast(id: number): Response<CastResponse> {
    return apiService.get(URLS.movies.cast(id))
  },
  searchMovie(query: string): Response<PaginationResult<Movie>> {
    return apiService.get(URLS.search.movie, { params: { query } })
  },
}
