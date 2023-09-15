import { FC, ReactNode } from 'react'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Container } from '@mui/material'
import AliceCarousel from 'react-alice-carousel'

import 'react-alice-carousel/lib/alice-carousel.css'
import './Slider.css'

const responsive = {
  0: { items: 1 },
  512: { items: 2 },
  700: { items: 3 },
  1024: { items: 4 },
}

interface SliderProps {
  children: ReactNode[]
}

export const Slider: FC<SliderProps> = ({ children }) => {
  const renderNextButton = () => {
    return <ArrowForwardIosIcon sx={{ cursor: 'pointer' }} />
  }

  const renderPrevButton = () => {
    return <ArrowBackIosIcon sx={{ cursor: 'pointer' }} />
  }

  return (
    <Container maxWidth={false}>
      <AliceCarousel
        disableDotsControls
        keyboardNavigation
        autoPlay
        infinite
        autoPlayInterval={5000}
        responsive={responsive}
        items={children}
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
      />
    </Container>
  )
}
