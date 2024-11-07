"use client"
import { useEffect } from "react"
import { observer } from "mobx-react-lite"
import { MPsStore } from "./stores/MPsStore"
import { Card, CardContent, Typography, Grid2 } from "@mui/material"
import Image from "next/image"

const mpsStore = new MPsStore()

const Home = observer(() => {
  useEffect(() => {
    mpsStore.fetchData()
  }, [])

  if (mpsStore.isLoading) {
    return <p>Ładowanie danych...</p>
  }

  return (
    <Grid2
      container
      spacing={4}
    >
      {mpsStore.data.map((mp) => (
        <Grid2
          key={mp.id}
          size={2}
        >
          <Card>
            <Image
              src={`https://api.sejm.gov.pl/sejm/term10/MP/${mp.id}/photo`}
              alt={`Zdjęcie ${mp.firstLastName}`}
              loading="lazy"
              width={60}
              height={75}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </Card>
        </Grid2>
      ))}
    </Grid2>
  )
})

export default Home
