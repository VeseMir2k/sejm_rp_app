"use client"

import { useEffect, useState, useMemo } from "react"
import { TMemberOfParliament } from "../types/MemberOfParliament.type"
import { useMembersOfParliament } from "../context/MembersOfParliament"
import { useTopAppBar } from "../context/TopAppBar"
import { useClubs } from "../context/ClubsContext"
import { Grid2, Container, Box } from "@mui/material"
import { SelectChangeEvent } from "@mui/material/Select"
import MemberOfParliamentCard from "../components/MemberOfParliamentCard/MemberOfParliamentCard"
import PaginationComponent from "../components/DataPagination/DataPagination"
import ClubSelect from "./components/ClubSelect"
import Loader from "../components/Loader"

const styles = {
  formWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    mb: 2,
  },
} as const

const itemsPerPage = 32

export default function Page() {
  const { membersOfParliament, isLoading, handleGetMembersOfParliament } =
    useMembersOfParliament()
  const { handleGetClubs, clubs } = useClubs()
  const { changeTitle } = useTopAppBar()

  const [currentData, setCurrentData] = useState<TMemberOfParliament[]>([])
  const [filterData, setFilterData] = useState<TMemberOfParliament[]>([])
  const [selectClub, setSelectClub] = useState("All")

  const handleSelect = (event: SelectChangeEvent) => {
    setSelectClub(event.target.value as string)
  }

  const filteredData = useMemo(() => {
    return selectClub === "All"
      ? membersOfParliament || []
      : membersOfParliament?.filter((item) => item.club === selectClub) || []
  }, [membersOfParliament, selectClub])

  useEffect(() => {
    handleGetMembersOfParliament()
    handleGetClubs()
    changeTitle("Posłowie")
  }, [handleGetMembersOfParliament, handleGetClubs, changeTitle])

  useEffect(() => {
    setFilterData(filteredData)
    setCurrentData(filteredData.slice(0, itemsPerPage))
  }, [selectClub, membersOfParliament, filteredData])

  if (isLoading || !clubs) return <Loader />

  return (
    <Container>
      <Box sx={styles.formWrapper}>
        <ClubSelect
          handleSelect={handleSelect}
          selectClub={selectClub}
          data={clubs}
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
            <MemberOfParliamentCard
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
