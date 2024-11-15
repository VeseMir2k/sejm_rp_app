"use client"

import { useAppBar } from "@/app/context/AppBarContext"
import { useEffect } from "react"
import { useParams } from "next/navigation"
import { useProceeding } from "@/app/context/ProceedingContext"
import AccordionComponent from "./AccordionComponent"

type ProceedingPost = {
  params?: { slug: string | string[] | undefined }
}

export default function Proceeding({}: ProceedingPost) {
  const { setTitle } = useAppBar()
  const { ProceedingFetchData, ProceedingData } = useProceeding()

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

  useEffect(() => {}, [])

  return (
    <>
      {ProceedingData?.dates.map((item) => (
        <AccordionComponent
          key={item}
          date={item}
          slug={slug}
        />
      ))}
    </>
  )
}
