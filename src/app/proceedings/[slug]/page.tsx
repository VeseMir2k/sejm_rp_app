"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { useTranscripts } from "@/app/context/Transcripts"
import { useTopAppBar } from "@/app/context/TopAppBar"

import ProceedingTable from "@/app/proceedings/components/ProceedingTable"
import LoaderComponent from "@/app/components/Loader/Loader"

export default function Page() {
  const searchParams = useSearchParams()

  const { changeTitle } = useTopAppBar()
  const { handleGetTranscripts, isLoadingTranscripts } = useTranscripts()

  const idParams = searchParams.get("id") || ""
  const dateParams = searchParams.get("date") || ""

  useEffect(() => {
    changeTitle(`Posiedzenie ${idParams} dnia ${dateParams}`)
    handleGetTranscripts(idParams, dateParams)
  }, [handleGetTranscripts, changeTitle, idParams, dateParams])

  if (isLoadingTranscripts) return <LoaderComponent />

  return <ProceedingTable />
}
