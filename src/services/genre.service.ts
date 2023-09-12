import { apiService, Response } from './api.service'

import { URLS } from 'src/constants'
import { GenresResponse } from 'src/types/genre.types'

export const genreService = {
  getAll(): Response<GenresResponse> {
    return apiService.get(URLS.genres.movieList)
  },
}
