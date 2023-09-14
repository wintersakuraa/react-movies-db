import { FC } from 'react'

import StarIcon from '@mui/icons-material/Star'
import { Rating } from '@mui/material'

interface StarRatingProps {
  rating: number
}
export const StarRating: FC<StarRatingProps> = ({ rating }) => {
  return (
    <Rating
      emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      sx={{ fontSize: '1.5rem' }}
      value={rating}
      precision={0.5}
      readOnly
      max={10}
    />
  )
}
