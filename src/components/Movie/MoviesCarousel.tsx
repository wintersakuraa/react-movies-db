import { FC } from 'react'

import { Box, Typography } from '@mui/material'

import { Card, Link, Slider, StarRating } from 'src/components'
import { PATHS } from 'src/constants'
import { Movie } from 'src/types'

interface MoviesCarouselProps {
  title: string
  movies: Movie[]
}

export const MoviesCarousel: FC<MoviesCarouselProps> = ({ title, movies }) => {
  return (
    <Box mb={5}>
      <Typography variant="h5" fontWeight="bold" textAlign="start" mb={3}>
        {title}:
      </Typography>

      <Slider>
        {movies.map((movie: Movie) => (
          <Link key={movie.id} to={PATHS.movies.byId(movie.id)}>
            <Card
              title={movie.title}
              image={movie.poster_path}
              subtitle={<StarRating rating={movie.vote_average} />}
              sx={{
                '&:hover': {
                  opacity: 0.7,
                  transition: 'all .2s ease-in-out',
                },
              }}
            />
          </Link>
        ))}
      </Slider>
    </Box>
  )
}
