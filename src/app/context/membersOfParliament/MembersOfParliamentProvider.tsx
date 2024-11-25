import { TMemberOfParliament } from "@/app/types/MemberOfParliament.type"
import { useState, useCallback } from "react"
import { TMembersOfParliamentProps } from "./MembersOfParliamentContext.type"
import { MembersOfParliamentContext } from "./MembersOfParliamentContext"
import { getMembersOfParliament } from "@/app/api/getMembersOfParliament"

export const MembersOfParliamentProvider = ({
  children,
}: TMembersOfParliamentProps) => {
  const [membersOfParliament, setMembersOfParliament] = useState<
    TMemberOfParliament[] | null
  >(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const handleGetMembersOfParliament = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const data = await getMembersOfParliament()
      setMembersOfParliament(data)
    } catch (err) {
      console.error("Error fetching MPs data:", err)
      setError("Nie udało się załadować danych posłów.")
    } finally {
      setIsLoading(false)
    }
  }, [])

  return (
    <MembersOfParliamentContext.Provider
      value={{
        membersOfParliament,
        isLoading,
        error,
        handleGetMembersOfParliament,
      }}
    >
      {children}
    </MembersOfParliamentContext.Provider>
  )
}
