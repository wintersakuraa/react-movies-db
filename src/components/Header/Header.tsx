import { ChangeEvent } from 'react'

import MovieFilterIcon from '@mui/icons-material/MovieFilter'
import WhatshotIcon from '@mui/icons-material/Whatshot'
import { AppBar, Avatar, Box, Container, Toolbar, Tooltip } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

import { DesktopNav } from './DesktopNav'
import { MobileNav } from './MobileNav'

import user from 'src/assets/images/user.png'
import { SearchBar, ThemeSwitcher } from 'src/components'
import { PATHS } from 'src/constants'
import { useAppDispatch, useAppSelector } from 'src/hooks'
import { movieActions, themeActions } from 'src/redux'
import { NavbarElement, ThemeMode } from 'src/types'

const navbarItems: NavbarElement[] = [
  {
    title: 'Main',
    path: PATHS.movies.base,
    icon: <WhatshotIcon />,
  },
  {
    title: 'All Movies',
    path: PATHS.movies.all,
    icon: <MovieFilterIcon />,
  },
]

export const Header = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { mode } = useAppSelector((state) => state.theme)
  const { selectedGenreIds } = useAppSelector((state) => state.genres)

  const onInputChange = (searchValue: string) => {
    if (!searchValue) {
      dispatch(movieActions.getAll())
      return
    }

    dispatch(movieActions.setSearchTerm(searchValue))
    dispatch(movieActions.searchMovie(searchValue))
    if (pathname !== PATHS.movies.all) navigate(PATHS.movies.all)
  }

  const handleThemeSwitch = (event: ChangeEvent<HTMLInputElement>) => {
    const mode = event.target.checked ? ThemeMode.DARK : ThemeMode.LIGHT
    dispatch(themeActions.setToLocalStorage(mode))
  }

  return (
    <AppBar
      position="static"
      sx={{ ...(mode === ThemeMode.LIGHT && { bgcolor: 'primary.dark' }) }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box
            sx={{
              flexGrow: { xs: 0, md: 0 },
              display: 'flex',
              justifyContent: { xs: 'center', md: 'space-between' },
              alignItems: 'center',
            }}
          >
            <DesktopNav navbarItems={navbarItems} />
            <MobileNav
              navbarItems={navbarItems}
              handleThemeSwitch={handleThemeSwitch}
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <Tooltip
              title={!!selectedGenreIds.length ? 'Clear filters first' : ''}
              enterTouchDelay={0}
            >
              <span>
                <SearchBar
                  disabled={!!selectedGenreIds.length}
                  onInputChange={onInputChange}
                  sx={{ width: '100%' }}
                />
              </span>
            </Tooltip>

            <ThemeSwitcher
              checked={mode === ThemeMode.DARK}
              onChange={handleThemeSwitch}
              mode={ThemeMode.DARK}
              sx={{ m: 1, display: { xs: 'none', md: 'flex' } }}
            />

            <Tooltip title="User">
              <Avatar alt="User" src={user} />
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
