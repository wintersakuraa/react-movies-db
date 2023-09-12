import { ChangeEvent } from 'react'

import { Box, Pagination as MuiPagination } from '@mui/material'
import { useSearchParams } from 'react-router-dom'

import { useAppSelector } from 'src/hooks/redux.hooks'
import { SearchParams } from 'src/types'

export const Pagination = () => {
  const { totalPages } = useAppSelector((state) => state.movies)
  const [query, setQuery] = useSearchParams({ page: '1' })

  const handlePageChange = (_: ChangeEvent<unknown>, page: number) => {
    setQuery({ page: String(page) })
  }

  return (
    <>
      {totalPages > 1 ? (
        <Box
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            my: 5,
          }}
        >
          <MuiPagination
            page={Number(query.get(SearchParams.PAGE))}
            onChange={handlePageChange}
            count={totalPages}
            size="large"
          />
        </Box>
      ) : null}
    </>
  )
}
