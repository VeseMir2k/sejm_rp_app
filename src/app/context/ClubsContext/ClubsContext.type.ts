import { TClub } from "../../types/Club.type"

export type TClubsProviderProps = {
  children: React.ReactNode
}

export type TClubsContext = {
  clubs: TClub[] | null
  isLoading: boolean
  handleGetClubs: () => void
}
