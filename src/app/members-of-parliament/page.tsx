"use client"

import { Grid2, Container } from "@mui/material"
import { useMPs } from "../context/MPsContext"
import { useAppBar } from "../context/AppBarContext"
import MPCardComponent from "../components/MPCardComponent"
import { useEffect, useState } from "react"
import PaginationComponent from "../components/PaginationComponent"
import { MP } from "../types"

const itemsPerPage = 18

export default function MembersOfParliament() {
  const { MPsFetchData, data, isLoading } = useMPs()
  const { setTitle } = useAppBar()
  const [currentData, setCurrentData] = useState<MP[]>([])

  useEffect(() => {
    MPsFetchData()
    setTitle("Posłowie")
  }, [MPsFetchData])

  if (isLoading) return <p>Ładowanie...</p>
  return (
    <Container>
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
      <PaginationComponent
        itemsPerPage={itemsPerPage}
        data={data}
        setCurrentData={setCurrentData}
      />
    </Container>
  )
}
