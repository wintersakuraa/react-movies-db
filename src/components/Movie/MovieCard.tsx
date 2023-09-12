import { FC } from 'react'

import { ImageListItem, ImageListItemBar, Rating } from '@mui/material'

import { Image, Link } from 'src/components'
import { PATHS } from 'src/constants'
import { Movie } from 'src/types'

interface MovieCardProps {
  movie: Movie
}

export const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  const { id, title, poster_path, vote_average } = movie

  return (
    <ImageListItem
      sx={{
        '&:hover': {
          opacity: 0.7,
          transition: 'all .2s ease-in-out',
        },
      }}
    >
      <Link to={PATHS.movies.byId(id)}>
        <Image
          path={poster_path}
          alt={title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />

        <ImageListItemBar
          title={title}
          subtitle={
            <Rating value={vote_average} precision={0.5} readOnly max={10} />
          }
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.88)',
          }}
        />
      </Link>
    </ImageListItem>
  )
}
