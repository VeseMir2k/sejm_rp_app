import { createContext, useContext, useState, useCallback } from "react"
import { Proceeding } from "../types"

export type MPsContextType = {
  ProceedingsData: Proceeding[]
  isLoadingProceedings: boolean
  ProceedingsFetchData: () => void
}

const ProceedingsContext = createContext<MPsContextType | undefined>(undefined)

type ProceedingsProps = {
  children: React.ReactNode
}

export default function ProceedingsProvider({ children }: ProceedingsProps) {
  const [ProceedingsData, setProceedingsData] = useState<Proceeding[]>([])
  const [isLoadingProceedings, setIsLoadingProceedings] =
    useState<boolean>(true)

  const ProceedingsFetchData = useCallback(async () => {
    setIsLoadingProceedings(true)
    try {
      const response = await fetch(
        "https://api.sejm.gov.pl/sejm/term10/proceedings"
      )
      if (!response.ok) {
        throw new Error("Error")
      }
      const data = await response.json()
      setProceedingsData(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoadingProceedings(false)
    }
  }, [])

  return (
    <ProceedingsContext.Provider
      value={{ ProceedingsData, isLoadingProceedings, ProceedingsFetchData }}
    >
      {children}
    </ProceedingsContext.Provider>
  )
}

export function useProceedings() {
  const context = useContext(ProceedingsContext)
  if (!context) {
    throw new Error("useMPs must be used within a MPsProvider")
  }
  return context
}
