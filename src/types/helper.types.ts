import { ReactElement } from 'react'

import { SvgIconProps } from '@mui/material'
import { AxiosResponse } from 'axios'

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

export interface NavbarElement {
  title: string
  path: string
  icon: ReactElement<SvgIconProps>
}

export interface PaginationResult<T> {
  page: number
  total_pages: number
  results: T[]
}

export type Response<T> = Promise<AxiosResponse<T>>
