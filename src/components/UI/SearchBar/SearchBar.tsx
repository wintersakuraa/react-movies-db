import { FC, useEffect, useState } from 'react'

import SearchIcon from '@mui/icons-material/Search'
import { SxProps } from '@mui/material'

import { Search, SearchIconWrapper, StyledInputBase } from './SearchBar.styles'

interface SearchBarProps {
  onInputChange: (searchValue: string) => void
  sx?: SxProps
  disabled?: boolean
}

export const SearchBar: FC<SearchBarProps> = ({
  onInputChange: handleSearch,
  sx,
  disabled = false,
}) => {
  const [searchValue, setSearchValue] = useState<string>('')

  useEffect(() => {
    const newTimeout = setTimeout(() => {
      handleSearch(searchValue)
    }, 700)

    return () => clearTimeout(newTimeout)
  }, [searchValue])

  return (
    <Search sx={{ width: 1 / 3, ...sx }}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>

      <StyledInputBase
        disabled={disabled}
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  )
}
