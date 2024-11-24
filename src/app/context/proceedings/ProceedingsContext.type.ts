import { Proceeding } from "../../types/Proceeding.type"

export type ProceedingsPropsType = {
  children: React.ReactNode
}

export type ProceedingsContextType = {
  ProceedingsData: Proceeding[] | null
  isLoadingProceedings: boolean
  ProceedingsFetchData: () => void
}
