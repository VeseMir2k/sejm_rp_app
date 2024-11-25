"use client"

import { useEffect } from "react"
import { useTopAppBar } from "../context/TopAppBar"
import { useProceedings } from "../context/Proceedings"
import { Typography, Stack, Box } from "@mui/material"
import ProceedingLink from "./components/ProceedingLink"
import Loader from "../components/Loader/Loader"

export default function Page() {
  const { changeTitle } = useTopAppBar()
  const { handleGetProceedings, proceedings, isLoading } = useProceedings()

  useEffect(() => {
    handleGetProceedings()
    changeTitle("Obrady")
  }, [changeTitle, handleGetProceedings])

  if (isLoading) return <Loader />

  return (
    <>
      {proceedings?.map((proceeding) => (
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
            {proceeding.dates.map((item: string, index: number) => {
              return (
                <ProceedingLink
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
