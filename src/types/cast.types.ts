interface Credit {
  id: number
  gender: number
  name: string
  popularity: number
  profile_path: string
}
export interface CastMember extends Credit {
  cast_id: number
  character: string
}

export interface CrewMember extends Credit {
  credit_id: string
  department: string
  job: string
}

export interface CreditsResponse {
  cast: CastMember[]
  crew: CrewMember[]
}
