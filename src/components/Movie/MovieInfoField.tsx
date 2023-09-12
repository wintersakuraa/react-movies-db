import { FC, ReactNode } from 'react'

import { Box, Divider, SxProps, Typography } from '@mui/material'

interface MovieInfoFieldProps {
  title?: string
  withDivider?: boolean
  sx?: SxProps
  children?: ReactNode
}

export const MovieInfoField: FC<MovieInfoFieldProps> = ({
  title,
  withDivider = false,
  sx,
  children,
}) => {
  return (
    <Box sx={sx}>
      {title && (
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {title}:
        </Typography>
      )}

      <Typography
        variant="body1"
        component="div"
        gutterBottom
        sx={{ fontSize: 18 }}
      >
        {children}
      </Typography>

      {withDivider && <Divider sx={{ mb: 2 }} />}
    </Box>
  )
}
