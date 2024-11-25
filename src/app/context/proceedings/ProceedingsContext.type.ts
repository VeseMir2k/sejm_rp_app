import { TProceeding } from "../../types/Proceeding.type"

export type TProceedingsProps = {
  children: React.ReactNode
}

export type TProceedingsContext = {
  proceedings: TProceeding[] | null
  isLoadingProceedings: boolean
  handleGetProceedings: () => void
}
