"use client"

import { useEffect } from "react"
import { useParams } from "next/navigation"
import { useTranscriptsList } from "@/app/context/TranscriptsListContext"
import { useAppBar } from "@/app/context/AppBarContext"

import ProceedingTableComponent from "./ProceedingTableComponent"

export default function Proceeding() {
  const params = useParams()

  const { changeTitleAppBar } = useAppBar()
  const { TranscriptsListFetchData } = useTranscriptsList()

  useEffect(() => {
    if (typeof params.slug === "string") {
      const result = params.slug.trim().split("_")
      changeTitleAppBar(`Posiedzenie ${result[0]} dnia ${result[1]}`)
      TranscriptsListFetchData(result[0], result[1])
    } else {
      console.log("Slug is not a string or is undefined:", params.slug)
    }
  }, [params.slug])

  return <ProceedingTableComponent />
}
