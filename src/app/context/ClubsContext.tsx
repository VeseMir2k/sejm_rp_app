import { createContext, useContext, useState, useCallback } from "react"
import { Club } from "../types/ClubType"
import { fetchClubs } from "../api/fetchClubs"

export type ClubsContextType = {
  clubsData: Club[] | null
  isLoadingClubs: boolean
  clubsFetchData: () => void
}

const ClubsContext = createContext<ClubsContextType | undefined>(undefined)

type ClubsProps = {
  children: React.ReactNode
}

export default function ClubsProvider({ children }: ClubsProps) {
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
