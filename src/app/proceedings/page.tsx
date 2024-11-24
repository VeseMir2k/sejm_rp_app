"use client"

import { useEffect } from "react"
import { useAppBar } from "../context/appBar/AppBarContext"
import { useProceedings } from "../context/proceedings/ProceedingsContext"

import { Typography, Stack, Box } from "@mui/material"
import LinkComponent from "./LinkComponent"
import LoaderComponent from "../components/LoaderComponent"

export default function Page() {
  const { changeTitleAppBar } = useAppBar()
  const { ProceedingsFetchData, ProceedingsData, isLoadingProceedings } =
    useProceedings()

  useEffect(() => {
    ProceedingsFetchData()
    changeTitleAppBar("Obrady")
  }, [changeTitleAppBar, ProceedingsFetchData])

  if (isLoadingProceedings) return <LoaderComponent />

  return (
    <>
      {ProceedingsData?.map((proceeding) => (
        <Box
          key={proceeding.title}
          component="section"
        >
          <Typography
            variant="body1"
            sx={{ py: 2 }}
          >
            {proceeding.title}
          </Typography>
          <Stack
            spacing={{ xs: 1, sm: 2 }}
            direction="row"
            useFlexGap
            sx={{ flexWrap: "wrap" }}
          >
            {proceeding.dates.map((item, index) => {
              return (
                <LinkComponent
                  key={`link_${index}`}
                  date={item}
                  proceedingNumber={proceeding.number}
                />
              )
            })}
          </Stack>
        </Box>
      ))}
    </>
  )
}
