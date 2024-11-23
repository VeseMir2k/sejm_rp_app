"use client"

import { useEffect, useState, useCallback } from "react"
import { useAppBar } from "@/app/context/AppBarContext"
import { MP } from "../../types/MPType"
import { fetchMP } from "../../api/fetchMP"
import LoaderComponent from "@/app/components/LoaderComponent"
import { useSearchParams } from "next/navigation"

export default function MemberOfParliament() {
  const [MPData, setMPData] = useState<MP | null>(null)
  const [isLoadingMP, setIsLoadingMP] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const { changeTitleAppBar } = useAppBar()

  const searchParams = useSearchParams()

  const nameParams = searchParams.get("name")
  const idParams = searchParams.get("id")

  useEffect(() => {
    changeTitleAppBar(nameParams as string)
    MPsFetchData(idParams as string)
  }, [changeTitleAppBar])

  const MPsFetchData = useCallback(async (id: string) => {
    setIsLoadingMP(true)
    setError(null)
    try {
      const data = await fetchMP(id)
      setMPData(data)
    } catch (err) {
      setError("Nie udało się załadować danych posłów.")
    } finally {
      setIsLoadingMP(false)
    }
  }, [])

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
