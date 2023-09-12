import 'react-multi-carousel/lib/styles.css'

import { Box, Typography } from '@mui/material'

import { CastMemberCard } from './CastMemberCard'

import { Slider } from 'src/components'
import { useAppSelector } from 'src/hooks'
import { CastMember } from 'src/types'

export const CastGallery = () => {
  const { cast } = useAppSelector((state) => state.movies)

  return (
    <Box className="parent">
      <Typography variant="h3" marginTop={5} gutterBottom>
        Cast
      </Typography>

      <Slider>
        {cast.map((member: CastMember) => (
          <CastMemberCard key={member.id} member={member} />
        ))}
      </Slider>
    </Box>
  )
}
