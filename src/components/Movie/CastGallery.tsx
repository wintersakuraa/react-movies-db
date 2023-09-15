import 'react-multi-carousel/lib/styles.css'

import { Box, Typography } from '@mui/material'

import { Card, Slider } from 'src/components'
import { useAppSelector } from 'src/hooks'
import { CastMember } from 'src/types'

export const CastGallery = () => {
  const { movie } = useAppSelector((state) => state.movies)

  return (
    <Box className="parent">
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
              m: '0 10px 50px 10px',
              height: '0.7rem',
              overflow: 'hidden',
            }}
          />
        ))}
      </Slider>
    </Box>
  )
}
