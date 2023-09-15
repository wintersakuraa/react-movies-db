import { FC, ReactNode } from 'react'

import { ImageListItem, ImageListItemBar, SxProps } from '@mui/material'

import { Image } from 'src/components'

interface CardProps {
  image: string
  title: string
  subtitle?: ReactNode
  sx?: SxProps
}

export const Card: FC<CardProps> = ({ image, title, subtitle, sx }) => {
  return (
    <ImageListItem component="span" sx={{ ...sx, m: '0 10px 10px 10px' }}>
      <Image
        path={image}
        alt={title}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '10px',
        }}
      />

      <ImageListItemBar
        title={title}
        subtitle={subtitle}
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.65)',
          borderBottomRightRadius: '10px',
          borderBottomLeftRadius: '10px',
        }}
      />
    </ImageListItem>
  )
}
