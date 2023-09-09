import { Chip, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { ErrorFallback, Image, MovieInfoField } from 'src/components'
import { PATHS } from 'src/constants'
import { useAppDispatch, useAppSelector } from 'src/hooks'
import { genreActions } from 'src/redux'
import { Genre } from 'src/types'
import { formatMovieRuntime } from 'src/utils'

export const MovieInfo = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { movie } = useAppSelector((state) => state.movies)

  if (!movie) return <ErrorFallback errorMessage={'No movie'} />

  const {
    title,
    tagline,
    genres,
    runtime,
    overview,
    release_date,
    poster_path,
  } = movie

  const handleClick = (genre: Genre) => {
    dispatch(genreActions.setSelectedGenreIds([String(genre.id)]))
    navigate(PATHS.movies.base)
  }

  return (
    <Grid textAlign="left" container spacing={5}>
      <Grid item md={3}>
        {poster_path && (
          <Image path={poster_path} alt={title} style={{ width: '100%' }} />
        )}
      </Grid>

      <Grid item md={9}>
        <Typography variant="h3" gutterBottom>
          {title}
        </Typography>

        {overview && <MovieInfoField title="Overview" info={overview} />}
        {tagline && <MovieInfoField title="Tagline" info={tagline} />}

        <MovieInfoField title="Duration" info={formatMovieRuntime(runtime)} />
        <MovieInfoField
          title="Release Date"
          info={new Date(release_date).toLocaleDateString()}
        />

        {genres.length && (
          <MovieInfoField
            title="Genres"
            info={genres.map((genre: Genre) => (
              <Chip
                color="warning"
                variant="outlined"
                onClick={() => handleClick(genre)}
                key={genre.id}
                label={genre.name}
                sx={{ mr: 1 }}
              />
            ))}
          />
        )}
      </Grid>
    </Grid>
  )
}
