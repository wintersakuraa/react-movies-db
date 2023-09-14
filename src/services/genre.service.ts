import { apiService } from './api.service'

import { URLS } from 'src/constants'
import { GenresResponse, Response } from 'src/types'

export const genreService = {
  getAll(): Response<GenresResponse> {
    return apiService.get(URLS.genres.movieList)
  },
}
