"use client"

import { useEffect, useState, useCallback } from "react"
import { useAppBar } from "@/app/context/appBar/AppBarContext"
import { MemberOfParliament } from "../../types/MemberOfParliament.type"
import { fetchMP } from "../../api/fetchMemberOfParliament"
import LoaderComponent from "@/app/components/LoaderComponent"
import { useSearchParams } from "next/navigation"

export default function Page() {
  const [MPData, setMPData] = useState<MemberOfParliament | null>(null)
  const [isLoadingMP, setIsLoadingMP] = useState<boolean>(true)

  const { changeTitleAppBar } = useAppBar()

  const searchParams = useSearchParams()

  const nameParams = searchParams.get("name")
  const idParams = searchParams.get("id")

  const MPsFetchData = useCallback(async (id: string) => {
    setIsLoadingMP(true)
    try {
      const data = await fetchMP(id)
      setMPData(data)
    } catch (error) {
      console.error(`Błąd pobierania danych: ${error}`)
    } finally {
      setIsLoadingMP(false)
    }
  }, [])

  useEffect(() => {
    changeTitleAppBar(nameParams as string)
    MPsFetchData(idParams as string)
  }, [changeTitleAppBar, MPsFetchData, idParams, nameParams])

  if (isLoadingMP) return <LoaderComponent />

  if (!MPData) {
    return <div>Brak danych posła.</div>
  }

  const { firstLastName } = MPData

  return (
    <>
      <h1>{firstLastName}</h1>
    </>
  )
}
