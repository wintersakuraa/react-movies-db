import { FC, ReactNode } from 'react'

import { Divider, Typography } from '@mui/material'

interface MovieInfoFieldProps {
  title: string
  info: string | ReactNode
}

export const MovieInfoField: FC<MovieInfoFieldProps> = ({ title, info }) => {
  return (
    <>
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        {title}:
      </Typography>

      <Typography
        component={typeof info === 'string' ? 'h6' : 'div'}
        variant="body1"
        gutterBottom
      >
        {info}
      </Typography>

      <Divider sx={{ mb: 2 }} />
    </>
  )
}
