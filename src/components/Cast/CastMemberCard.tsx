import { FC } from 'react'

import { Box, Typography } from '@mui/material'

import { Image } from 'src/components'
import { CastMember } from 'src/types'

import 'react-multi-carousel/lib/styles.css'

interface CastMemberCardProps {
  member: CastMember
}

export const CastMemberCard: FC<CastMemberCardProps> = ({ member }) => {
  const { name, profile_path } = member

  return (
    <Box
      sx={{
        m: '0 20px',
        overflow: 'hidden',
      }}
    >
      <Image
        path={profile_path}
        alt={name}
        style={{ width: '100%', height: '100%' }}
      />

      <Typography
        gutterBottom
        sx={{ mt: 2, mb: 5 }}
        variant="h6"
        component="div"
      >
        {name}
      </Typography>
    </Box>
  )
}
