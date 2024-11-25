import { useContext } from "react"
import { ProceedingsContext } from "./ProceedingsContext"

export function useProceedings() {
  const context = useContext(ProceedingsContext)
  if (!context) {
    throw new Error("useProceedings must be used within a ProceedingsProvider")
  }
  return context
}
