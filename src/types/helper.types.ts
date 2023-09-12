export enum LocalStorageKey {
  MODE = 'mode',
}

export enum ThemeMode {
  DARK = 'dark',
  LIGHT = 'light',
}

export enum SearchParams {
  PAGE = 'page',
}

export interface PaginationResult<T> {
  page: number
  total_pages: number
  results: T[]
}
