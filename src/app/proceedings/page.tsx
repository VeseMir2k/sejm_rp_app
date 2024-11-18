"use client"

import { useAppBar } from "../context/AppBarContext"
import { useProceedings } from "../context/ProceedingsContext"
import { useEffect } from "react"
import Link from "next/link"
import Paper from "@mui/material/Paper"
import Stack from "@mui/material/Stack"
import { styled } from "@mui/material/styles"

const StyledLink = styled(Link)({
  textDecoration: "none",
})

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}))

export default function Proceedings() {
  const { setTitle } = useAppBar()
  const { ProceedingsFetchData, ProceedingsData } = useProceedings()

  useEffect(() => {
    ProceedingsFetchData()
    setTitle("Obrady")
  }, [setTitle, ProceedingsFetchData])

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
                <Item>{date}</Item>
              </StyledLink>
            ))}
          </Stack>
        </div>
      ))}
    </>
  )
}
