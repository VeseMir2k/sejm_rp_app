import { createContext, useContext, useState, useCallback } from "react"
import { Proceeding } from "../types/ProceedingType"
import { fetchProceeding } from "../api/fetchProceeding"

export type ProceedingContextType = {
  ProceedingData: Proceeding | null
  isLoadingProceeding: boolean
  ProceedingFetchData: (proceeding: string) => void
}

const ProceedingContext = createContext<ProceedingContextType | undefined>(
  undefined
)

type ProceedingProps = {
  children: React.ReactNode
}

export default function ProceedingsProvider({ children }: ProceedingProps) {
  const [ProceedingData, setProceedingData] = useState<Proceeding | null>(null)
  const [isLoadingProceeding, setIsLoadingProceeding] = useState<boolean>(true)

  const ProceedingFetchData = useCallback(async (proceeding: string) => {
    setIsLoadingProceeding(true)
    try {
      const data = await fetchProceeding(proceeding)
      setProceedingData(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoadingProceeding(false)
    }
  }, [])

  return (
    <ProceedingContext.Provider
      value={{ ProceedingData, isLoadingProceeding, ProceedingFetchData }}
    >
      {children}
    </ProceedingContext.Provider>
  )
}

export function useProceeding() {
  const context = useContext(ProceedingContext)
  if (!context) {
    throw new Error("useProceeding must be used within a ProceedingsProvider")
  }
  return context
}
