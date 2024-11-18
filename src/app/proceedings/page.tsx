"use client"

import { useAppBar } from "../context/AppBarContext"
import { useProceedings } from "../context/ProceedingsContext"
import { useEffect } from "react"
import Link from "next/link"
import Stack from "@mui/material/Stack"
import { styled } from "@mui/material/styles"
import { Typography } from "@mui/material"

const StyledLink = styled(Link)({
  textDecoration: "none",
})

export default function Proceedings() {
  const { setTitle } = useAppBar()
  const { ProceedingsFetchData, ProceedingsData } = useProceedings()

  useEffect(() => {
    ProceedingsFetchData()
    setTitle("Obrady")
  }, [setTitle, ProceedingsFetchData])

  const currentDate = () => {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    return `${year}-${month}-${day}`
  }

  const checkDate = (date_1: string, date_2: string) => {
    const date1 = new Date(date_1)
    const date2 = new Date(date_2)

    if (date1 < date2) {
      return "blue"
    } else if (date1 > date2) {
      return "green"
    } else {
      return "red"
    }
  }

  return (
    <>
      {ProceedingsData?.map((proceeding, index) => (
        <div key={index}>
          <h4 style={{ color: "white" }}>{proceeding.title}</h4>
          <Stack
            direction="row"
            spacing={2}
            useFlexGap
            sx={{ flexWrap: "wrap" }}
          >
            {proceeding.dates.map((date) => (
              <StyledLink
                key={date}
                href={`proceedings/${proceeding.number}_${date}`}
              >
                <Typography
                  variant="body2"
                  sx={{
                    backgroundColor: checkDate(currentDate(), date),
                    color: "rgba(255, 255, 255, 0.7)",
                    textAlign: "center",
                    padding: "8px",
                    borderRadius: "4px",
                  }}
                >
                  {date}
                </Typography>
              </StyledLink>
            ))}
          </Stack>
        </div>
      ))}
    </>
  )
}
