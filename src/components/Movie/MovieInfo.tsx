import { Box, Chip, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import {
  ErrorFallback,
  Image,
  MovieInfoField,
  StarRating,
} from 'src/components'
import { PATHS } from 'src/constants'
import { useAppDispatch, useAppSelector } from 'src/hooks'
import { movieActions } from 'src/redux'
import { Genre, ThemeMode } from 'src/types'
import { formatMovieRuntime } from 'src/utils'

export const MovieInfo = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { movie } = useAppSelector((state) => state.movies)
  const { mode } = useAppSelector((state) => state.theme)

  if (!movie) return <ErrorFallback errorMessage={'No movie'} />

  const {
    title,
    tagline,
    genres,
    runtime,
    overview,
    release_date,
    backdrop_path,
    vote_average,
  } = movie

  const handleClick = (genre: Genre) => {
    dispatch(movieActions.setSelectedGenreIds([String(genre.id)]))
    navigate(PATHS.movies.all)
  }

  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          width: '100vw',
          justifyContent: 'center',
          left: 'calc(-50vw + 50%)',
          top: -48,
          boxShadow: '0 10px 20px rgba(0, 0, 0, 1), 0 6px 6px rgba(0, 0, 0, 1)',
        }}
      >
        <Box
          sx={{
            zIndex: 5,
            position: 'absolute',
            height: '100%',
            width: '100%',
            boxShadow: 'inset 0px -120px 30px 0px #0000008c',
          }}
        ></Box>
        <Typography
          sx={{
            fontWeight: 'bold',
            position: 'absolute',
            bottom: 0,
            zIndex: 10,
            fontSize: {
              md: '3.75rem',
              xs: '1.5rem',
            },
            lineHeight: {
              md: 1,
              xs: '2rem',
            },
            ...(mode === ThemeMode.LIGHT && { color: 'white' }),
          }}
          variant="h3"
          gutterBottom
        >
          {title}
          {tagline && <MovieInfoField withDivider>{tagline}</MovieInfoField>}
        </Typography>

        <Image
          alt={title}
          path={backdrop_path}
          style={{
            maxHeight: '82vh',
          }}
        />
      </Box>

      {overview && <MovieInfoField sx={{ mb: 5 }}>{overview}</MovieInfoField>}

      <MovieInfoField title="Duration" withDivider>
        {formatMovieRuntime(runtime)}
      </MovieInfoField>

      <MovieInfoField title="Release Date" withDivider>
        <Chip
          color="primary"
          variant="outlined"
          label={new Date(release_date).toLocaleDateString()}
        />
      </MovieInfoField>

      {!!genres.length && (
        <MovieInfoField title="Genres" withDivider>
          {genres.map((genre: Genre) => (
            <Chip
              color="warning"
              variant="outlined"
              onClick={() => handleClick(genre)}
              key={genre.id}
              label={genre.name}
              sx={{ mr: 1, mt: 1 }}
            />
          ))}
        </MovieInfoField>
      )}

      <MovieInfoField title="Rating">
        <StarRating rating={vote_average} />
      </MovieInfoField>
    </Box>
  )
}
