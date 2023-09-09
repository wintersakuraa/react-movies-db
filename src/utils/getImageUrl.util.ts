const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/original'

export const getImageUrl = (path: string | null): string => {
  if (!path) return ' '
  return `${BASE_IMAGE_URL}${path}`
}
