"use client"

import { useAppBar } from "../context/AppBarContext"
import { useProceedings } from "../context/ProceedingsContext"
import { useEffect } from "react"
import Stack from "@mui/material/Stack"
import AccordionComponent from "./AccordionComponent"
import LinkComponent from "./LinkComponent"

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
        <AccordionComponent proceeding={proceeding} />
      ))}
    </>
  )
}
