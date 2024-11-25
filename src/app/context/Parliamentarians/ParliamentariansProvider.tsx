import { TParliamentarian } from "@/app/types/Parliamentarian.type"
import { useState, useCallback } from "react"
import { TParliamentariansProps } from "./ParliamentariansContext.type"
import { ParliamentariansContext } from "./ParliamentariansContext"
import { getParliamentarians } from "@/app/api/getParliamentarians"

export const ParliamentariansProvider = ({
  children,
}: TParliamentariansProps) => {
  const [parliamentarians, setParliamentarians] = useState<
    TParliamentarian[] | null
  >(null)
  const [isLoadingParliamentarians, setIsLoadingParliamentarians] =
    useState<boolean>(true)
  const [errorParliamentarians, setErrorParliamentarians] = useState<
    string | null
  >(null)

  const handleGetParliamentarians = useCallback(async () => {
    setIsLoadingParliamentarians(true)
    setErrorParliamentarians(null)
    try {
      const data = await getParliamentarians()
      setParliamentarians(data)
    } catch (err) {
      console.error("Error fetching MPs data:", err)
      setErrorParliamentarians("Nie udało się załadować danych posłów.")
    } finally {
      setIsLoadingParliamentarians(false)
    }
  }, [])

  return (
    <ParliamentariansContext.Provider
      value={{
        parliamentarians,
        isLoadingParliamentarians,
        errorParliamentarians,
        handleGetParliamentarians,
      }}
    >
      {children}
    </ParliamentariansContext.Provider>
  )
}
