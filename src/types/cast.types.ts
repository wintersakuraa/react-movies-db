export interface CastMember {
  id: number
  gender: number
  name: string
  popularity: number
  profile_path: string
  character: string
  order: number
}

export interface CastResponse {
  id: number
  cast: CastMember[]
}
