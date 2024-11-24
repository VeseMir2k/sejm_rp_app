import { MemberOfParliament } from "../../types/MemberOfParliament.type"

export type DataPaginationProps = {
  data: MemberOfParliament[]
  itemsPerPage: number
  setCurrentData: (data: MemberOfParliament[]) => void
}
