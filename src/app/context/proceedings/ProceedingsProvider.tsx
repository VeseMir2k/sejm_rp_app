import { getProceedings } from "@/app/api/getProceedings"
import { useCallback } from "react"
import { useState } from "react"
import { TProceedingsProps } from "./ProceedingsContext.type"
import { ProceedingsContext } from "./ProceedingsContext"
import { TProceeding } from "@/app/types/Proceeding.type"

export const ProceedingsProvider = ({ children }: TProceedingsProps) => {
  const [proceedings, setProceedings] = useState<TProceeding[]>([])
  const [isLoadingProceedings, setIsLoadingProceedings] = useState<boolean>(true)

  const handleGetProceedings = useCallback(async () => {
    setIsLoadingProceedings(true)
    try {
      const data = await getProceedings()
      setProceedings(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoadingProceedings(false)
    }
  }, [])

  return (
    <ProceedingsContext.Provider value={{ proceedings, isLoadingProceedings, handleGetProceedings }}>
      {children}
    </ProceedingsContext.Provider>
  )
}
