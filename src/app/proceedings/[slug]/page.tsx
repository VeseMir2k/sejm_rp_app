"use client"

import { useAppBar } from "@/app/context/AppBarContext"
import { useEffect } from "react"
import { useParams } from "next/navigation"
import { useProceeding } from "@/app/context/ProceedingContext"
import { useTranscriptsList } from "@/app/context/TranscriptsList"

type ProceedingPost = {
  params?: { slug: string | string[] | undefined }
}

export default function Proceeding({}: ProceedingPost) {
  const { setTitle } = useAppBar()
  const { ProceedingFetchData, ProceedingData } = useProceeding()
  const {
    TranscriptsListFetchData,
    TranscriptsListData,
    statementsList,
    setStatementsList,
  } = useTranscriptsList()
  // const { statements, setStatements } = useState([])

  const params = useParams()
  const slug = typeof params.slug === "string" ? params.slug : undefined

  useEffect(() => {
    if (ProceedingData?.title) {
      setTitle(ProceedingData.title)
    }
  }, [setTitle, ProceedingData?.title])

  useEffect(() => {
    if (slug) {
      ProceedingFetchData(slug)
    }
  }, [ProceedingFetchData, slug])

  useEffect(() => {
    if (slug) {
      setStatementsList([])
      ProceedingData?.dates.map((item) => {
        TranscriptsListFetchData(slug, item)
      })
    }
  }, [ProceedingData, TranscriptsListFetchData, slug, setStatementsList])

  return (
    <div>
      {statementsList?.map((item, index) => (
        <h3 key={index}>{item.name}</h3>
      ))}
    </div>
  )
}
