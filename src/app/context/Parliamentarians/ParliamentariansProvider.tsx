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
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const handleGetParliamentarians = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const data = await getParliamentarians()
      setParliamentarians(data)
    } catch (err) {
      console.error("Error fetching MPs data:", err)
      setError("Nie udało się załadować danych posłów.")
    } finally {
      setIsLoading(false)
    }
  }, [])

  return (
    <ParliamentariansContext.Provider
      value={{
        parliamentarians,
        isLoading,
        error,
        handleGetParliamentarians,
      }}
    >
      {children}
    </ParliamentariansContext.Provider>
  )
}
