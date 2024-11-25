"use client"

import { useEffect, useState, useCallback } from "react"
import { useSearchParams } from "next/navigation"
import { useTopAppBar } from "@/app/context/TopAppBar"
import { getMemberOfParliament } from "../../api/getMemberOfParliament"
import { TMemberOfParliament } from "../../types/MemberOfParliament.type"
import Loader from "@/app/components/Loader"

export default function Page() {
  const [memberOfParliament, setMemberOfParliament] =
    useState<TMemberOfParliament | null>(null)
  const [isLoadingMemberOfParliament, setIsLoadingMemberOfParliament] =
    useState<boolean>(true)

  const { changeTitle } = useTopAppBar()

  const searchParams = useSearchParams()

  const nameParams = searchParams.get("name")
  const idParams = searchParams.get("id")

  const handleGetMemberOfParliament = useCallback(async (id: string) => {
    setIsLoadingMemberOfParliament(true)
    try {
      const data = await getMemberOfParliament(id)
      setMemberOfParliament(data)
    } catch (error) {
      console.error(`Błąd pobierania danych: ${error}`)
    } finally {
      setIsLoadingMemberOfParliament(false)
    }
  }, [])

  useEffect(() => {
    changeTitle(nameParams as string)
    handleGetMemberOfParliament(idParams as string)
  }, [changeTitle, handleGetMemberOfParliament, idParams, nameParams])

  if (isLoadingMemberOfParliament) return <Loader />

  if (!memberOfParliament) {
    return <div>Brak danych posła.</div>
  }

  const { firstLastName } = memberOfParliament

  return (
    <>
      <h1>{firstLastName}</h1>
    </>
  )
}
