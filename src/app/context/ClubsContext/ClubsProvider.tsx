import { useState, useCallback } from "react"
import { getClubs } from "@/app/api/getClubs"
import { TClub } from "@/app/types/Club.type"
import { TClubsProviderProps } from "./ClubsContext.type"
import { ClubsContext } from "./ClubsContext"

export const ClubsProvider = ({ children }: TClubsProviderProps) => {
  const [clubs, setClubs] = useState<TClub[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const handleGetClubs = useCallback(async () => {
    setIsLoading(true)
    try {
      const data = await getClubs()
      setClubs(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  return (
    <ClubsContext.Provider value={{ clubs, isLoading, handleGetClubs }}>
      {children}
    </ClubsContext.Provider>
  )
}
