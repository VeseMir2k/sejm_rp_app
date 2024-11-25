import { ClubSelectProps } from "./ClubSelect.type"
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"

export default function ClubSelect({
  selectClub,
  handleSelect,
  data,
}: ClubSelectProps) {
  return (
    <FormControl
      fullWidth
      sx={{ width: 220 }}
      size="small"
    >
      <InputLabel id="select-club-label">Partia</InputLabel>
      <Select
        labelId="select-club-label"
        id="select-club"
        value={selectClub}
        label="Partia"
        onChange={handleSelect}
      >
        <MenuItem value="All">Wszystkie</MenuItem>
        {data?.map((item) => (
          <MenuItem
            key={item.id}
            value={item.id}
          >
            {item.id}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
