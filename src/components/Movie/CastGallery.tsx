import { Box, Typography } from '@mui/material'

import { Card, ErrorFallback, Slider } from 'src/components'
import { useAppSelector } from 'src/hooks'
import { CastMember } from 'src/types'

export const CastGallery = () => {
  const { movie } = useAppSelector((state) => state.movies)

  if (!movie) return <ErrorFallback errorMessage={'No movie'} />

  return (
    <Box>
      <Typography variant="h3" marginTop={5} gutterBottom>
        Cast
      </Typography>

      <Slider>
        {movie?.credits.cast.map((member: CastMember) => (
          <Card
            key={member.id}
            title={member.name}
            image={member.profile_path}
            sx={{
              height: '0.7rem',
              overflow: 'hidden',
            }}
          />
        ))}
      </Slider>
    </Box>
  )
}
