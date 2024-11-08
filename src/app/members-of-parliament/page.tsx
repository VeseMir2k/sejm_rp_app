"use client"

import { Grid2, Container } from "@mui/material"
import { useMPs } from "../stores/MPsStore"
import MPCardComponent from "../components/MPCardComponent"
import { useEffect, useState } from "react"
import PaginationComponent from "../components/PaginationComponent"

type MP = {
  id: string
  firstLastName: string
}

const itemsPerPage = 54

export default function MembersOfParliament() {
  const { MPsFetchData, data, isLoading } = useMPs()
  const [currentData, setCurrentData] = useState<MP[]>([])

  useEffect(() => {
    MPsFetchData()
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
            size={2}
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
