import { SelectChangeEvent } from "@mui/material"
import { TParliamentaryGroup } from "@/app/types/ParliamentaryGroup.type"

export type ClubSelectProps = {
  selectClub: string
  handleSelect: (event: SelectChangeEvent) => void
  data: TParliamentaryGroup[] | null
}
