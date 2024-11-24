"use client"

import { useEffect, useState, useMemo } from "react"
import { MemberOfParliament } from "../types/MemberOfParliament.type"
import { useMembersOfParliament } from "../context/membersOfParliament/MembersOfParliamentContext"
import { useClubs } from "../context/clubs/ClubsContext"
import { useTopAppBar } from "../context/topAppBar/TopAppBarContext"

import { Grid2, Container } from "@mui/material"
import { SelectChangeEvent } from "@mui/material/Select"
import MPCardComponent from "../components/memberOfParliamentCard/MemberOfParliamentCard"
import PaginationComponent from "../components/dataPagination/DataPagination"
import ClubSelectComponent from "./ClubSelectComponent"
import LoaderComponent from "../components/loader/Loader"

const itemsPerPage = 32

export default function Page() {
  const {
    MembersOfParliamentData,
    isLoadingMembersOfParliament,
    MembersOfParliamentFetchData,
  } = useMembersOfParliament()
  const { clubsFetchData, clubsData } = useClubs()
  const { changeTitleTopAppBar } = useTopAppBar()

  const [currentData, setCurrentData] = useState<MemberOfParliament[]>([])
  const [filterData, setFilterData] = useState<MemberOfParliament[]>([])
  const [selectClub, setSelectClub] = useState("All")

  const handleSelect = (event: SelectChangeEvent) => {
    setSelectClub(event.target.value as string)
  }

  useEffect(() => {
    MembersOfParliamentFetchData()
    clubsFetchData()
    changeTitleTopAppBar("Posłowie")
  }, [MembersOfParliamentFetchData, clubsFetchData, changeTitleTopAppBar])

  const filteredData = useMemo(() => {
    return selectClub === "All"
      ? MembersOfParliamentData || []
      : MembersOfParliamentData?.filter((item) => item.club === selectClub) ||
          []
  }, [MembersOfParliamentData, selectClub])

  useEffect(() => {
    setFilterData(filteredData)
    setCurrentData(filteredData.slice(0, itemsPerPage))
  }, [selectClub, MembersOfParliamentData, filteredData])

  if (isLoadingMembersOfParliament || !clubsData) return <LoaderComponent />

  return (
    <Container>
      <ClubSelectComponent
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
            size={{ xs: 6, sm: 6, md: 4, lg: 2 }}
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
