"use client"

import { useEffect } from "react"
import { useTopAppBar } from "../context/topAppBar/TopAppBarContext"
import { useProceedings } from "../context/proceedings/ProceedingsContext"

import { Typography, Stack, Box } from "@mui/material"
import LinkComponent from "./LinkComponent"
import LoaderComponent from "../components/loader/Loader"

export default function Page() {
  const { changeTitleTopAppBar } = useTopAppBar()
  const { ProceedingsFetchData, ProceedingsData, isLoadingProceedings } =
    useProceedings()

  useEffect(() => {
    ProceedingsFetchData()
    changeTitleTopAppBar("Obrady")
  }, [changeTitleTopAppBar, ProceedingsFetchData])

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
