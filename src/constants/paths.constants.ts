const getPathById = (root: string, id: number): string => `${root}/${id}`

const MOVIES_ROOT = '/movies'

export const PATHS = {
  movies: {
    base: MOVIES_ROOT,
    byId: (id: number): string => getPathById(MOVIES_ROOT, id),
  },
}
