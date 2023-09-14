import { FC, ReactNode } from 'react'

import { ImageListItem, ImageListItemBar, SxProps } from '@mui/material'

import { Image } from 'src/components'

import 'react-multi-carousel/lib/styles.css'

interface CardProps {
  image: string
  title: string
  subtitle?: ReactNode
  sx?: SxProps
}

export const Card: FC<CardProps> = ({ image, title, subtitle, sx }) => {
  return (
    <ImageListItem sx={{ ...sx }}>
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
