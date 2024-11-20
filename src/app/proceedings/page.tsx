"use client"

import { useAppBar } from "../context/AppBarContext"
import { useProceedings } from "../context/ProceedingsContext"
import { useEffect } from "react"
import LinkComponent from "./LinkComponent"
import { Typography, Stack, Box } from "@mui/material"

export default function Proceedings() {
  const { setTitle } = useAppBar()
  const { ProceedingsFetchData, ProceedingsData } = useProceedings()

  useEffect(() => {
    ProceedingsFetchData()
    setTitle("Obrady")
  }, [setTitle, ProceedingsFetchData])

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
