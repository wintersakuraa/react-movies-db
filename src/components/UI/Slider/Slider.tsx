import { FC, ReactNode } from 'react'

import Carousel from 'react-multi-carousel'

import 'react-multi-carousel/lib/styles.css'
import './Slider.css'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
}

interface SliderProps {
  children: ReactNode
}

export const Slider: FC<SliderProps> = ({ children }) => {
  return (
    <Carousel
      responsive={responsive}
      swipeable={true}
      draggable={false}
      showDots={true}
      infinite={true}
      partialVisible={false}
      dotListClass="custom-dot-list-style"
    >
      {children}
    </Carousel>
  )
}
