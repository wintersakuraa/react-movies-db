import { FC, MouseEvent } from 'react'

import HdIcon from '@mui/icons-material/Hd'
import MenuIcon from '@mui/icons-material/Menu'
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material'

import { Link } from 'src/components'

interface MobileNavProps {
  pages: []
  anchorElNav: null | HTMLElement
  handleOpenNavMenu: (event: MouseEvent<HTMLElement>) => void
  handleCloseNavMenu: (event: MouseEvent<HTMLElement>) => void
}

export const MobileNav: FC<MobileNavProps> = ({
  pages,
  anchorElNav,
  handleOpenNavMenu,
  handleCloseNavMenu,
}) => {
  return (
    <>
      <HdIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>

        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {pages.map((page: any) => (
            <MenuItem key={page.link} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                <Link to={page.link}>{page.title}</Link>
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  )
}
