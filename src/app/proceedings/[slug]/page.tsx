"use client"

import { useEffect } from "react"
import { useParams } from "next/navigation"
import { useTranscriptsList } from "@/app/context/TranscriptsListContext"

export default function Proceeding() {
  const params = useParams()

  const { TranscriptsListFetchData, TranscriptsListData } = useTranscriptsList()

  useEffect(() => {
    if (typeof params.slug === "string") {
      const result = params.slug.trim().split("_")
      console.log(result)

      TranscriptsListFetchData(result[0], result[1])
    } else {
      console.log("Slug is not a string or is undefined:", params.slug)
    }
  }, [params.slug])

  return (
    <>
      {TranscriptsListData?.statements.map((item) => (
        <h6 key={item.num}>{item.name}</h6>
      ))}
    </>
  )
}
