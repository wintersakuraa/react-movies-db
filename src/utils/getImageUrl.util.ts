const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/original'

export const getImageUrl = (path: string): string => {
  return `${BASE_IMAGE_URL}${path}`
}
