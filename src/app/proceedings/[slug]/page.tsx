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
  const { TranscriptsListFetchData, TranscriptsListData } = useTranscriptsList()

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
      TranscriptsListFetchData(slug, "2023-11-13")
    }
  }, [TranscriptsListFetchData, slug])

  return (
    <div>
      {TranscriptsListData?.statements.map((item) => (
        <h3 key={item.num}>{item.name}</h3>
      ))}
    </div>
  )
}
