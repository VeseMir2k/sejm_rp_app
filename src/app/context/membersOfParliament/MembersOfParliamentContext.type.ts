import { MemberOfParliament } from "../../types/MemberOfParliament.type"

export type MembersOfParliamentPropsType = {
  children: React.ReactNode
}

export type MembersOfParliamentContextType = {
  MembersOfParliamentData: MemberOfParliament[] | null
  isLoadingMembersOfParliament: boolean
  error: string | null
  MembersOfParliamentFetchData: () => void
}
