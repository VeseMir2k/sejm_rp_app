"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { useTranscriptsList } from "@/app/context/transcriptsList/TranscriptsListContext"
import { useAppBar } from "@/app/context/topAppBar/TopAppBarContext"

import ProceedingTableComponent from "./ProceedingTableComponent"
import LoaderComponent from "@/app/components/loader/Loader"

export default function Page() {
  const searchParams = useSearchParams()

  const { changeTitleAppBar } = useAppBar()
  const { TranscriptsListFetchData, isLoadingTranscriptsList } =
    useTranscriptsList()

  const idParams = searchParams.get("id") || ""
  const dateParams = searchParams.get("date") || ""

  useEffect(() => {
    changeTitleAppBar(`Posiedzenie ${idParams} dnia ${dateParams}`)
    TranscriptsListFetchData(idParams, dateParams)
  }, [TranscriptsListFetchData, changeTitleAppBar, idParams, dateParams])

  if (isLoadingTranscriptsList) return <LoaderComponent />

  return <ProceedingTableComponent />
}
