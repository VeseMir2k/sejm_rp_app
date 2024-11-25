import { TParliamentarian } from "../../types/Parliamentarian.type"

export type TParliamentariansProps = {
  children: React.ReactNode
}

export type TParliamentariansContext = {
  parliamentarians: TParliamentarian[] | null
  isLoading: boolean
  error: string | null
  handleGetParliamentarians: () => void
}
