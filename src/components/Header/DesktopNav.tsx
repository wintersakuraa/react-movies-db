import { FC } from 'react'

import { Box, Button, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import { Link } from 'src/components'
import { PATHS } from 'src/constants'
import { NavbarElement } from 'src/types'

export interface DesktopNavProps {
  navbarItems: NavbarElement[]
}

export const DesktopNav: FC<DesktopNavProps> = ({ navbarItems }) => {
  return (
    <>
      <Typography
        variant="h6"
        noWrap
        component={RouterLink}
        to={PATHS.movies.base}
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontWeight: 700,
          letterSpacing: '.2rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        Movies DB
      </Typography>

      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {navbarItems.map((item) => (
          <Link to={item.path} key={item.path}>
            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
              {item.title}
            </Button>
          </Link>
        ))}
      </Box>
    </>
  )
}
