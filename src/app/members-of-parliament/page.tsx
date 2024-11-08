"use client"

import { Grid2 } from "@mui/material"
import { useMPs } from "../stores/MPsStore"
import MPCardComponent from "../components/MPCardComponent"
import { useEffect } from "react"

export default function MembersOfParliament() {
  const { MPsFetchData, data, isLoading } = useMPs()

  useEffect(() => {
    MPsFetchData()
  }, [MPsFetchData])

  if (isLoading) return <p>Ładowanie...</p>
  return (
    <Grid2
      container
      spacing={4}
    >
      {data.map((item) => (
        <Grid2
          key={item.id}
          size={2}
        >
          <MPCardComponent item={item} />
        </Grid2>
      ))}
    </Grid2>
  )
}
