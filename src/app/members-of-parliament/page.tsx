"use client"

import { useEffect, useState, useMemo } from "react"
import { MP } from "../types/MPType"
import { useMPs } from "../context/MPsContext"
import { useClubs } from "../context/ClubsContext"
import { useAppBar } from "../context/AppBarContext"

import { Grid2, Container } from "@mui/material"
import { SelectChangeEvent } from "@mui/material/Select"
import MPCardComponent from "../components/MPCardComponent"
import PaginationComponent from "../components/PaginationComponent"
import SelectComponent from "./ClubSelectComponent"
import LoaderComponent from "../components/LoaderComponent"

const itemsPerPage = 18

export default function MembersOfParliament() {
  const { MPsData, isLoadingMPs, MPsFetchData } = useMPs()
  const { clubsFetchData, clubsData } = useClubs()
  const { changeTitleAppBar } = useAppBar()

  const [currentData, setCurrentData] = useState<MP[]>([])
  const [filterData, setFilterData] = useState<MP[]>([])
  const [selectClub, setSelectClub] = useState("All")

  const handleSelect = (event: SelectChangeEvent) => {
    setSelectClub(event.target.value as string)
  }

  useEffect(() => {
    MPsFetchData()
    clubsFetchData()
    changeTitleAppBar("Posłowie")
  }, [MPsFetchData, clubsFetchData, changeTitleAppBar])

  const filteredData = useMemo(() => {
    return selectClub === "All"
      ? MPsData || []
      : MPsData?.filter((item) => item.club === selectClub) || []
  }, [MPsData, selectClub])

  useEffect(() => {
    setFilterData(filteredData)
    setCurrentData(filteredData.slice(0, itemsPerPage))
  }, [selectClub, MPsData])

  if (isLoadingMPs) return <LoaderComponent />

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
