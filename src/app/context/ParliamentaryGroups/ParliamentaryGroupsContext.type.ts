import { TParliamentaryGroup } from "../../types/ParliamentaryGroup.type"

export type TParliamentaryGroupsProviderProps = {
  children: React.ReactNode
}

export type TParliamentaryGroupsContext = {
  parliamentaryGroups: TParliamentaryGroup[] | null
  isLoadingParliamentaryGroups: boolean
  handleGetParliamentaryGroups: () => void
}
