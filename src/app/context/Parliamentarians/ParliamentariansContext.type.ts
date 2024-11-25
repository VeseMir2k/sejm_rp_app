import { TParliamentarian } from "../../types/Parliamentarian.type"

export type TParliamentariansProps = {
  children: React.ReactNode
}

export type TParliamentariansContext = {
  parliamentarians: TParliamentarian[] | null
  isLoadingParliamentarians: boolean
  errorParliamentarians: string | null
  handleGetParliamentarians: () => void
}
