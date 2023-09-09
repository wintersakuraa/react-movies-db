import { AppBar, Avatar, Box, Container, Toolbar, Tooltip } from '@mui/material'

import { DesktopNav } from './DesktopNav'

import { SearchBar } from 'src/components'

export const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <DesktopNav />
          </Box>
          <SearchBar />
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="User">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
