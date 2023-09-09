import HdIcon from '@mui/icons-material/Hd'
import { Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import { PATHS } from 'src/constants'

export const DesktopNav = () => {
  return (
    <>
      <HdIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

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
    </>
  )
}
