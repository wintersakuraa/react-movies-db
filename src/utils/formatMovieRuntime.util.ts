export const formatMovieRuntime = (runtime: number): string => {
  const hours = Math.floor(runtime / 60) + 'h'
  const minutes = (runtime % 60) + 'm'

  return `${hours} ${minutes}`
}
