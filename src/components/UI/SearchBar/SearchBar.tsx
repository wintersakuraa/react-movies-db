import SearchIcon from '@mui/icons-material/Search'

import { Search, SearchIconWrapper, StyledInputBase } from './SearchBar.styles'

// interface SearchBarProps {}

export const SearchBar = () => {
  return (
    <Search sx={{ width: 1 / 3 }}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>

      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  )
}
