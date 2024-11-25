"use client"

import { useEffect, useState, useMemo } from "react"
import { TParliamentarian } from "../types/Parliamentarian.type"
import { useParliamentarians } from "../context/Parliamentarians"
import { useTopAppBar } from "../context/TopAppBar"
import { useParliamentaryGroups } from "../context/ParliamentaryGroupsContext"
import { Grid2, Container, Box } from "@mui/material"
import { SelectChangeEvent } from "@mui/material/Select"
import ParliamentarianCard from "../components/ParliamentarianCard"
import PaginationComponent from "../components/DataPagination/DataPagination"
import ClubSelect from "./components/ClubSelect"
import Loader from "../components/Loader"
import SearchInput from "./components/SearchInput"

const styles = {
  formWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    mb: 2,
  },
} as const

const itemsPerPage = 32

export default function Page() {
  const { parliamentarians, isLoading, handleGetParliamentarians } =
    useParliamentarians()
  const { handleGetParliamentaryGroups, parliamentaryGroups } =
    useParliamentaryGroups()
  const { changeTitle } = useTopAppBar()

  const [currentData, setCurrentData] = useState<TParliamentarian[]>([])
  const [filterData, setFilterData] = useState<TParliamentarian[]>([])
  const [selectClub, setSelectClub] = useState("All")

  const [searchValue, setSearchValue] = useState("")

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  const handleSelect = (event: SelectChangeEvent) => {
    setSelectClub(event.target.value as string)
  }

  const filteredData = useMemo(() => {
    return selectClub === "All"
      ? parliamentarians || []
      : parliamentarians?.filter((item) => item.club === selectClub) || []
  }, [parliamentarians, selectClub])

  useEffect(() => {
    handleGetParliamentarians()
    handleGetParliamentaryGroups()
    changeTitle("Posłowie")
  }, [handleGetParliamentarians, handleGetParliamentaryGroups, changeTitle])

  useEffect(() => {
    setFilterData(filteredData)
    setCurrentData(filteredData.slice(0, itemsPerPage))
  }, [selectClub, parliamentarians, filteredData])

  if (isLoading || !parliamentaryGroups) return <Loader />

  return (
    <Container>
      <Box sx={styles.formWrapper}>
        <ClubSelect
          handleSelect={handleSelect}
          selectClub={selectClub}
          data={parliamentaryGroups}
        />
        <SearchInput
          searchValue={searchValue}
          handleSearch={handleSearch}
        />
      </Box>

      <Grid2
        container
        spacing={4}
        columns={{ xs: 12, sm: 12, md: 18, lg: 18 }}
      >
        {currentData.map((item) => (
          <Grid2
            key={item.id}
            size={{ xs: 4, sm: 4, md: 3, lg: 2 }}
          >
            <ParliamentarianCard
              selectedClub={selectClub}
              item={item}
            />
          </Grid2>
        ))}
      </Grid2>
      {filterData.length > 0 && (
        <PaginationComponent
          itemsPerPage={itemsPerPage}
          data={filterData}
          setCurrentData={setCurrentData}
        />
      )}
    </Container>
  )
}
