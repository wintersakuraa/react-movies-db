import { ChangeEvent } from 'react'

import HdIcon from '@mui/icons-material/Hd'
import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material'
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom'

import user from '../assets/images/user.png'

import { SearchBar, ThemeSwitcher } from 'src/components'
import { PATHS } from 'src/constants'
import { useAppDispatch, useAppSelector } from 'src/hooks'
import { movieActions, themeActions } from 'src/redux'
import { ThemeMode } from 'src/types'

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
    if (pathname !== PATHS.movies.base) navigate(PATHS.movies.base)
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
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: { xs: 0, md: 1 },
              display: 'flex',
              justifyContent: { xs: 'center', md: 'space-between' },
            }}
          >
            <IconButton
              component={RouterLink}
              to={PATHS.movies.base}
              sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
            >
              <HdIcon />
            </IconButton>

            <Typography
              variant="h6"
              noWrap
              component={RouterLink}
              to={PATHS.movies.base}
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Movies DB
            </Typography>
          </Box>

          <SearchBar
            disabled={!!selectedGenreIds.length}
            onInputChange={onInputChange}
            sx={{
              flexGrow: { xs: 1, md: 0 },
            }}
          />

          <Box>
            <ThemeSwitcher
              checked={mode === ThemeMode.DARK}
              onChange={handleThemeSwitch}
              mode={ThemeMode.DARK}
              sx={{ m: 1 }}
            />
          </Box>

          <Box>
            <Tooltip title="User">
              <Avatar alt="User" src={user} />
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
