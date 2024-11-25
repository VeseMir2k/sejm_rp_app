import { MemberOfParliament } from "../../types/Parliamentarians.type"

export type DataPaginationProps = {
  data: MemberOfParliament[]
  itemsPerPage: number
  setCurrentData: (data: MemberOfParliament[]) => void
}
