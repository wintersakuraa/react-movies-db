import { CreditsResponse } from './cast.types'
import { Genre } from './genre.types'
import { VideoResponse } from './video.types'

export interface Movie {
  id: number
  title: string
  genre_ids: number[]
  popularity: number
  poster_path: string
  release_date: string
  vote_average: number
  vote_count: number
}

export interface MovieDetails {
  id: number
  title: string
  backdrop_path: string
  budget: number
  genres: Genre[]
  homepage: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  runtime: number
  status: string
  tagline: string
  video: boolean
  vote_average: number
  vote_count: number
  videos: VideoResponse
  credits: CreditsResponse
}

export interface MoviesQueryParams {
  sort_by: string
  include_adult: boolean
  include_video: boolean
  page?: number
  language?: string
  with_genres?: string
}

export enum MoviesSortOptions {
  POPULARITY = 'popularity',
  REVENUE = 'revenue',
  VOTE_AVERAGE = 'vote_average',
  PRIMARY_RELEASE_DATE = 'primary_release_date',
}
