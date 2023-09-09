import { FC } from 'react'

import { Box, Typography } from '@mui/material'

interface ErrorFallbackProps {
  errorMessage: string
}

export const ErrorFallback: FC<ErrorFallbackProps> = ({ errorMessage }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '80vh',
      }}
    >
      <Typography variant="h1" style={{ color: 'white' }}>
        Error
      </Typography>

      <Typography variant="h6" style={{ color: 'white' }}>
        {errorMessage}
      </Typography>
    </Box>
  )
}
