"use client"

import { useAppBar } from "../context/AppBarContext"
import { useProceedings } from "../context/ProceedingsContext"
import { useEffect } from "react"
import Link from "next/link"
import Stack from "@mui/material/Stack"
import { styled } from "@mui/material/styles"
import { Button } from "@mui/material"

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

    return `${year}-${month < 10 ? `0${month}` : month}-${
      day < 10 ? `0${day}` : day
    }`
  }

  const checkDate = (date_1: string, date_2: string) => {
    const date1 = new Date(date_1)
    const date2 = new Date(date_2)

    if (date1 < date2) {
      return ["#43a047", "#1b5e20"]
    } else if (date1 > date2) {
      return ["#e53935", "#b71c1c"]
    } else {
      return ["#7cb342", "#33691e"]
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
            {proceeding.dates.map((date) => {
              const [color_1, color_2] = checkDate(date, currentDate())
              return (
                <Link
                  key={date}
                  href={`/proceedings/${proceeding.number}_${date}`}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      color: color_1,
                      borderColor: color_1,
                      "&:hover": {
                        borderColor: color_2,
                        color: color_2,
                      },
                    }}
                  >
                    {date}
                  </Button>
                </Link>
              )
            })}
          </Stack>
        </div>
      ))}
    </>
  )
}
