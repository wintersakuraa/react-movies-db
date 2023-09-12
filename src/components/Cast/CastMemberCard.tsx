import { FC } from 'react'

import { ImageListItem, ImageListItemBar } from '@mui/material'

import { Image } from 'src/components'
import { CastMember } from 'src/types'

import 'react-multi-carousel/lib/styles.css'

interface CastMemberCardProps {
  member: CastMember
}

export const CastMemberCard: FC<CastMemberCardProps> = ({ member }) => {
  const { name, profile_path } = member

  return (
    <ImageListItem
      component="span"
      sx={{
        m: '0 20px 50px 0',
        height: '0.8rem',
        overflow: 'hidden',
      }}
    >
      <Image
        path={profile_path}
        alt={name}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />

      <ImageListItemBar
        title={name}
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.88)',
        }}
      />
    </ImageListItem>
  )
}
