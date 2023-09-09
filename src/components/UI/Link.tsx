import { FC, ReactNode } from 'react'

import { Link as MuiLink } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

interface LinkProps {
  to: string
  children: ReactNode
}

export const Link: FC<LinkProps> = ({ to, children }) => {
  return (
    <MuiLink component={RouterLink} color="inherit" underline="none" to={to}>
      {children}
    </MuiLink>
  )
}
