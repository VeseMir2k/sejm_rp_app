import { Club } from "../../types/Club.type"

export type ClubsPropsType = {
  children: React.ReactNode
}

export type ClubsContextType = {
  clubsData: Club[] | null
  isLoadingClubs: boolean
  clubsFetchData: () => void
}
