import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { SelectChangeEvent } from "@mui/material"

type SelectComponentProps = {
  selectClub: string
  handleSelect: (event: SelectChangeEvent) => void
  data: any[]
}

export default function SelectComponent({
  selectClub,
  handleSelect,
  data,
}: SelectComponentProps) {
  return (
    <FormControl
      fullWidth
      sx={{ marginBottom: "24px" }}
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
        {data.map((item: any) => (
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
