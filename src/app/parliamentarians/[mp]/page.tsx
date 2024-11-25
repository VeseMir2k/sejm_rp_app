"use client"

import { useEffect, useState, useCallback } from "react"
import { useSearchParams } from "next/navigation"
import { useTopAppBar } from "@/app/context/TopAppBar"
import { getParliamentarian } from "../../api/getParliamentarian"
import { TParliamentarian } from "../../types/Parliamentarian.type"
import Loader from "@/app/components/Loader"

export default function Page() {
  const [parliamentarian, setParliamentarian] =
    useState<TParliamentarian | null>(null)
  const [isLoadingParliamentarian, setIsLoadingParliamentarian] =
    useState<boolean>(true)

  const { changeTitle } = useTopAppBar()

  const searchParams = useSearchParams()

  const nameParams = searchParams.get("name")
  const idParams = searchParams.get("id")

  const handleGetParliamentarian = useCallback(async (id: string) => {
    setIsLoadingParliamentarian(true)
    try {
      const data = await getParliamentarian(id)
      setParliamentarian(data)
    } catch (error) {
      console.error(`Błąd pobierania danych: ${error}`)
    } finally {
      setIsLoadingParliamentarian(false)
    }
  }, [])

  useEffect(() => {
    changeTitle(nameParams as string)
    handleGetParliamentarian(idParams as string)
  }, [changeTitle, handleGetParliamentarian, idParams, nameParams])

  if (isLoadingParliamentarian) return <Loader />

  if (!parliamentarian) {
    return <div>Brak danych posła.</div>
  }

  const { firstLastName } = parliamentarian

  return (
    <>
      <h1>{firstLastName}</h1>
    </>
  )
}
