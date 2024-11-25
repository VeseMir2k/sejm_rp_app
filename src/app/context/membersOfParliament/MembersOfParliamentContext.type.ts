import { TMemberOfParliament } from "../../types/MemberOfParliament.type"

export type TMembersOfParliamentProps = {
  children: React.ReactNode
}

export type TMembersOfParliamentContext = {
  membersOfParliament: TMemberOfParliament[] | null
  isLoading: boolean
  error: string | null
  handleGetMembersOfParliament: () => void
}
