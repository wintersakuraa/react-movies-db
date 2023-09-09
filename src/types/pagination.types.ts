export interface PaginationResult<T> {
  page: number
  total_pages: number
  results: T[]
}
