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
      <InputLabel id="select-label">Partia</InputLabel>
      <Select
        labelId="select-label"
        id="demo-simple-select"
        value={selectClub}
        label="Age"
        onChange={handleSelect}
      >
        <MenuItem value="All">All</MenuItem>
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
