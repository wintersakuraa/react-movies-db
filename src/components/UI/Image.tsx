import { CSSProperties, FC } from 'react'

import { Image as MuiImage } from 'mui-image'

import { getImageUrl } from 'src/utils'

interface ImageProps {
  alt: string
  path: string | null
  style?: CSSProperties
}

export const Image: FC<ImageProps> = ({ path, alt, style }) => {
  return (
    <MuiImage
      src={getImageUrl(path)}
      alt={alt}
      style={style}
      duration={0}
      showLoading
    />
  )
}
