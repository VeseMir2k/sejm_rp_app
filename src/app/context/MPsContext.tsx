import { createContext, useContext, useState, useCallback } from "react"
import { MP } from "../types/MPType"

export type MPsContextType = {
  MPsData: MP[] | null
  isLoadingMPs: boolean
  MPsFetchData: () => void
}

const MPsContext = createContext<MPsContextType | undefined>(undefined)

type MPsProps = {
  children: React.ReactNode
}

export default function MPsProvider({ children }: MPsProps) {
  const [MPsData, setMPsData] = useState<MP[]>([])
  const [isLoadingMPs, setIsLoadingMPs] = useState<boolean>(true)

  const MPsFetchData = useCallback(async () => {
    setIsLoadingMPs(true)
    try {
      const response = await fetch("https://api.sejm.gov.pl/sejm/term10/MP")
      if (!response.ok) {
        throw new Error("Error")
      }
      const data = await response.json()
      setMPsData(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoadingMPs(false)
    }
  }, [])

  return (
    <MPsContext.Provider value={{ MPsData, isLoadingMPs, MPsFetchData }}>
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
