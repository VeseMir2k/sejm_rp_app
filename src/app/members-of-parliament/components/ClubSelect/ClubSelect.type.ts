import { SelectChangeEvent } from "@mui/material"
import { TClub } from "@/app/types/Club.type"

export type ClubSelectProps = {
  selectClub: string
  handleSelect: (event: SelectChangeEvent) => void
  data: TClub[] | null
}
