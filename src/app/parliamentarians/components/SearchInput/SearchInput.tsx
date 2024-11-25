import { TextField } from "@mui/material"
import { SearchInputProps } from "./SearchInput.type"

export default function SearchInput({
  searchValue,
  handleSearch,
}: SearchInputProps) {
  return (
    <TextField
      label="Szukaj"
      id="search-input"
      value={searchValue}
      onChange={handleSearch}
      size="small"
    />
  )
}
