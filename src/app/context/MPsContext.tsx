import { createContext, useContext, useState, useCallback } from "react"
import { MP } from "../types/MPType"
import { fetchMPs } from "../api/fetchMPs"

export type MPsContextType = {
  MPsData: MP[] | null
  isLoadingMPs: boolean
  error: string | null
  MPsFetchData: () => void
}

const MPsContext = createContext<MPsContextType | undefined>(undefined)

type MPsProviderProps = {
  children: React.ReactNode
}

export default function MPsProvider({ children }: MPsProviderProps) {
  const [MPsData, setMPsData] = useState<MP[] | null>(null)
  const [isLoadingMPs, setIsLoadingMPs] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const MPsFetchData = useCallback(async () => {
    setIsLoadingMPs(true)
    setError(null)
    try {
      const data = await fetchMPs()
      setMPsData(data)
    } catch (err) {
      console.error("Error fetching MPs data:", err)
      setError("Nie udało się załadować danych posłów.")
    } finally {
      setIsLoadingMPs(false)
    }
  }, [])

  return (
    <MPsContext.Provider value={{ MPsData, isLoadingMPs, error, MPsFetchData }}>
      {children}
    </MPsContext.Provider>
  )
}

export function useMPs() {
  const context = useContext(MPsContext)
  if (!context) {
    throw new Error("useMPs must be used within a MPsProvider")
  }
  return context
}
