import { createContext, useContext, useState, useCallback } from "react"
import { Proceeding } from "../../types/Proceeding.type"
import { fetchProceedings } from "../../api/fetchProceedings"
import {
  ProceedingsContextType,
  ProceedingsPropsType,
} from "./ProceedingsContext.type"

const ProceedingsContext = createContext<ProceedingsContextType | undefined>(
  undefined
)

export default function ProceedingsProvider({
  children,
}: ProceedingsPropsType) {
  const [ProceedingsData, setProceedingsData] = useState<Proceeding[]>([])
  const [isLoadingProceedings, setIsLoadingProceedings] =
    useState<boolean>(true)

  const ProceedingsFetchData = useCallback(async () => {
    setIsLoadingProceedings(true)
    try {
      const data = await fetchProceedings()
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
