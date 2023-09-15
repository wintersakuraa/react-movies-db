export interface Video {
  id: string
  name: string
  key: string
  site: string
  size: number
  type: VideoType
  official: boolean
}

export enum VideoType {
  TRAILER = 'Trailer',
  TEASER = 'Teaser',
  FEATURETTE = 'Featurette',
  BEHIND_THE_SCENES = 'Behind the Scenes',
}

export interface VideoResponse {
  results: Video[]
}
