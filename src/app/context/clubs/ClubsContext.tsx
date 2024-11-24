import { createContext, useContext, useState, useCallback } from "react"
import { Club } from "../../types/Club.type"
import { fetchClubs } from "../../api/fetchClubs"
import { ClubsContextType, ClubsPropsType } from "./ClubsContext.type"

const ClubsContext = createContext<ClubsContextType | undefined>(undefined)

export default function ClubsProvider({ children }: ClubsPropsType) {
  const [clubsData, setClubsData] = useState<Club[]>([])
  const [isLoadingClubs, setIsLoadingClubs] = useState<boolean>(true)

  const clubsFetchData = useCallback(async () => {
    setIsLoadingClubs(true)
    try {
      const data = await fetchClubs()
      setClubsData(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoadingClubs(false)
    }
  }, [])

  return (
    <ClubsContext.Provider
      value={{ clubsData, isLoadingClubs, clubsFetchData }}
    >
      {children}
    </ClubsContext.Provider>
  )
}

export function useClubs() {
  const context = useContext(ClubsContext)
  if (!context) {
    throw new Error("useMPs must be used within a MPsProvider")
  }
  return context
}
