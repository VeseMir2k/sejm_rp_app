"use client"

import { Grid2, Container } from "@mui/material"
import { SelectChangeEvent } from "@mui/material/Select"
import { useMPs } from "../context/MPsContext"
import { useClubs } from "../context/ClubsContext"
import { useAppBar } from "../context/AppBarContext"
import MPCardComponent from "../components/MPCardComponent"
import { useEffect, useState } from "react"
import PaginationComponent from "../components/PaginationComponent"
import { MP } from "../types"
import SelectComponent from "../components/SelectComponent"

const itemsPerPage = 18

export default function MembersOfParliament() {
  const { MPsFetchData, MPsData, isLoadingMPs } = useMPs()
  const { clubsFetchData, clubsData } = useClubs()
  const { setTitle } = useAppBar()

  const [currentData, setCurrentData] = useState<MP[]>([])
  const [filterData, setFilterData] = useState<MP[]>([])
  const [selectClub, setSelectClub] = useState("All")

  const handleSelect = (event: SelectChangeEvent) => {
    setSelectClub(event.target.value as string)
  }

  useEffect(() => {
    MPsFetchData()
    clubsFetchData()
    setTitle("Posłowie")
  }, [MPsFetchData, clubsFetchData, setTitle])

  useEffect(() => {
    const filtered =
      selectClub === "All"
        ? MPsData
        : MPsData.filter((item) => item.club === selectClub)

    setFilterData(filtered)
    setCurrentData(filtered.slice(0, itemsPerPage))
  }, [selectClub, MPsData])

  if (isLoadingMPs) return <p>Ładowanie...</p>

  return (
    <Container>
      <SelectComponent
        handleSelect={handleSelect}
        selectClub={selectClub}
        data={clubsData}
      />

      <Grid2
        container
        spacing={4}
      >
        {currentData.map((item) => (
          <Grid2
            key={item.id}
            size={{ xs: 6, sm: 6, md: 3, lg: 2 }}
          >
            <MPCardComponent item={item} />
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
