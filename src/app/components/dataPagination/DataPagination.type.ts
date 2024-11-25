import { TParliamentarian } from "../../types/Parliamentarian.type"

export type DataPaginationProps = {
  data: TParliamentarian[]
  itemsPerPage: number
  setCurrentData: (data: TParliamentarian[]) => void
}
